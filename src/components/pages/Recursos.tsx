import { GraduationCap, FileText, Video, Users } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';

export default function Recursos() {
  const resources = [
    {
      icon: FileText,
      title: 'Planes de Lección y Currículos',
      description: 'Materiales de enseñanza integrales alineados con estándares educativos para educación básica, media y superior.',
      audience: 'Educadores'
    },
    {
      icon: Video,
      title: 'Videos Educativos',
      description: 'Contenido en video explicando conceptos geológicos, procesos y metodologías de investigación de campo.',
      audience: 'Todos los Niveles'
    },
    {
      icon: GraduationCap,
      title: 'Recursos para Estudiantes',
      description: 'Guías de estudio, hojas de trabajo y actividades interactivas para aprendizaje independiente y uso en el aula.',
      audience: 'Estudiantes'
    },
    {
      icon: Users,
      title: 'Desarrollo Profesional',
      description: 'Talleres y materiales de capacitación para educadores para mejorar la enseñanza de geología.',
      audience: 'Docentes'
    }
  ];

  const topics = [
    'Tectónica de Placas',
    'Mineralogía',
    'Paleontología',
    'Vulcanología',
    'Sedimentología',
    'Petrología',
    'Geomorfología',
    'Estratigrafía'
  ];

  return (
    <>
      <div className="bg-gradient-to-br from-stone-100 to-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Recursos Educativos
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Apoyando la educación en geología con recursos integrales para estudiantes, educadores
            y aprendices de por vida.
          </p>
        </div>
      </div>

      <Section
        title="Materiales de Aprendizaje"
        subtitle="Recursos educativos curados diseñados para apoyar la enseñanza efectiva de geología"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <Card
              key={index}
              title={resource.title}
              description={resource.description}
              icon={resource.icon}
            >
              <div className="mt-4 pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-500">Audiencia: {resource.audience}</span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="gray" title="Temas Cubiertos">
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Nuestros materiales educativos abarcan el espectro completo de las ciencias geológicas,
          proporcionando cobertura profunda de temas fundamentales y avanzados.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm text-center font-medium text-gray-700 hover:shadow-md hover:text-amber-700 transition-all cursor-pointer"
            >
              {topic}
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="bg-amber-700 rounded-xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Para Educadores</h3>
          <p className="text-lg mb-6 text-amber-50 max-w-2xl mx-auto">
            Accede a nuestro portal integral para educadores con recursos descargables, herramientas
            interactivas y oportunidades de desarrollo profesional.
          </p>
          <button className="px-8 py-3 bg-white text-amber-700 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Portal para Educadores
          </button>
        </div>
      </Section>

      <Section background="gray">
        <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            Recursos en Desarrollo
          </h3>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Estamos trabajando continuamente en la creación de nuevos recursos educativos adaptados
            al contexto hondureño y latinoamericano. Revisa regularmente para actualizaciones.
          </p>
        </div>
      </Section>
    </>
  );
}
