# PRD - Mecanizados Calero Website

## Información del Proyecto
**Cliente**: Mecanizados Calero S.L.  
**Tipo**: Sitio Web Corporativo B2B Industrial  
**Fecha de Inicio**: 12 Febrero 2025  
**Stack Tecnológico**: React + FastAPI + MongoDB

## Problema Original
Crear un sitio web profesional para una empresa de mecanizados CNC en Barcelona con:
- Solo en español (mercado español)
- Diseño industrial profesional (azul oscuro/gris/blanco)
- Generación de leads B2B
- SEO optimizado
- Formularios de contacto y presupuesto
- Google Maps + WhatsApp

## Arquitectura Implementada

### Frontend (React) - PRODUCCIÓN
- **Framework**: React 19 con React Router
- **UI Library**: Shadcn/UI + Tailwind CSS
- **Componentes**: 
  - /pages/Home.jsx (página principal completa)
  - Componentes shadcn: Button, Card
  - Iconos: lucide-react
- **Estado**: Desplegado y funcional

### Frontend (HTML Estático) - GITHUB PAGES / WORDPRESS ✨ NUEVO
- **Ubicación**: /app/github-pages/
- **Archivos**:
  - index.html (619 líneas - página completa)
  - style.css (920 líneas - todos los estilos)
  - script.js (104 líneas - interactividad)
  - README.md (250 líneas - documentación completa)
  - WORDPRESS-GUIDE.md (guía de migración paso a paso)
- **Características**:
  - 100% HTML/CSS/JS vanilla (sin dependencias)
  - Listo para GitHub Pages (deploy inmediato)
  - Fácil migración a WordPress (copiar/pegar)
  - Responsive, SEO optimizado, animaciones
- **Estado**: ✅ Completo y listo para deploy

### Backend (FastAPI)
- **Estado**: Por implementar
- **Endpoints planificados**:
  - POST /api/contact - Formulario de contacto
  - POST /api/quote - Solicitud de presupuesto
  - GET /api/inquiries - Listar consultas (admin)

### Base de Datos (MongoDB)
- **Colecciones planificadas**:
  - `contacts` - Mensajes de contacto
  - `quotes` - Solicitudes de presupuesto

## Funcionalidades Implementadas ✅

### Fecha: 12 Feb 2025 - Versión React (Inicial)
1. **Página Principal Completa** con:
   - Hero section con imagen CNC profesional
   - Barra de estadísticas (17+ años, 1.000m², etc.)
   - Sección de servicios (6 servicios con imágenes)
   - Sección "La Empresa" con información corporativa
   - Sección de maquinaria (6 tipos de máquinas)
   - Sección de materiales y sectores
   - Sección CTA presupuesto
   - Sección contacto simplificada
   - Google Maps integrado
   - Footer completo con SEO
   - Botón flotante de WhatsApp
   - Navegación responsive con menú móvil
   - **Google Forms integrado**: Todos los CTAs redirigen a formulario externo

2. **Imágenes Profesionales**:
   - 7 imágenes de alta calidad de maquinaria CNC
   - Fuentes: Unsplash y Pexels

### Fecha: 12 Feb 2025 - Versión HTML Estática ✨ NUEVO
3. **Sitio Web Estático Completo** (/app/github-pages/):
   - Conversión completa a HTML/CSS/JS vanilla
   - Mismas funcionalidades que versión React
   - **Sin dependencias** de frameworks
   - **3 archivos principales**: index.html, style.css, script.js
   - **Documentación completa**:
     - README.md con instrucciones GitHub Pages
     - WORDPRESS-GUIDE.md con migración paso a paso
     - .gitignore configurado
   
4. **Características Técnicas**:
   - Responsive design completo
   - Animaciones fade-in con Intersection Observer
   - Menú móvil hamburguesa funcional
   - Scroll suave a secciones
   - Header con efecto scroll
   - WhatsApp button flotante
   - Google Maps responsive
   - SEO: meta tags, Open Graph, estructura semántica

## Estado Actual: GOOGLE FORMS INTEGRATION
✅ **Importante**: Todos los botones de contacto/presupuesto redirigen al Google Form externo:
- URL: https://docs.google.com/forms/d/e/1FAIpQLSeMVO8-gCPBXxIIwFtvDufjWvD2hJqTTjT5VKmzgU4wi0kIVQ/viewform?usp=dialog
- Botones integrados: Hero CTA, Menú header, Sección "La Empresa", Sección CTA/Presupuesto, Sección Contacto
- NO hay formularios internos (simplificado según requerimiento del cliente)
- Sección de contacto solo muestra información (teléfono, email, mapa)

## Backlog Priorizado

### P0 - Crítico (Siguiente fase)
1. ~~Backend API~~ - NO NECESARIO (se usa Google Forms)
2. ~~Integración Frontend-Backend~~ - NO NECESARIO
3. ~~Base de Datos~~ - NO NECESARIO

### P1 - Alta Prioridad
1. SEO avanzado:
   - Sitemap.xml
   - robots.txt
   - Open Graph tags completos
   - Schema.org JSON-LD

2. Analytics:
   - Google Analytics 4
   - Google Tag Manager
   - Pixel de conversión

3. Panel de administración básico:
   - Ver consultas recibidas
   - Marcar como leído/atendido

### P2 - Media Prioridad
1. Optimizaciones de performance:
   - Lazy loading de imágenes
   - Compresión de imágenes
   - Code splitting

2. Mejoras UX:
   - Validación en tiempo real de formularios
   - Progress indicators
   - Animaciones de entrada

3. Contenido adicional:
   - Galería de proyectos realizados
   - Testimonios de clientes
   - Certificaciones ISO (si aplica)

## Tareas Inmediatas (Next Steps)
1. ✅ Validar diseño frontend con cliente
2. ✅ Integrar Google Forms para contactos
3. ⏳ Optimizar SEO (sitemap.xml, robots.txt, meta tags completos)
4. ⏳ Añadir Google Analytics
5. ⏳ Optimizar imágenes para performance
6. ⏳ Testing en diferentes navegadores/dispositivos

## Notas Técnicas
- Hot reload activo en frontend
- Puerto frontend: 3000
- Puerto backend: 8001
- Supervisor gestiona servicios
- REACT_APP_BACKEND_URL configurado
