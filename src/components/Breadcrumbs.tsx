import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav className="flex mb-8 overflow-x-auto no-scrollbar whitespace-nowrap" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link to="/" className="text-zinc-500 hover:text-blue-400 transition-colors flex items-center gap-1.5">
            <Home className="w-3.5 h-3.5" />
            <span>Accueil</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <ChevronRight className="w-3.5 h-3.5 text-zinc-700 flex-shrink-0" />
            {item.path ? (
              <Link 
                to={item.path} 
                className="text-zinc-500 hover:text-blue-400 transition-colors"
                aria-current={index === items.length - 1 ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-zinc-300 font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
