import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronDown } from 'lucide-react';

const countries = [
  { name: "Afghanistan", code: "+93", flag: "🇦🇫" },
  { name: "Afrique du Sud", code: "+27", flag: "🇿🇦" },
  { name: "Albanie", code: "+355", flag: "🇦🇱" },
  { name: "Algérie", code: "+213", flag: "🇩🇿" },
  { name: "Allemagne", code: "+49", flag: "🇩🇪" },
  { name: "Andorre", code: "+376", flag: "🇦🇩" },
  { name: "Angola", code: "+244", flag: "🇦🇴" },
  { name: "Antigua-et-Barbuda", code: "+1-268", flag: "🇦🇬" },
  { name: "Arabie Saoudite", code: "+966", flag: "🇸🇦" },
  { name: "Argentine", code: "+54", flag: "🇦🇷" },
  { name: "Arménie", code: "+374", flag: "🇦🇲" },
  { name: "Australie", code: "+61", flag: "🇦🇺" },
  { name: "Autriche", code: "+43", flag: "🇦🇹" },
  { name: "Azerbaïdjan", code: "+994", flag: "🇦🇿" },
  { name: "Bahamas", code: "+1-242", flag: "🇧🇸" },
  { name: "Bahreïn", code: "+973", flag: "🇧🇭" },
  { name: "Bangladesh", code: "+880", flag: "🇧🇩" },
  { name: "Barbade", code: "+1-246", flag: "🇧🇧" },
  { name: "Belgique", code: "+32", flag: "🇧🇪" },
  { name: "Belize", code: "+501", flag: "🇧🇿" },
  { name: "Bénin", code: "+229", flag: "🇧🇯" },
  { name: "Bhoutan", code: "+975", flag: "🇧🇹" },
  { name: "Biélorussie", code: "+375", flag: "🇧🇾" },
  { name: "Birmanie", code: "+95", flag: "🇲🇲" },
  { name: "Bolivie", code: "+591", flag: "🇧🇴" },
  { name: "Bosnie-Herzégovine", code: "+387", flag: "🇧🇦" },
  { name: "Botswana", code: "+267", flag: "🇧🇼" },
  { name: "Brésil", code: "+55", flag: "🇧🇷" },
  { name: "Brunei", code: "+673", flag: "🇧🇳" },
  { name: "Bulgarie", code: "+359", flag: "🇧🇬" },
  { name: "Burkina Faso", code: "+226", flag: "🇧🇫" },
  { name: "Burundi", code: "+257", flag: "🇧🇮" },
  { name: "Cambodge", code: "+855", flag: "🇰🇭" },
  { name: "Cameroun", code: "+237", flag: "🇨🇲" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "Cap-Vert", code: "+238", flag: "🇨🇻" },
  { name: "Chili", code: "+56", flag: "🇨🇱" },
  { name: "Chine", code: "+86", flag: "🇨🇳" },
  { name: "Chypre", code: "+357", flag: "🇨🇾" },
  { name: "Colombie", code: "+57", flag: "🇨🇴" },
  { name: "Comores", code: "+269", flag: "🇰🇲" },
  { name: "Congo-Brazzaville", code: "+242", flag: "🇨🇬" },
  { name: "Congo-Kinshasa", code: "+243", flag: "🇨🇩" },
  { name: "Corée du Nord", code: "+850", flag: "🇰🇵" },
  { name: "Corée du Sud", code: "+82", flag: "🇰🇷" },
  { name: "Costa Rica", code: "+506", flag: "🇨🇷" },
  { name: "Côte d'Ivoire", code: "+225", flag: "🇨🇮" },
  { name: "Croatie", code: "+385", flag: "🇭🇷" },
  { name: "Cuba", code: "+53", flag: "🇨🇺" },
  { name: "Danemark", code: "+45", flag: "🇩🇰" },
  { name: "Djibouti", code: "+253", flag: "🇩🇯" },
  { name: "Dominique", code: "+1-767", flag: "🇩🇲" },
  { name: "Égypte", code: "+20", flag: "🇪🇬" },
  { name: "Émirats Arabes Unis", code: "+971", flag: "🇦🇪" },
  { name: "Équateur", code: "+593", flag: "🇪🇨" },
  { name: "Érythrée", code: "+291", flag: "🇪🇷" },
  { name: "Espagne", code: "+34", flag: "🇪🇸" },
  { name: "Estonie", code: "+372", flag: "🇪🇪" },
  { name: "Eswatini", code: "+268", flag: "🇸🇿" },
  { name: "États-Unis", code: "+1", flag: "🇺🇸" },
  { name: "Éthiopie", code: "+251", flag: "🇪🇹" },
  { name: "Fidji", code: "+679", flag: "🇫🇯" },
  { name: "Finlande", code: "+358", flag: "🇫🇮" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "Gabon", code: "+241", flag: "🇬🇦" },
  { name: "Gambie", code: "+220", flag: "🇬🇲" },
  { name: "Géorgie", code: "+995", flag: "🇬🇪" },
  { name: "Ghana", code: "+233", flag: "🇬🇭" },
  { name: "Grèce", code: "+30", flag: "🇬🇷" },
  { name: "Grenade", code: "+1-473", flag: "🇬🇩" },
  { name: "Guatemala", code: "+502", flag: "🇬🇹" },
  { name: "Guinée", code: "+224", flag: "🇬🇳" },
  { name: "Guinée équatoriale", code: "+240", flag: "🇬🇶" },
  { name: "Guinée-Bissau", code: "+245", flag: "🇬🇼" },
  { name: "Guyana", code: "+592", flag: "🇬🇾" },
  { name: "Haïti", code: "+509", flag: "🇭🇹" },
  { name: "Honduras", code: "+504", flag: "🇭🇳" },
  { name: "Hongrie", code: "+36", flag: "🇭🇺" },
  { name: "Inde", code: "+91", flag: "🇮🇳" },
  { name: "Indonésie", code: "+62", flag: "🇮🇩" },
  { name: "Irak", code: "+964", flag: "🇮🇶" },
  { name: "Iran", code: "+98", flag: "🇮🇷" },
  { name: "Irlande", code: "+353", flag: "🇮🇪" },
  { name: "Islande", code: "+354", flag: "🇮🇸" },
  { name: "Israël", code: "+972", flag: "🇮🇱" },
  { name: "Italie", code: "+39", flag: "🇮🇹" },
  { name: "Jamaïque", code: "+1-876", flag: "🇯🇲" },
  { name: "Japon", code: "+81", flag: "🇯🇵" },
  { name: "Jordanie", code: "+962", flag: "🇯🇴" },
  { name: "Kazakhstan", code: "+7", flag: "🇰🇿" },
  { name: "Kenya", code: "+254", flag: "🇰🇪" },
  { name: "Kirghizistan", code: "+996", flag: "🇰🇬" },
  { name: "Kiribati", code: "+686", flag: "🇰🇮" },
  { name: "Koweït", code: "+965", flag: "🇰🇼" },
  { name: "Laos", code: "+856", flag: "🇱🇦" },
  { name: "Lesotho", code: "+266", flag: "🇱🇸" },
  { name: "Lettonie", code: "+371", flag: "🇱🇻" },
  { name: "Liban", code: "+961", flag: "🇱🇧" },
  { name: "Libéria", code: "+231", flag: "🇱🇷" },
  { name: "Libye", code: "+218", flag: "🇱🇾" },
  { name: "Liechtenstein", code: "+423", flag: "🇱🇮" },
  { name: "Lituanie", code: "+370", flag: "🇱🇹" },
  { name: "Luxembourg", code: "+352", flag: "🇱🇺" },
  { name: "Macédoine du Nord", code: "+389", flag: "🇲🇰" },
  { name: "Madagascar", code: "+261", flag: "🇲🇬" },
  { name: "Malaisie", code: "+60", flag: "🇲🇾" },
  { name: "Malawi", code: "+265", flag: "🇲🇼" },
  { name: "Maldives", code: "+960", flag: "🇲🇻" },
  { name: "Mali", code: "+223", flag: "🇲🇱" },
  { name: "Malte", code: "+356", flag: "🇲🇹" },
  { name: "Maroc", code: "+212", flag: "🇲🇦" },
  { name: "Marshall", code: "+692", flag: "🇲🇭" },
  { name: "Maurice", code: "+230", flag: "🇲🇺" },
  { name: "Mauritanie", code: "+222", flag: "🇲🇷" },
  { name: "Mexique", code: "+52", flag: "🇲🇽" },
  { name: "Micronésie", code: "+691", flag: "🇫🇲" },
  { name: "Moldavie", code: "+373", flag: "🇲🇩" },
  { name: "Monaco", code: "+377", flag: "🇲🇨" },
  { name: "Mongolie", code: "+976", flag: "🇲🇳" },
  { name: "Monténégro", code: "+382", flag: "🇲🇪" },
  { name: "Mozambique", code: "+258", flag: "🇲🇿" },
  { name: "Namibie", code: "+264", flag: "🇳🇦" },
  { name: "Nauru", code: "+674", flag: "🇳🇷" },
  { name: "Népal", code: "+977", flag: "🇳🇵" },
  { name: "Nicaragua", code: "+505", flag: "🇳🇮" },
  { name: "Niger", code: "+227", flag: "🇳🇪" },
  { name: "Nigéria", code: "+234", flag: "🇳🇬" },
  { name: "Norvège", code: "+47", flag: "🇳🇴" },
  { name: "Nouvelle-Zélande", code: "+64", flag: "🇳🇿" },
  { name: "Oman", code: "+968", flag: "🇴🇲" },
  { name: "Ouganda", code: "+256", flag: "🇺🇬" },
  { name: "Ouzbékistan", code: "+998", flag: "🇺🇿" },
  { name: "Pakistan", code: "+92", flag: "🇵🇰" },
  { name: "Palaos", code: "+680", flag: "🇵🇼" },
  { name: "Palestine", code: "+970", flag: "🇵🇸" },
  { name: "Panama", code: "+507", flag: "🇵🇦" },
  { name: "Papouasie-Nouvelle-Guinée", code: "+675", flag: "🇵🇬" },
  { name: "Paraguay", code: "+595", flag: "🇵🇾" },
  { name: "Pays-Bas", code: "+31", flag: "🇳🇱" },
  { name: "Pérou", code: "+51", flag: "🇵🇪" },
  { name: "Philippines", code: "+63", flag: "🇵🇭" },
  { name: "Pologne", code: "+48", flag: "🇵🇱" },
  { name: "Portugal", code: "+351", flag: "🇵🇹" },
  { name: "Qatar", code: "+974", flag: "🇶🇦" },
  { name: "République Centrafricaine", code: "+236", flag: "🇨🇫" },
  { name: "République Dominicaine", code: "+1-809", flag: "🇩🇴" },
  { name: "République Tchèque", code: "+420", flag: "🇨🇿" },
  { name: "Roumanie", code: "+40", flag: "🇷🇴" },
  { name: "Royaume-Uni", code: "+44", flag: "🇬🇧" },
  { name: "Russie", code: "+7", flag: "🇷🇺" },
  { name: "Rwanda", code: "+250", flag: "🇷🇼" },
  { name: "Saint-Christophe-et-Niévès", code: "+1-869", flag: "🇰🇳" },
  { name: "Sainte-Lucie", code: "+1-758", flag: "🇱🇨" },
  { name: "Saint-Marin", code: "+378", flag: "🇸🇲" },
  { name: "Saint-Vincent-et-les-Grenadines", code: "+1-784", flag: "🇻🇨" },
  { name: "Salomon", code: "+677", flag: "🇸🇧" },
  { name: "Salvador", code: "+503", flag: "🇸🇻" },
  { name: "Samoa", code: "+685", flag: "🇼🇸" },
  { name: "Sao Tomé-et-Principe", code: "+239", flag: "🇸🇹" },
  { name: "Sénégal", code: "+221", flag: "🇸🇳" },
  { name: "Serbie", code: "+381", flag: "🇷🇸" },
  { name: "Seychelles", code: "+248", flag: "🇸🇨" },
  { name: "Sierra Leone", code: "+232", flag: "🇸🇱" },
  { name: "Singapour", code: "+65", flag: "🇸🇬" },
  { name: "Slovaquie", code: "+421", flag: "🇸🇰" },
  { name: "Slovénie", code: "+386", flag: "🇸🇮" },
  { name: "Somalie", code: "+252", flag: "🇸🇴" },
  { name: "Soudan", code: "+249", flag: "🇸🇩" },
  { name: "Soudan du Sud", code: "+211", flag: "🇸🇸" },
  { name: "Sri Lanka", code: "+94", flag: "🇱🇰" },
  { name: "Suède", code: "+46", flag: "🇸🇪" },
  { name: "Suisse", code: "+41", flag: "🇨🇭" },
  { name: "Suriname", code: "+597", flag: "🇸🇷" },
  { name: "Syrie", code: "+963", flag: "🇸🇾" },
  { name: "Tadjikistan", code: "+992", flag: "🇹🇯" },
  { name: "Tanzanie", code: "+255", flag: "🇹🇿" },
  { name: "Tchad", code: "+235", flag: "🇹🇩" },
  { name: "Thaïlande", code: "+66", flag: "🇹🇭" },
  { name: "Timor oriental", code: "+670", flag: "🇹🇱" },
  { name: "Togo", code: "+228", flag: "🇹🇬" },
  { name: "Tonga", code: "+676", flag: "🇹🇴" },
  { name: "Trinité-et-Tobago", code: "+1-868", flag: "🇹🇹" },
  { name: "Tunisie", code: "+216", flag: "🇹🇳" },
  { name: "Turkménistan", code: "+993", flag: "🇹🇲" },
  { name: "Turquie", code: "+90", flag: "🇹🇷" },
  { name: "Tuvalu", code: "+688", flag: "🇹🇻" },
  { name: "Ukraine", code: "+380", flag: "🇺🇦" },
  { name: "Uruguay", code: "+598", flag: "🇺🇾" },
  { name: "Vanuatu", code: "+678", flag: "🇻🇺" },
  { name: "Vatican", code: "+379", flag: "🇻🇦" },
  { name: "Venezuela", code: "+58", flag: "🇻🇪" },
  { name: "Vietnam", code: "+84", flag: "🇻🇳" },
  { name: "Yémen", code: "+967", flag: "🇾🇪" },
  { name: "Zambie", code: "+260", flag: "🇿🇲" },
  { name: "Zimbabwe", code: "+263", flag: "🇿🇼" }
];

