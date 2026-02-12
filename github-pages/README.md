# Mecanizados Calero - Sitio Web Estático

Sitio web profesional para Mecanizados Calero S.L. - 100% HTML, CSS y JavaScript vanilla.

## 📁 Estructura de Archivos

```
github-pages/
├── index.html          # Página principal completa
├── style.css           # Todos los estilos
├── script.js           # Interactividad (menú móvil, scroll suave)
└── README.md           # Este archivo
```

## 🚀 Despliegue en GitHub Pages

### Opción 1: Repositorio Nuevo

1. **Crear repositorio en GitHub**
   ```bash
   # Nombre sugerido: mecanizados-calero
   ```

2. **Subir archivos**
   ```bash
   cd /app/github-pages
   git init
   git add .
   git commit -m "Initial commit: Mecanizados Calero website"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/mecanizados-calero.git
   git push -u origin main
   ```

3. **Activar GitHub Pages**
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / (root)
   - Click "Save"
   - Tu sitio estará disponible en: `https://TU_USUARIO.github.io/mecanizados-calero/`

### Opción 2: GitHub Pages con Dominio Personalizado

1. Sigue los pasos anteriores
2. En Settings → Pages → Custom domain
3. Añade tu dominio: `www.mecanizadoscalero.com`
4. Configura DNS en tu proveedor de dominios:
   ```
   Tipo: CNAME
   Host: www
   Valor: TU_USUARIO.github.io
   ```

## 🌐 Ver en Local

Para probar localmente antes de subir:

```bash
cd /app/github-pages

# Python 3
python3 -m http.server 8080

# PHP
php -S localhost:8080

# Node.js (necesita http-server instalado)
npx http-server -p 8080
```

Luego abre: `http://localhost:8080`

## 📝 Migración a WordPress

### Método 1: Copiar y Pegar (Más Rápido)

1. **Crear página en WordPress**
   - Páginas → Añadir nueva
   - Título: "Home" o "Inicio"
   - Cambiar a editor de código (HTML)

2. **Copiar contenido de index.html**
   - Copia todo el contenido del `<body>` (excepto las etiquetas body)
   - Pega en el editor de WordPress

3. **Añadir CSS personalizado**
   - Apariencia → Personalizar → CSS adicional
   - Copia todo el contenido de `style.css`
   - Pega y guarda

4. **Añadir JavaScript**
   - Usa plugin "Simple Custom CSS and JS"
   - O añade en Apariencia → Editor de temas → functions.php:
   ```php
   function custom_scripts() {
       wp_enqueue_script('custom-js', get_template_directory_uri() . '/js/custom.js', array(), '1.0', true);
   }
   add_action('wp_enqueue_scripts', 'custom_scripts');
   ```
   - Sube `script.js` a `/wp-content/themes/TU_TEMA/js/custom.js`

5. **Configurar como página de inicio**
   - Ajustes → Lectura
   - "Página principal muestra" → Una página estática
   - Selecciona tu página

### Método 2: Tema Personalizado (Más Profesional)

1. **Crear tema hijo** o usar tema compatible como Astra/GeneratePress

2. **Usar Advanced Custom Fields (ACF)** para contenido editable

3. **Dividir en secciones**:
   - `header.php` - Navegación
   - `page-home.php` - Página principal con todas las secciones
   - `footer.php` - Footer
   - `style.css` - Estilos
   - `functions.php` - Enqueue scripts

### Plugins Recomendados para WordPress

- **Elementor** o **WPBakery**: Para editar visualmente
- **Contact Form 7**: Si quieres formularios propios (opcional, actualmente usa Google Forms)
- **Yoast SEO**: Optimización SEO
- **WP Rocket**: Cache y optimización
- **Smush**: Optimización de imágenes

## 🎨 Personalización

### Cambiar Colores

En `style.css`, busca y reemplaza:
- `#1e3a8a` - Azul principal
- `#10b981` - Verde (CTAs)
- `#374151` - Gris oscuro

### Cambiar Imágenes

1. Reemplaza las URLs de Unsplash/Pexels con tus propias imágenes
2. Sube imágenes al repositorio y usa rutas relativas:
   ```html
   <img src="images/tu-imagen.jpg" alt="Descripción">
   ```

### Modificar Textos

Busca y reemplaza directamente en `index.html`:
- Títulos de secciones
- Descripciones de servicios
- Información de contacto
- Stats (años, m², etc.)

### Actualizar Google Form

Reemplaza todas las instancias de:
```
https://docs.google.com/forms/d/e/1FAIpQLSeMVO8-gCPBXxIIwFtvDufjWvD2hJqTTjT5VKmzgU4wi0kIVQ/viewform?usp=dialog
```

Con tu nueva URL de Google Forms.

## 📱 Características

✅ **100% Responsive** - Funciona perfecto en móvil, tablet y desktop
✅ **SEO Optimizado** - Meta tags, Open Graph, estructura semántica
✅ **Carga Rápida** - Sin dependencias de frameworks pesados
✅ **Accesibilidad** - ARIA labels, navegación por teclado
✅ **Cross-Browser** - Compatible con todos los navegadores modernos
✅ **Google Forms Integration** - Sin necesidad de backend
✅ **WhatsApp Button** - Contacto directo flotante
✅ **Google Maps** - Ubicación integrada
✅ **Animaciones Suaves** - Scroll suave, fade-in, hover effects

## 🔧 Optimizaciones Adicionales (Opcional)

### Minificar archivos

```bash
# CSS
npx clean-css-cli -o style.min.css style.css

# JS
npx terser script.js -o script.min.js

# HTML
npx html-minifier --collapse-whitespace --remove-comments index.html -o index.min.html
```

### Optimizar imágenes

Usa herramientas como:
- TinyPNG (https://tinypng.com/)
- Squoosh (https://squoosh.app/)
- ImageOptim (Mac)

### Añadir Google Analytics

Añade antes del `</head>` en index.html:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📊 SEO Checklist

- [x] Meta description
- [x] Meta keywords
- [x] Open Graph tags
- [x] Semantic HTML (h1, h2, nav, section, footer)
- [x] Alt text en imágenes
- [x] URLs amigables (IDs en secciones)
- [ ] Sitemap.xml (crear cuando esté en dominio final)
- [ ] robots.txt
- [ ] Schema.org markup (JSON-LD)

## 🆘 Solución de Problemas

### Las imágenes no cargan
- Verifica que las URLs de Unsplash/Pexels sean accesibles
- Si usas imágenes locales, asegúrate de que las rutas sean correctas

### El menú móvil no funciona
- Verifica que `script.js` esté cargando correctamente
- Abre la consola del navegador (F12) para ver errores

### Los estilos no se aplican
- Asegúrate de que `style.css` esté en la misma carpeta que `index.html`
- Verifica que no haya errores de sintaxis en el CSS

### El scroll suave no funciona en Safari
- Ya está implementado con JavaScript como fallback
- Safari también soporta `scroll-behavior: smooth` en CSS

## 📞 Soporte

Para dudas sobre el sitio web:
- Email: info@mecanizadoscalero.com
- Teléfono: +34 935 74 15 50

## 📄 Licencia

© 2025 Mecanizados Calero S.L. - Todos los derechos reservados
CIF: B65020026
