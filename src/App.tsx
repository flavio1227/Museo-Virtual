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
      <Header onNavigate={setCurrentSection} currentSection={currentSection} />

      <main className="flex-grow">
        {renderSection()}
      </main>

      <Footer />
    </div>
  );
}

export default App;
