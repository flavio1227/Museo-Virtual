# Museo Geológico Virtual - INHGEOMIN Honduras

Una micro-aplicación web profesional de grado institucional diseñada como base escalable para el Museo Geológico Virtual del Instituto Hondureño de Geología y Minas (INHGEOMIN). Esta plataforma proporciona un espacio digital limpio y moderno para la educación geológica, investigación y divulgación científica pública.

## 🎯 Propósito del Proyecto

El Museo Geológico Virtual de INHGEOMIN Honduras es la plataforma digital oficial para:

- Hacer accesible el conocimiento geológico mediante plataformas digitales
- Apoyar a instituciones educativas, investigadores y público general
- Proporcionar una estructura modular que puede crecer con las necesidades institucionales
- Funcionar como aplicación independiente o integrarse en aplicaciones institucionales más grandes

## 🏛️ Contexto Institucional

**INHGEOMIN (Instituto Hondureño de Geología y Minas)** es la institución nacional responsable del estudio, investigación y divulgación del conocimiento geológico y minero de Honduras. Este museo virtual representa nuestro compromiso con:

- Educación científica pública
- Divulgación del conocimiento geológico
- Preservación del patrimonio geológico nacional
- Formación continua de profesionales

## 🛠️ Stack Tecnológico

- **Framework Frontend**: React 18.3.1
- **Herramienta de Construcción**: Vite 5.4.2
- **Lenguaje**: TypeScript 5.5.3
- **Estilos**: Tailwind CSS 3.4.1
- **Iconos**: Lucide React 0.344.0
- **Linting**: ESLint 9.9.1

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── layout/              # Componentes de diseño
│   │   ├── Header.tsx       # Encabezado de navegación
│   │   └── Footer.tsx       # Pie de página institucional
│   ├── pages/               # Componentes de página principal
│   │   ├── Inicio.tsx       # Página de inicio
│   │   ├── SobreMuseo.tsx   # Sobre el museo
│   │   ├── Conocimiento.tsx # Conocimiento geológico
│   │   ├── Recursos.tsx     # Recursos educativos
│   │   └── Formacion.tsx    # Formación virtual (redirige a campus)
│   └── ui/                  # Componentes UI reutilizables
│       ├── Card.tsx         # Componente de tarjeta genérica
│       └── Section.tsx      # Componente envoltorio de sección
├── App.tsx                  # Componente principal de aplicación
├── main.tsx                 # Punto de entrada de la aplicación
└── index.css                # Estilos globales e importaciones de Tailwind
```

## 🚀 Inicio Rápido

### Prerequisitos

- Node.js (v18 o superior recomendado)
- npm o gestor de paquetes yarn

### Instalación

1. Clonar el repositorio:
```bash
git clone [url-del-repositorio]
cd museo-geologico-virtual
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar servidor de desarrollo:
```bash
npm run dev
```

4. Abrir navegador y navegar a `http://localhost:5173`

### Scripts Disponibles

- `npm run dev` - Iniciar servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Previsualizar construcción de producción
- `npm run lint` - Ejecutar ESLint
- `npm run typecheck` - Ejecutar verificación de tipos TypeScript

## 🎨 Filosofía de Diseño

### Estilo Visual
- **Limpio y Moderno**: Apariencia profesional institucional
- **Paleta Neutral**: Tonos tierra (ámbar, piedra, gris) adecuados para contenido geológico
- **Tipografía**: Jerarquía clara con fuentes del sistema para máxima legibilidad
- **Espaciado**: Espacio en blanco generoso usando sistema de espaciado de 8px
- **Accesibilidad**: Ratios de alto contraste y HTML semántico

### Diseño Responsivo
- **Móvil Primero**: Optimizado para todos los tamaños de pantalla
- **Puntos de Ruptura**: Móvil (< 640px), Tablet (640-1024px), Escritorio (> 1024px)
- **Navegación**: Menú adaptativo (desplegable en móvil, horizontal en escritorio)

## 🧩 Arquitectura de Componentes

### Componentes de Diseño
- **Header**: Navegación pegajosa con logo y menú
- **Footer**: Información de contacto y enlaces del sitio

### Componentes de Página
Cada componente de página es autocontenido y modular:
- **Inicio**: Mensaje de bienvenida y resumen de características
- **Sobre el Museo**: Información institucional y misión
- **Conocimiento Geológico**: Información geológica de Honduras
- **Recursos Educativos**: Materiales de aprendizaje
- **Formación Virtual**: Redirección a campus virtual externo

