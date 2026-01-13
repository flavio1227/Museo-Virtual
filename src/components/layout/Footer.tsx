import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Sobre el Museo</h3>
            <p className="text-sm leading-relaxed">
              El Museo Geológico Virtual de INHGEOMIN Honduras es una plataforma digital
              dedicada a la divulgación científica y educación en ciencias de la Tierra.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Información de Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  [Dirección institucional]<br />
                  Tegucigalpa, Honduras
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span className="text-sm">[Teléfono de contacto]</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span className="text-sm">[Correo electrónico]</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Visítanos</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Apoyo Institucional</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Accesibilidad</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Términos de Uso</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} INHGEOMIN Honduras - Museo Geológico Virtual. Todos los derechos reservados.</p>
          <p className="mt-2 text-gray-500">Plataforma educativa y científica</p>
        </div>
      </div>
    </footer>
  );
}
