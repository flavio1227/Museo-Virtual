# Contribución al Museo Geológico Virtual - INHGEOMIN Honduras

Gracias por tu interés en contribuir al proyecto del Museo Geológico Virtual de INHGEOMIN Honduras. Este documento proporciona directrices e instrucciones para contribuir a esta plataforma institucional.

## 🎯 Objetivos del Proyecto

Este proyecto busca:
- Proporcionar una base profesional y escalable para la educación geológica
- Mantener código limpio, mantenible y bien documentado
- Seguir estándares de diseño institucional y directrices de accesibilidad
- Apoyar expansión futura con características y contenido adicional

## 🏗️ Configuración de Desarrollo

1. Fork y clonar el repositorio
2. Instalar dependencias: `npm install`
3. Iniciar servidor de desarrollo: `npm run dev`
4. Hacer tus cambios
5. Probar tus cambios: `npm run build && npm run typecheck`
6. Enviar un pull request

## 📝 Estándares de Código

### TypeScript
- Usar TypeScript para todos los componentes nuevos
- Definir interfaces apropiadas para todas las props
- Evitar usar el tipo `any`
- Habilitar verificación de tipos estricta

### Componentes React
- Usar componentes funcionales con hooks
- Mantener componentes enfocados (responsabilidad única)
- Extraer lógica reutilizable en hooks personalizados
- Usar nombres significativos para componentes y props

### Estilos
- Usar clases de utilidad Tailwind CSS
- Seguir el esquema de color existente (tonos tierra)
- Mantener principios de diseño responsivo
- Probar en viewports móvil, tablet y escritorio

### Organización de Archivos
```
src/
├── components/
│   ├── layout/      # Componentes a nivel de diseño
│   ├── pages/       # Componentes de página
│   └── ui/          # Componentes UI reutilizables
├── hooks/           # Hooks personalizados de React (si es necesario)
├── utils/           # Funciones de utilidad
└── types/           # Definiciones de tipos TypeScript
```

## 🎨 Directrices de Diseño

### Paleta de Colores
- Primario: Tonos ámbar (amber-700, amber-800)
- Secundario: Tonos piedra (stone-100, stone-700)
- Neutral: Escala de grises (gray-50 a gray-900)
- Evitar: Tonos púrpura, índigo o violeta

### Tipografía
- Encabezados: Negrita, jerarquía clara
- Texto del cuerpo: 16px base, 150% altura de línea
- Usar stack de fuentes del sistema para rendimiento

### Espaciado
- Usar unidad base de 8px (escala de espaciado Tailwind)
- Padding y márgenes consistentes
- Espacio en blanco adecuado para legibilidad

## 🧪 Pruebas

Antes de enviar:
1. Ejecutar verificación de tipos: `npm run typecheck`
2. Ejecutar linter: `npm run lint`
3. Construir proyecto: `npm run build`
4. Probar diseño responsivo en múltiples tamaños de pantalla
5. Verificar accesibilidad con lector de pantalla

## 📚 Agregar Nuevas Características

### Agregar una Nueva Página
1. Crear componente en `src/components/pages/`
2. Agregar elemento de navegación en `Header.tsx`
3. Agregar caso de ruta en `App.tsx`
4. Seguir estructura y patrones de página existentes

### Agregar un Nuevo Componente UI
1. Crear componente en `src/components/ui/`
2. Definir interfaz TypeScript para props
3. Hacer componente reutilizable y genérico
4. Agregar comentarios JSDoc para lógica compleja

### Agregar Contenido
1. Usar texto placeholder entre corchetes: `[Descripción del Contenido]`
2. Mantener tono institucional y educativo
3. Asegurar precisión científica para contenido geológico
4. Incluir atribución apropiada para fuentes externas

## 🔧 Puntos de Extensión

### Integración de Base de Datos
Al agregar funcionalidad de base de datos:
- Usar Supabase para servicios backend
- Crear migraciones apropiadas
- Implementar Row Level Security (RLS)
- Documentar cambios de esquema

### Integración de API
- Crear cliente API en `src/api/`
- Manejar estados de carga y error
- Implementar mensajes de error apropiados
- Agregar tipos TypeScript para request/response

### Gestión de Estado
- Comenzar con React Context para estado simple
- Considerar Zustand para necesidades de estado complejas
- Documentar estructura y flujo de estado

## 🐛 Reportes de Errores

Al reportar errores:
1. Describir comportamiento esperado vs real
2. Incluir pasos para reproducir
3. Notar información de navegador y dispositivo
4. Adjuntar capturas de pantalla si aplica
5. Revisar issues existentes primero

## 💡 Solicitudes de Características

Al sugerir características:
1. Explicar el valor educativo
2. Considerar necesidades institucionales
3. Describir beneficio para el usuario
4. Sugerir enfoque de implementación
5. Revisar roadmap del proyecto primero

## 📖 Documentación

- Actualizar README.md para cambios mayores
- Agregar comentarios JSDoc para funciones complejas
- Documentar nuevos patrones o convenciones
- Incluir ejemplos para nuevos componentes

## ✅ Proceso de Pull Request

1. **Branch**: Crear branch de característica desde `main`
2. **Commits**: Escribir mensajes de commit claros y descriptivos
3. **Código**: Seguir patrones y convenciones existentes
4. **Pruebas**: Asegurar que build y type check pasen
5. **Documentación**: Actualizar documentación relevante
6. **Revisión**: Atender retroalimentación de revisores prontamente

### Formato de Mensaje de Commit
```
tipo: descripción breve

Explicación más larga si es necesaria

- Puntos con cambios específicos
- Relacionado con #número-de-issue
```

Tipos: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

## 🤝 Revisión de Código

Las revisiones se enfocan en:
- Calidad y mantenibilidad del código
- Adherencia a estándares del proyecto
- Seguridad de tipos TypeScript
- Implementación de diseño responsivo
- Consideraciones de accesibilidad
- Implicaciones de rendimiento

## 🌐 Idioma

**Importante**: Todo el contenido orientado al usuario DEBE estar en español. Los comentarios de código y documentación técnica pueden estar en inglés o español según contexto.

## 📄 Licencia

Al contribuir, aceptas que tus contribuciones serán licenciadas bajo la misma licencia que el proyecto.

## 🙋 ¿Preguntas?

- Revisar el README.md primero
- Revisar issues y discusiones existentes
- Abrir un nuevo issue para aclaración

---

Gracias por ayudar a hacer la educación geológica más accesible!

*INHGEOMIN Honduras - Instituto Hondureño de Geología y Minas*
