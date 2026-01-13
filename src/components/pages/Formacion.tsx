import { GraduationCap, BookOpen, Monitor, ExternalLink } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';

export default function Formacion() {
  const programs = [
    {
      icon: BookOpen,
      title: 'Cursos en Línea',
      description: 'Programas estructurados de aprendizaje en geología, mineralogía, cartografía geológica y más.'
    },
    {
      icon: GraduationCap,
      title: 'Talleres Virtuales',
      description: 'Sesiones interactivas en vivo con expertos en diversas disciplinas de las ciencias de la Tierra.'
    },
    {
      icon: Monitor,
      title: 'Seminarios Web',
      description: 'Presentaciones especializadas sobre temas actuales en investigación y práctica geológica.'
    }
  ];

  // External e-learning platform URL - This should be configured based on actual campus URL
  const handleRedirectToCampus = () => {
    window.open('[URL del Campus Virtual]', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div className="bg-gradient-to-br from-amber-50 to-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Formación Virtual
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Accede a nuestra plataforma de formación continua en ciencias geológicas
            y desarrolla tus competencias profesionales.
          </p>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 sm:p-12 border-2 border-gray-200 text-center">
            <GraduationCap className="h-16 w-16 text-amber-700 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Campus Virtual INHGEOMIN
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              El Campus Virtual de INHGEOMIN Honduras ofrece una plataforma integral de aprendizaje
              en línea diseñada para profesionales, estudiantes y educadores interesados en las
              ciencias geológicas y mineras.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Accede a cursos especializados, materiales de estudio, evaluaciones y certificaciones
              oficiales en diversos temas relacionados con la geología, minería, medio ambiente
              y gestión de recursos naturales.
            </p>
            <button
              onClick={handleRedirectToCampus}
              className="inline-flex items-center gap-3 px-8 py-4 bg-amber-700 text-white rounded-lg font-medium text-lg hover:bg-amber-800 transition-colors shadow-lg hover:shadow-xl"
            >
              Acceder al Campus Virtual
              <ExternalLink className="h-5 w-5" />
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Se abrirá en una nueva ventana
            </p>
          </div>
        </div>
      </Section>

      <Section background="gray" title="Qué Ofrece el Campus Virtual">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              title={program.title}
              description={program.description}
              icon={program.icon}
            />
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Características de la Plataforma
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-semibold text-lg text-gray-900 mb-2">Acceso 24/7</h4>
              <p className="text-gray-600 text-sm">
                Aprende a tu propio ritmo con acceso ilimitado a materiales de curso.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-semibold text-lg text-gray-900 mb-2">Certificaciones</h4>
              <p className="text-gray-600 text-sm">
                Obtén certificados oficiales al completar cursos y programas.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-semibold text-lg text-gray-900 mb-2">Contenido Actualizado</h4>
              <p className="text-gray-600 text-sm">
                Materiales revisados regularmente con los últimos avances científicos.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-semibold text-lg text-gray-900 mb-2">Soporte Técnico</h4>
              <p className="text-gray-600 text-sm">
                Asistencia continua para resolver dudas y problemas técnicos.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section background="gray">
        <div className="bg-gradient-to-r from-amber-700 to-stone-700 rounded-xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">¿Necesitas Más Información?</h3>
          <p className="text-lg mb-6 text-amber-50 max-w-2xl mx-auto">
            Si tienes preguntas sobre nuestros programas de formación, requisitos de inscripción
            o certificaciones, contáctanos.
          </p>
          <button className="px-8 py-3 bg-white text-amber-700 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Contactar Soporte
          </button>
        </div>
      </Section>
    </>
  );
}
