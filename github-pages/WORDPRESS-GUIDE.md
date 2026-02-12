# Guía Rápida: Migración a WordPress

## 🎯 Resumen Rápido

Este sitio está 100% listo para:
1. ✅ Subir a GitHub Pages (deploy inmediato)
2. ✅ Migrar a WordPress (copiar/pegar o tema personalizado)

---

## 📋 Migración WordPress - Paso a Paso Simple

### OPCIÓN RÁPIDA (15 minutos)

1. **Instala WordPress** en tu hosting

2. **Instala estos plugins:**
   - Elementor (gratis) - Para editar visualmente
   - Simple Custom CSS and JS (gratis)
   - Contact Form 7 (opcional, si quieres cambiar Google Forms)

3. **Crea una nueva página:**
   - Páginas → Añadir nueva
   - Título: "Inicio"
   - Click en los 3 puntitos (⋮) → Editor de código

4. **Copia el HTML:**
   ```bash
   # Abre index.html
   # Copia TODO el contenido del <body> (línea ~30 hasta antes de </body>)
   # NO copies las etiquetas <body> y </body>
   # Pega en WordPress
   ```

5. **Añade los estilos:**
   - Apariencia → Personalizar → CSS adicional
   - Copia TODO el contenido de `style.css`
   - Pega y haz clic en "Publicar"

6. **Añade JavaScript:**
   - Plugins → Simple Custom CSS and JS → Add Custom JS
   - Copia TODO el contenido de `script.js`
   - Guarda

7. **Establece como página de inicio:**
   - Ajustes → Lectura
   - Marca "Una página estática"
   - Página de inicio: Selecciona "Inicio"
   - Guardar cambios

8. **¡Listo!** Tu sitio ya está en WordPress

---

## 🎨 Personalización en WordPress

### Cambiar Textos
- Edita la página → Modo código
- Busca el texto que quieres cambiar
- Modifícalo directamente

### Cambiar Imágenes
1. Sube imágenes a Biblioteca de medios
2. Copia la URL de la imagen
3. En la página, busca las URLs actuales (https://images.unsplash.com/...)
4. Reemplázalas por tus URLs

### Cambiar Colores
- Apariencia → Personalizar → CSS adicional
- Busca los códigos de color:
  - `#1e3a8a` - Azul principal
  - `#10b981` - Verde (botones)
  - `#374151` - Gris oscuro
- Reemplaza por los colores que quieras

---

## 🔧 Temas WordPress Recomendados

Si quieres usar un tema en lugar de página personalizada:

1. **Astra** (gratis) - El más compatible
   - Instala Astra
   - Importa como "Starter Template"
   - Reemplaza contenido

2. **GeneratePress** (gratis) - Muy rápido
   - Similar a Astra
   - Buena integración con Elementor

3. **Neve** (gratis) - Para negocios
   - Específico para empresas B2B

---

## 📱 Probar Antes de Publicar

**WordPress Preview:**
- Guarda como "Borrador"
- Click en "Vista previa"
- Verifica en móvil y desktop

**Responsive Test:**
- F12 en navegador
- Toggle device toolbar
- Prueba diferentes dispositivos

---

## ⚡ Optimización WordPress

### Plugins Esenciales:
1. **WP Rocket** - Cache (mejora velocidad 3x)
2. **Smush** - Optimiza imágenes automáticamente
3. **Yoast SEO** - SEO completo
4. **UpdraftPlus** - Backups automáticos

### Configuración Óptima:
```
Settings → General:
- Zona horaria: Madrid
- Formato fecha: dd/mm/yyyy

Settings → Permalinks:
- Nombre de entrada (%postname%)

Settings → Reading:
- Página de inicio: Tu página "Inicio"
- Desmarcar "Disuade motores de búsqueda"
```

---

## 🚨 Problemas Comunes y Soluciones

### El CSS no se aplica
**Solución:** 
- Fuerza recarga: Ctrl+F5 (Windows) o Cmd+Shift+R (Mac)
- Limpia caché del navegador
- Si usas WP Rocket: Settings → Clear cache

### El menú móvil no funciona
**Solución:**
- Verifica que el JS esté activo
- Desactiva otros plugins que usen JavaScript
- Prueba con tema Twenty Twenty-Four por defecto

### Las imágenes se ven pixeladas
**Solución:**
- Sube imágenes de mayor resolución (mínimo 1920px ancho)
- Usa Smush para optimizar sin perder calidad
- Settings → Media → Tamaño grande: 1920px

### El sitio está lento
**Solución:**
1. Instala WP Rocket
2. Activa:
   - Cache
   - Minify CSS/JS
   - Lazy load imágenes
3. Optimiza imágenes con Smush
4. Usa CDN de Cloudflare (gratis)

---

## 📞 Ayuda Adicional

### Recursos Útiles:
- WordPress.org: https://wordpress.org/support/
- Elementor Docs: https://elementor.com/help/
- CSS Validator: https://jigsaw.w3.org/css-validator/

### Video Tutoriales Recomendados:
- "Cómo crear página personalizada en WordPress" (YouTube)
- "Elementor tutorial completo español" (YouTube)
- "WordPress SEO con Yoast" (YouTube)

---

## ✅ Checklist Final

Antes de hacer el sitio público:

- [ ] Todas las secciones tienen contenido correcto
- [ ] Todas las imágenes cargan correctamente
- [ ] Todos los enlaces funcionan
- [ ] Formulario de contacto funciona (prueba enviando uno)
- [ ] Google Maps muestra ubicación correcta
- [ ] WhatsApp button redirige al número correcto
- [ ] Sitio responsive en móvil/tablet/desktop
- [ ] SEO configurado (título, descripción, keywords)
- [ ] Google Analytics añadido (opcional)
- [ ] Backup creado con UpdraftPlus

---

## 🎉 ¡Todo Listo!

Tu sitio web está preparado para:
1. ✅ GitHub Pages - Deploy en 5 minutos
2. ✅ WordPress - Migración en 15-30 minutos
3. ✅ Personalización fácil - Sin conocimientos técnicos avanzados
4. ✅ SEO optimizado - Listo para posicionar en Google
5. ✅ Mobile-first - Perfecto en todos los dispositivos

**¿Dudas?** Revisa README.md para instrucciones más detalladas.