interface CountryAutocompleteProps {
  id?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  defaultValue?: string;
  onCountryChange?: (country: { name: string, code: string, flag: string }) => void;
}

const CountryAutocomplete: React.FC<CountryAutocompleteProps> = ({ 
  id,
  name, 
  placeholder = "Sélectionnez un pays", 
  required = false,
  className = "",
  defaultValue = "",
  onCountryChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState(defaultValue);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const filtered = countries.filter(country => 
      country.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [query]);

  const handleSelect = (country: typeof countries[0]) => {
    setQuery(country.name);
    setIsOpen(false);
    if (onCountryChange) {
      onCountryChange(country);
    }
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <div className="relative">
        <input
          id={id}
          type="text"
          name={name}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          required={required}
          autoComplete="off"
          className="w-full bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:border-blue-500/50 transition-colors text-black dark:text-white"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none">
          {isOpen ? <Search className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && filteredCountries.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-50 w-full mt-2 bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-xl max-h-60 overflow-y-auto custom-scrollbar shadow-2xl"
          >
            {filteredCountries.map((country, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleSelect(country)}
                className="w-full text-left px-4 py-3 hover:bg-blue-500/20 text-black dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm border-b border-black/5 dark:border-white/5 last:border-0 flex items-center gap-2"
              >
                <span className="text-lg">{country.flag}</span>
                <span className="flex-1">{country.name}</span>
                <span className="text-zinc-500 text-xs">{country.code}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CountryAutocomplete;
