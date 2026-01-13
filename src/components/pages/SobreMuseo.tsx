import { Target, Heart, Award, Mail } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';

export default function SobreMuseo() {
  const values = [
    {
      icon: Target,
      title: 'Nuestra Misión',
      description: 'Hacer accesible el conocimiento geológico mediante plataformas digitales innovadoras y recursos educativos integrales.'
    },
    {
      icon: Heart,
      title: 'Nuestros Valores',
      description: 'Comprometidos con la precisión científica, excelencia educativa, inclusividad y fomentar la curiosidad sobre las ciencias de la Tierra.'
    },
    {
      icon: Award,
      title: 'Nuestra Visión',
      description: 'Convertirnos en la institución digital líder para la educación geológica, investigación y divulgación pública en Honduras y la región.'
    }
  ];

  return (
    <>
      <div className="bg-gradient-to-br from-amber-50 to-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Sobre el Museo
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Una institución digital dedicada al avance de las ciencias geológicas mediante la educación,
            investigación y divulgación pública.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              title={value.title}
              description={value.description}
              icon={value.icon}
            />
          ))}
        </div>
      </Section>

      <Section background="gray" title="Nuestra Historia">
        <div className="prose prose-lg max-w-4xl mx-auto text-gray-600">
          <p className="leading-relaxed mb-4">
            El Museo Geológico Virtual de INHGEOMIN Honduras fue establecido para atender la creciente
            necesidad de educación geológica accesible en la era digital. Como institución completamente
            digital, aprovechamos la tecnología moderna para superar las barreras tradicionales de los
            espacios físicos, haciendo que recursos geológicos integrales estén disponibles para cualquier
            persona con conexión a internet.
          </p>
          <p className="leading-relaxed mb-4">
            Nuestra plataforma sirve a investigadores, educadores, estudiantes y al público en general,
            proporcionando herramientas y recursos que apoyan tanto la educación formal como el aprendizaje
            independiente. A través de contenido cuidadosamente curado, recursos interactivos y materiales
            educativos integrales, buscamos inspirar curiosidad sobre la historia geológica y los procesos
            de nuestro planeta.
          </p>
          <p className="leading-relaxed">
            A medida que continuamos creciendo y desarrollándonos, permanecemos comprometidos con nuestros
            principios fundacionales de accesibilidad, rigor científico y excelencia educativa. Te invitamos
            a explorar nuestros recursos, participar en nuestra plataforma y unirte a nosotros para descubrir
            la fascinante historia de nuestro planeta.
          </p>
        </div>
      </Section>

      <Section title="INHGEOMIN Honduras">
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          El Instituto Hondureño de Geología y Minas (INHGEOMIN) es la institución nacional responsable
          del estudio, investigación y divulgación del conocimiento geológico y minero de Honduras.
        </p>
        <div className="bg-white rounded-xl p-8 sm:p-12 border-2 border-gray-200 text-center max-w-2xl mx-auto">
          <p className="text-gray-600 mb-6">
            Como parte de nuestro compromiso con la educación y divulgación científica, el Museo Geológico
            Virtual representa nuestra visión de democratizar el acceso al conocimiento geológico mediante
            tecnologías digitales.
          </p>
        </div>
      </Section>

      <Section background="gray">
        <div className="bg-gradient-to-r from-amber-700 to-stone-700 rounded-xl p-8 sm:p-12 text-white text-center">
          <Mail className="h-12 w-12 mx-auto mb-4 text-amber-200" />
          <h3 className="text-2xl font-bold mb-4">Contáctanos</h3>
          <p className="text-lg mb-6 text-amber-50 max-w-2xl mx-auto">
            ¿Tienes preguntas o sugerencias? Damos la bienvenida a comentarios de nuestra comunidad
            y siempre buscamos formas de mejorar nuestras ofertas.
          </p>
          <button className="px-8 py-3 bg-white text-amber-700 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Contactar
          </button>
        </div>
      </Section>
    </>
  );
}
