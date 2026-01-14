import { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Inicio from './components/pages/Inicio';
import SobreMuseo from './components/pages/SobreMuseo';
import Conocimiento from './components/pages/Conocimiento';
import Recursos from './components/pages/Recursos';
import Formacion from './components/pages/Formacion';

function App() {
  const [currentSection, setCurrentSection] = useState('inicio');

  const renderSection = () => {
    switch (currentSection) {
      case 'inicio':
        return <Inicio />;
      case 'sobre-museo':
        return <SobreMuseo />;
      case 'conocimiento':
        return <Conocimiento />;
      case 'recursos':
        return <Recursos />;
      case 'formacion':
        return <Formacion />;
      default:
        return <Inicio />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <a
        href="https://flavio1227.github.io/SIGEM1.1/"
        className="fixed top-3 left-3 z-[60] inline-block px-3 py-2 bg-white/95 backdrop-blur-sm border border-gray-300/50 rounded-md shadow-sm text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-white hover:border-gray-400/60 transition-all duration-200"
        style={{ WebkitBackdropFilter: 'blur(8px)' }}
      >
        SIGEM
      </a>
      <Header onNavigate={setCurrentSection} currentSection={currentSection} />

      <main className="flex-grow">
        {renderSection()}
      </main>

      <Footer />
    </div>
  );
}

export default App;