### Componentes UI
Componentes reutilizables siguiendo el principio de responsabilidad única:
- **Card**: Tarjeta de contenido flexible con icono e imagen opcional
- **Section**: Envoltorio de sección de página con opciones de título y fondo

## 📚 Formación Virtual

La sección de **Formación Virtual** está diseñada específicamente para:

- Proporcionar información sobre el campus virtual de INHGEOMIN
- Incluir un botón de redirección clara al campus de e-learning externo
- Abrir la plataforma de e-learning en una nueva pestaña del navegador
- NO incorporar ni implementar ninguna funcionalidad LMS en esta aplicación

**Importante**: El enlace al campus virtual debe configurarse con la URL real antes de producción.

## 📈 Puntos de Extensión Futura

### Gestión de Contenido
- Conectar a un CMS (Strapi, Contentful, Sanity)
- Agregar base de datos Supabase para contenido dinámico
- Implementar panel de administración para actualizaciones de contenido

### Características
- **Visor de Modelos 3D**: Examen interactivo de especímenes
- **Tours Virtuales**: Exploración de exhibiciones 360°
- **Funcionalidad de Búsqueda**: Búsqueda de texto completo en todo el contenido
- **Cuentas de Usuario**: Guardar favoritos, rastrear progreso de aprendizaje
- **Soporte Multilingüe**: i18n para accesibilidad internacional

### Mejoras Técnicas
- Agregar React Router para navegación basada en URL
- Implementar gestión de estado (Zustand, Redux)
- Agregar capa de integración de API
- Capacidades de Progressive Web App (PWA)
- Server-Side Rendering (SSR) con Next.js

### Integración de Datos
- Conectar a bases de datos geológicas
- Integraciones de API externas (institutos geológicos, universidades)
- Feeds de datos en tiempo real (sismos, actividad volcánica)

## 🔌 Integración como Micro-App

Esta aplicación está diseñada para funcionar como sitio independiente o como micro-frontend dentro de una aplicación shell institucional más grande:

### Despliegue Independiente
- Desplegar en cualquier hosting estático (Vercel, Netlify, GitHub Pages)
- Configurar enrutamiento y URL base según sea necesario

### Integración Micro-Frontend
- Exportar como módulo para importación de aplicación shell
- Usar federación de módulos (Webpack 5)
- Implementar single-spa o framework similar
- Configurar dependencias compartidas para reducir tamaño de bundle

## 🤝 Contribución

Este proyecto está diseñado para uso institucional y futuras contribuciones de la comunidad. Para extender o personalizar:

1. Seguir la estructura de componentes existente
2. Mantener seguridad de tipos TypeScript
3. Usar Tailwind CSS para consistencia de estilos
4. Agregar comentarios para lógica compleja
5. Probar comportamiento responsivo en todos los dispositivos

## 📝 Guía de Personalización

### Colores
Actualizar configuración de Tailwind en `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {...},    // Reemplazar tonos ámbar
      secondary: {...},  // Reemplazar tonos piedra
    }
  }
}
```

### Contenido
1. Actualizar texto placeholder en componentes de página (`src/components/pages/`)
2. Reemplazar placeholders de iconos con imágenes reales
3. Modificar elementos de navegación en `Header.tsx`
4. Actualizar contenido de pie de página en `Footer.tsx`
5. Configurar URL del campus virtual en `Formacion.tsx`

### Marca
1. Reemplazar icono de logo en `Header.tsx`
2. Actualizar nombre y tagline de institución
3. Modificar información de contacto del pie de página
4. Actualizar meta tags en `index.html`

## 🌐 Idioma

Todo el contenido orientado al usuario está escrito en español, reflejando el contexto de Honduras y INHGEOMIN. Los comentarios de código y lógica interna están en inglés siguiendo convenciones estándar de desarrollo.

## 📄 Licencia

Este proyecto está diseñado para uso institucional de INHGEOMIN Honduras. Agregar información de licencia institucional aquí.

## 📧 Contacto

Para preguntas u oportunidades de colaboración, favor contactar a través de los canales institucionales listados en el pie de página de la aplicación.

---

**Construido con tecnologías web modernas para excelencia educativa**

*Proyecto desarrollado para INHGEOMIN Honduras - Instituto Hondureño de Geología y Minas*
