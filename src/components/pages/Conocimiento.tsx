import { Gem, Mountain, Droplets, Flame } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';

export default function Conocimiento() {
  const collections = [
    {
      icon: Gem,
      title: 'Minerales y Cristales',
      description: 'Una extensa colección de especímenes minerales de todo el país y la región, mostrando la diversidad de estructuras cristalinas y composiciones químicas de la Tierra.',
      count: '[Número] especímenes'
    },
    {
      icon: Mountain,
      title: 'Formaciones Rocosas',
      description: 'Muestras de rocas sedimentarias, ígneas y metamórficas que cuentan la historia de procesos geológicos que abarcan millones de años.',
      count: '[Número] muestras'
    },
    {
      icon: Droplets,
      title: 'Fósiles y Paleontología',
      description: 'Restos preservados y rastros de vida antigua, proporcionando conocimientos sobre la evolución y ambientes del pasado.',
      count: '[Número] fósiles'
    },
    {
      icon: Flame,
      title: 'Materiales Volcánicos',
      description: 'Especímenes de erupciones volcánicas y fenómenos relacionados, demostrando los procesos internos dinámicos de la Tierra.',
      count: '[Número] elementos'
    }
  ];

  return (
    <>
      <div className="bg-gradient-to-br from-stone-100 to-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Conocimiento Geológico
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explora nuestro conocimiento geológico curado, cada elemento cuidadosamente documentado
            y preservado para investigación y educación.
          </p>
        </div>
      </div>

      <Section
        title="Categorías de Conocimiento"
        subtitle="Navega por nuestro conocimiento geológico integral organizado por tipo y clasificación"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <Card
              key={index}
              title={collection.title}
              description={collection.description}
              icon={collection.icon}
            >
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-500">{collection.count}</span>
                <button className="text-amber-700 text-sm font-medium hover:text-amber-800">
                  Ver Más →
                </button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="gray" title="Geología de Honduras">
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Honduras posee una rica diversidad geológica que refleja millones de años de historia tectónica,
          actividad volcánica y procesos sedimentarios.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg p-6 shadow-md">
              <div className="bg-gray-200 h-48 rounded-md mb-4 flex items-center justify-center">
                <span className="text-gray-400">Imagen de Referencia</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">[Nombre del Espécimen]</h3>
              <p className="text-sm text-gray-600">[Descripción y detalles del espécimen geológico]</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="bg-amber-700 rounded-xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Contribuye al Conocimiento</h3>
          <p className="text-lg mb-6 text-amber-50 max-w-2xl mx-auto">
            Si tienes información geológica, muestras o fotografías que puedan contribuir a nuestro
            conocimiento, contáctanos para colaborar.
          </p>
          <button className="px-8 py-3 bg-white text-amber-700 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Contactar
          </button>
        </div>
      </Section>
    </>
  );
}
