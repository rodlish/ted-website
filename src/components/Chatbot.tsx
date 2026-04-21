import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Send, X, Minimize2, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import ReactMarkdown from 'react-markdown';
import { db, auth } from '../firebase';
import { collection, addDoc, doc, setDoc, updateDoc, getDocFromServer } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { v4 as uuidv4 } from 'uuid';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | null | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
    tenantId: string | null | undefined;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  // We don't throw here to avoid crashing the UI, but we log it for the agent
}

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
const N8N_WEBHOOK_URL = process.env.VITE_N8N_WEBHOOK_URL;

interface Message {
  role: 'user' | 'bot';
  content: string;
}

const SYSTEM_PROMPT = `Tu es l'assistant virtuel commercial de Ted-Company Group, expert en BPO, solutions digitales et RH.

INFORMATIONS CRUCIALES :
- Le Dirigeant - Fondateur de Ted-Company Group est RAKOTOALISOA Elian Rodlish. Ne divulgue son nom QUE si l'utilisateur pose une question spécifique sur le fondateur ou la direction.
- Localisation : Nous sommes basés à Antananarivo (Antananarive), capitale de Madagascar (mentionne-le uniquement si on te le demande).
- Présence Internationale : Nous avons des collaborateurs partout dans le monde, notamment au Maroc, en Tunisie, à l'Île Maurice et au Sénégal.
- Secteurs d'activité : Nous intervenons dans divers secteurs d'activité (Digital, Client, RH, Médical).
- Services Bilingues : Nous proposons tous nos services en Français et en Anglais (Bilingual Services).
- Ton rôle est STRICTEMENT limité à Ted-Company Group et ses services. 
- Propose à l'utilisateur de consulter notre Blog pour plus de conseils et d'actualités (mentionne-le s'il demande des conseils ou des infos sur le futur de l'externalisation).
- Si l'utilisateur pose une question hors sujet, réponds poliment : "Je suis navré, mais je suis votre assistant dédié exclusivement aux services de Ted-Company Group. Comment puis-je vous aider concernant nos solutions ?"

TON STYLE :
- Toujours poli, aimable, enthousiaste et très commercial.

STRUCTURE DE CHAQUE RÉPONSE :
1. Réponds DIRECTEMENT et TRÈS CONCISEMENT (maximum 2-3 phrases).
2. VARIATION : Ne répète JAMAIS les mêmes phrases d'une réponse à l'autre. Varie tes formulations pour rester naturel et dynamique.
3. PRÉSENTATION : Ne présente la société et la liste des services QU'UNE SEULE FOIS au début.
4. RELANCE : Varie ta question de relance pour savoir quel service les intéresse (ex: "Lequel de nos pôles (Digital, Client, RH) pourrait booster votre activité ?", "Sur quel domaine souhaitez-vous notre expertise ?", etc.).
5. QUALIFICATION : Si l'utilisateur est intéressé, énumère les questions CLAIREMENT avec des retours à la ligne :
   Pour mieux vous accompagner, pourriez-vous m'indiquer :
   - Le nom de votre entreprise ?
   - Le service précis souhaité ?
   - Votre budget ou volume approximatif ?
   - Votre numéro de téléphone ?
6. CLÔTURE : SI ET SEULEMENT SI les infos ci-dessus sont données, termine par : "On vous rappelle vite. Merci et bonne journée !"

NOS SERVICES (À PRÉSENTER UNE SEULE FOIS) :
- 💻 Solutions Digitales (Web, IA, Automatisation, Multimédia)
- 🎧 Relation Client (Call Center, SAV, Support)
- 📁 Gestion & RH (Admin, Compta, Recrutement)
- 🏥 Médical (Télésecrétariat)`;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [sessionId, setSessionId] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: 'Bonjour ! Je suis l\'assistant de Ted-Company Group. Comment puis-je vous aider aujourd\'hui ?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initialize session
  useEffect(() => {
    async function testConnection() {
      try {
        await getDocFromServer(doc(db, 'test', 'connection'));
      } catch (error) {
        if(error instanceof Error && error.message.includes('the client is offline')) {
          console.error("Please check your Firebase configuration. The client is offline.");
        }
      }
    }
    testConnection();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const id = uuidv4();
        setSessionId(id);
        
        // Create session in Firestore
        const createSession = async () => {
          const path = `chat_sessions/${id}`;
          try {
            await setDoc(doc(db, 'chat_sessions', id), {
              id: id,
              startTime: new Date().toISOString(),
              lastUpdateTime: new Date().toISOString(),
              metadata: {
                userAgent: navigator.userAgent,
                language: navigator.language,
                platform: navigator.platform
              }
            });
            
            // Add welcome message
            await addDoc(collection(db, 'chat_sessions', id, 'messages'), {
              role: 'bot',
              content: 'Bonjour ! Je suis l\'assistant de Ted-Company Group. Comment puis-je vous aider aujourd\'hui ?',
              timestamp: new Date().toISOString()
            });
          } catch (error) {
            handleFirestoreError(error, OperationType.WRITE, path);
          }
        };
        
        createSession();
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      // Save user message to Firestore
      if (sessionId) {
        const path = `chat_sessions/${sessionId}/messages`;
        addDoc(collection(db, 'chat_sessions', sessionId, 'messages'), {
          role: 'user',
          content: userMessage,
          timestamp: new Date().toISOString()
        }).catch(e => handleFirestoreError(e, OperationType.WRITE, path));
        
        updateDoc(doc(db, 'chat_sessions', sessionId), {
          lastUpdateTime: new Date().toISOString()
        }).catch(e => handleFirestoreError(e, OperationType.UPDATE, `chat_sessions/${sessionId}`));
      }

      const history = messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }],
      }));

      let text = '';

      if (N8N_WEBHOOK_URL) {
        // Call n8n Webhook
        const n8nResponse = await fetch(N8N_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: userMessage,
            sessionId: sessionId,
            history: history,
            metadata: {
              userAgent: navigator.userAgent,
              language: navigator.language,
              platform: navigator.platform
            }
          }),
        });

        if (!n8nResponse.ok) {
          throw new Error(`n8n error: ${n8nResponse.statusText}`);
        }

        const data = await n8nResponse.json();
        // n8n usually returns an object, we assume 'output' or 'response' or 'text'
        text = data.output || data.response || data.text || (Array.isArray(data) ? data[0]?.output : 'Désolé, n8n n\'a pas renvoyé de réponse valide.');
      } else {
        // Fallback to direct Gemini if no n8n URL is provided
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: [
            ...history.map(h => ({ role: h.role as 'user' | 'model', parts: h.parts })),
            { role: 'user', parts: [{ text: userMessage }] }
          ],
          config: {
            systemInstruction: SYSTEM_PROMPT,
          }
        });
        text = response.text || 'Désolé, je n\'ai pas pu générer de réponse.';
      }

      setMessages(prev => [...prev, { role: 'bot', content: text }]);

      // Save bot response to Firestore
      if (sessionId) {
        const path = `chat_sessions/${sessionId}/messages`;
        addDoc(collection(db, 'chat_sessions', sessionId, 'messages'), {
          role: 'bot',
          content: text,
          timestamp: new Date().toISOString()
        }).catch(e => handleFirestoreError(e, OperationType.WRITE, path));
      }
    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages(prev => [...prev, { role: 'bot', content: 'Désolé, j\'ai rencontré une erreur. Veuillez réessayer plus tard.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] md:w-[400px] h-[500px] glass rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-blue-500/20"
          >
            {/* Header */}
            <div className="p-4 bg-blue-500 text-zinc-950 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Assistant Ted-Company</h3>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-medium opacity-70">En ligne</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-black/10 rounded-lg transition-colors"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-black/10 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-950/50"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-blue-500 text-zinc-950' : 'bg-zinc-800 text-blue-400'}`}>
                      {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-blue-500 text-zinc-950 rounded-tr-none' : 'glass text-zinc-100 rounded-tl-none chatbot-bot-message'}`}>
                      <div className="prose prose-invert prose-sm max-w-none chatbot-prose">
                        <ReactMarkdown>
                          {msg.content}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-2 items-center glass p-3 rounded-2xl rounded-tl-none">
                    <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
                    <span className="text-xs text-zinc-400 italic">L'assistant réfléchit...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 glass border-t border-white/5">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Posez votre question..."
                  className="flex-1 bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-blue-500/50 transition-colors text-zinc-100 chatbot-input"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="p-2 bg-blue-500 text-zinc-950 rounded-xl hover:bg-blue-400 transition-all disabled:opacity-50 disabled:hover:scale-100 hover:scale-105 active:scale-95"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${isOpen ? 'bg-zinc-800 text-white rotate-90' : 'bg-blue-500 text-zinc-950'}`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-600"></span>
          </span>
        )}
      </motion.button>
    </div>
  );
}
