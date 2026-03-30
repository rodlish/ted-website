import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronDown } from 'lucide-react';

const countries = [
  "Afghanistan", "Afrique du Sud", "Albanie", "Algérie", "Allemagne", "Andorre", "Angola", "Antigua-et-Barbuda", "Arabie Saoudite", "Argentine", "Arménie", "Australie", "Autriche", "Azerbaïdjan",
  "Bahamas", "Bahreïn", "Bangladesh", "Barbade", "Belgique", "Belize", "Bénin", "Bhoutan", "Biélorussie", "Birmanie", "Bolivie", "Bosnie-Herzégovine", "Botswana", "Brésil", "Brunei", "Bulgarie", "Burkina Faso", "Burundi",
  "Cambodge", "Cameroun", "Canada", "Cap-Vert", "Chili", "Chine", "Chypre", "Colombie", "Comores", "Congo-Brazzaville", "Congo-Kinshasa", "Corée du Nord", "Corée du Sud", "Costa Rica", "Côte d'Ivoire", "Croatie", "Cuba",
  "Danemark", "Djibouti", "Dominique",
  "Égypte", "Émirats Arabes Unis", "Équateur", "Érythrée", "Espagne", "Estonie", "Eswatini", "États-Unis", "Éthiopie",
  "Fidji", "Finlande", "France",
  "Gabon", "Gambie", "Géorgie", "Ghana", "Grèce", "Grenade", "Guatemala", "Guinée", "Guinée équatoriale", "Guinée-Bissau", "Guyana",
  "Haïti", "Honduras", "Hongrie",
  "Inde", "Indonésie", "Irak", "Iran", "Irlande", "Islande", "Israël", "Italie",
  "Jamaïque", "Japon", "Jordanie",
  "Kazakhstan", "Kenya", "Kirghizistan", "Kiribati", "Koweït",
  "Laos", "Lesotho", "Lettonie", "Liban", "Libéria", "Libye", "Liechtenstein", "Lituanie", "Luxembourg",
  "Macédoine du Nord", "Madagascar", "Malaisie", "Malawi", "Maldives", "Mali", "Malte", "Maroc", "Marshall", "Maurice", "Mauritanie", "Mexique", "Micronésie", "Moldavie", "Monaco", "Mongolie", "Monténégro", "Mozambique",
  "Namibie", "Nauru", "Népal", "Nicaragua", "Niger", "Nigéria", "Norvège", "Nouvelle-Zélande",
  "Oman", "Ouganda", "Ouzbékistan",
  "Pakistan", "Palaos", "Palestine", "Panama", "Papouasie-Nouvelle-Guinée", "Paraguay", "Pays-Bas", "Pérou", "Philippines", "Pologne", "Portugal",
  "Qatar",
  "République Centrafricaine", "République Dominicaine", "République Tchèque", "Roumanie", "Royaume-Uni", "Russie", "Rwanda",
  "Saint-Christophe-et-Niévès", "Sainte-Lucie", "Saint-Marin", "Saint-Vincent-et-les-Grenadines", "Salomon", "Salvador", "Samoa", "Sao Tomé-et-Principe", "Sénégal", "Serbie", "Seychelles", "Sierra Leone", "Singapour", "Slovaquie", "Slovénie", "Somalie", "Soudan", "Soudan du Sud", "Sri Lanka", "Suède", "Suisse", "Suriname", "Syrie",
  "Tadjikistan", "Tanzanie", "Tchad", "Thaïlande", "Timor oriental", "Togo", "Tonga", "Trinité-et-Tobago", "Tunisie", "Turkménistan", "Turquie", "Tuvalu",
  "Ukraine", "Uruguay",
  "Vanuatu", "Vatican", "Venezuela", "Vietnam",
  "Yémen",
  "Zambie", "Zimbabwe"
];

interface CountryAutocompleteProps {
  name: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  defaultValue?: string;
}

const CountryAutocomplete: React.FC<CountryAutocompleteProps> = ({ 
  name, 
  placeholder = "Sélectionnez un pays", 
  required = false,
  className = "",
  defaultValue = ""
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
      country.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [query]);

  const handleSelect = (country: string) => {
    setQuery(country);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <div className="relative">
        <input
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
          className="w-full glass bg-white/5 border-white/10 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:border-blue-500/50 transition-colors"
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
            className="absolute z-50 w-full mt-2 glass bg-zinc-900/95 border border-white/10 rounded-xl max-h-60 overflow-y-auto custom-scrollbar shadow-2xl"
          >
            {filteredCountries.map((country, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleSelect(country)}
                className="w-full text-left px-4 py-3 hover:bg-blue-500/20 hover:text-blue-400 transition-colors text-sm border-b border-white/5 last:border-0"
              >
                {country}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CountryAutocomplete;
