import { Microscope, Globe, BookOpen, GraduationCap } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';

export default function Inicio() {
  const features = [
    {
      icon: Globe,
      title: 'Exploración Geológica',
      description: 'Descubre los procesos fascinantes que han moldeado nuestro planeta a lo largo de miles de millones de años mediante experiencias digitales interactivas.'
    },
    {
      icon: Microscope,
      title: 'Investigación Científica',
      description: 'Accede a investigaciones geológicas de vanguardia y contribuye a nuestra comprensión de los sistemas dinámicos de la Tierra.'
    },
    {
      icon: BookOpen,
      title: 'Recursos Educativos',
      description: 'Materiales de aprendizaje completos para estudiantes, educadores y entusiastas de la geología de todos los niveles.'
    },
    {
      icon: GraduationCap,
      title: 'Formación Continua',
      description: 'Accede a nuestro campus virtual con cursos, talleres y programas de capacitación en ciencias geológicas.'
    }
  ];

  return (
    <>
      <div className="bg-gradient-to-br from-amber-50 to-stone-100 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Bienvenidos al Museo Geológico Virtual
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Una plataforma institucional de INHGEOMIN Honduras dedicada a la divulgación científica
              y educación en ciencias de la Tierra mediante la exploración digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-amber-700 text-white rounded-lg font-medium hover:bg-amber-800 transition-colors">
                Explorar Conocimiento
              </button>
              <button className="px-8 py-3 bg-white text-amber-700 border-2 border-amber-700 rounded-lg font-medium hover:bg-amber-50 transition-colors">
                Conocer Más
              </button>
            </div>
          </div>
        </div>
      </div>

      <Section
        title="Nuestra Misión"
        subtitle="Avanzar el conocimiento geológico y hacer las ciencias de la Tierra accesibles para todos"
      >
        <div className="prose prose-lg max-w-4xl mx-auto text-gray-600">
          <p className="text-center leading-relaxed">
            El Museo Geológico Virtual de INHGEOMIN Honduras es una institución digital integral
            dedicada a preservar, estudiar y compartir el conocimiento geológico. Nuestra plataforma
            proporciona a investigadores, educadores y al público acceso a recursos educativos,
            información científica y materiales interactivos que iluminan la compleja historia de nuestro planeta.
          </p>
        </div>
      </Section>

      <Section background="gray" title="Qué Ofrecemos">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </Section>

      <Section title="Inicia Tu Exploración">
        <div className="bg-gradient-to-r from-amber-700 to-stone-700 rounded-2xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">¿Listo para Explorar?</h3>
          <p className="text-xl mb-8 text-amber-50">
            Comienza tu viaje a través del tiempo geológico y descubre las maravillas de nuestro planeta.
          </p>
          <button className="px-8 py-3 bg-white text-amber-700 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Ver Conocimiento Geológico
          </button>
        </div>
      </Section>
    </>
  );
}
