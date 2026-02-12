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

### Frontend (React)
- **Framework**: React 19 con React Router
- **UI Library**: Shadcn/UI + Tailwind CSS
- **Componentes**: 
  - /pages/Home.jsx (página principal completa)
  - Componentes shadcn: Button, Card
  - Iconos: lucide-react

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

### Fecha: 12 Feb 2025
1. **Página Principal Completa** con:
   - Hero section con imagen CNC profesional
   - Barra de estadísticas (17+ años, 1.000m², etc.)
   - Sección de servicios (6 servicios con imágenes)
   - Sección "La Empresa" con información corporativa
   - Sección de maquinaria (6 tipos de máquinas)
   - Sección de materiales y sectores
   - Formulario de presupuesto (mock)
   - Formulario de contacto (mock)
   - Google Maps integrado
   - Footer completo con SEO
   - Botón flotante de WhatsApp
   - Navegación responsive con menú móvil

2. **Imágenes Profesionales**:
   - 7 imágenes de alta calidad de maquinaria CNC
   - Fuentes: Unsplash y Pexels

3. **SEO Básico**:
   - Meta tags preparados
   - Estructura semántica HTML
   - Keywords: "mecanizados CNC Barcelona", "tornos CNC", etc.

4. **Diseño Industrial**:
   - Paleta de colores: Azul oscuro (#1e3a8a), gris, blanco
   - Acentos verdes para CTAs
   - Tipografía system fonts
   - Hover effects y transiciones

## Estado Actual: GOOGLE FORMS INTEGRATION
✅ **Importante**: Todos los botones de contacto/presupuesto redirigen al Google Form externo:
- URL: https://docs.google.com/forms/d/e/1FAIpQLSeMVO8-gCPBXxIIwFtvDufjWvD2hJqTTjT5VKmzgU4wi0kIVQ/viewform?usp=dialog
- Botones integrados: Hero CTA, Menú header, Sección "La Empresa", Sección CTA/Presupuesto, Sección Contacto
- NO hay formularios internos (simplificado según requerimiento del cliente)
- Sección de contacto solo muestra información (teléfono, email, mapa)

## Backlog Priorizado

### P0 - Crítico (Siguiente fase)
1. **Backend API**:
   - Endpoint POST /api/contact
   - Endpoint POST /api/quote
   - Envío de emails con notificaciones
   - Validación de datos

2. **Integración Frontend-Backend**:
   - Conectar formularios con API real
   - Manejo de errores y loading states
   - Mensajes de confirmación con toast

3. **Base de Datos**:
   - Schema para contacts
   - Schema para quotes
   - Timestamps y validaciones

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
2. ⏳ Implementar backend (API + DB)
3. ⏳ Integrar formularios con backend
4. ⏳ Testing E2E completo
5. ⏳ Optimizar SEO
6. ⏳ Preparar para producción

## Notas Técnicas
- Hot reload activo en frontend
- Puerto frontend: 3000
- Puerto backend: 8001
- Supervisor gestiona servicios
- REACT_APP_BACKEND_URL configurado
