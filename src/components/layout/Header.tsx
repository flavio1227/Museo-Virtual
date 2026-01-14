interface HeaderProps {
  onNavigate: (section: string) => void;
  currentSection: string;
}

export default function Header({ onNavigate, currentSection }: HeaderProps) {
  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-museo', label: 'Sobre el Museo' },
    { id: 'conocimiento', label: 'Conocimiento Geológico' },
    { id: 'recursos', label: 'Recursos Educativos' },
    { id: 'formacion', label: 'Formación Virtual' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a 
            href="/" 
            className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('inicio');
            }}
          >
            <img 
              src={`${import.meta.env.BASE_URL}logo.svg`}
              alt="Museo Geológico Virtual Logo" 
              className="h-16 w-16"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Museo Geológico Virtual</h1>
              <p className="text-xs text-gray-500">INHGEOMIN Honduras</p>
            </div>
          </a>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentSection === item.id
                    ? 'text-amber-700 border-b-2 border-amber-700'
                    : 'text-gray-600 hover:text-amber-700'
                } pb-1`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="md:hidden">
            <select
              value={currentSection}
              onChange={(e) => onNavigate(e.target.value)}
              className="text-sm border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
            >
              {navItems.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
