#!/bin/bash

# Script para subir Mecanizados Calero a GitHub Pages
# Ejecuta este script después de crear el repositorio en GitHub

echo "╔══════════════════════════════════════════════════════════════╗"
echo "║     DEPLOY AUTOMÁTICO A GITHUB PAGES                         ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

# Variables - EDITA ESTAS LÍNEAS CON TUS DATOS
GITHUB_USERNAME="TU_USUARIO"  # Cambia esto por tu usuario de GitHub
REPO_NAME="mecanizados-calero"
GITHUB_EMAIL="tu-email@gmail.com"  # Cambia esto por tu email
GITHUB_NAME="Tu Nombre"  # Cambia esto por tu nombre

echo "📋 Configuración:"
echo "   Usuario: $GITHUB_USERNAME"
echo "   Repositorio: $REPO_NAME"
echo "   Email: $GITHUB_EMAIL"
echo ""

# Verificar que estamos en el directorio correcto
cd /app/github-pages || exit

echo "✓ Directorio: $(pwd)"
echo "✓ Archivos encontrados:"
ls -lh
echo ""

# Configurar Git
echo "⚙️  Configurando Git..."
git config --global user.email "$GITHUB_EMAIL"
git config --global user.name "$GITHUB_NAME"
git config --global init.defaultBranch main

# Inicializar repositorio
echo "📦 Inicializando repositorio..."
git init

# Añadir archivos
echo "📄 Añadiendo archivos..."
git add .

# Commit
echo "💾 Creando commit..."
git commit -m "Initial commit: Mecanizados Calero website - HTML estático para GitHub Pages"

# Añadir remote
echo "🔗 Conectando con GitHub..."
git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"

# Push
echo "🚀 Subiendo archivos a GitHub..."
echo ""
echo "⚠️  IMPORTANTE: Cuando se te pida, introduce tu Personal Access Token de GitHub"
echo "    (NO tu contraseña normal)"
echo ""
echo "    Si no tienes un token, créalo en:"
echo "    https://github.com/settings/tokens"
echo "    Permisos necesarios: repo (todos)"
echo ""
read -p "Presiona ENTER cuando estés listo para continuar..."

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "✅ ¡ARCHIVOS SUBIDOS EXITOSAMENTE!"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "🌐 Ahora activa GitHub Pages:"
    echo ""
    echo "   1. Ve a: https://github.com/$GITHUB_USERNAME/$REPO_NAME/settings/pages"
    echo "   2. En 'Source', selecciona: Deploy from a branch"
    echo "   3. En 'Branch', selecciona: main / (root)"
    echo "   4. Haz clic en 'Save'"
    echo ""
    echo "⏱️  GitHub tardará 1-2 minutos en construir el sitio"
    echo ""
    echo "🎉 Tu sitio estará disponible en:"
    echo "   https://$GITHUB_USERNAME.github.io/$REPO_NAME/"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
else
    echo ""
    echo "❌ Error al subir archivos"
    echo ""
    echo "Posibles causas:"
    echo "  1. El repositorio no existe en GitHub"
    echo "  2. Credenciales incorrectas"
    echo "  3. No tienes permisos en el repositorio"
    echo ""
    echo "Verifica y vuelve a intentar"
fi
