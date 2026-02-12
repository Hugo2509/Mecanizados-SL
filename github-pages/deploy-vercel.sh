#!/bin/bash

# Script para preparar deploy en Vercel

echo "╔══════════════════════════════════════════════════════════════╗"
echo "║     DEPLOY A VERCEL                                          ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

# Verificar si vercel está instalado
if ! command -v vercel &> /dev/null; then
    echo "📦 Instalando Vercel CLI..."
    npm install -g vercel
    echo ""
fi

cd /app/github-pages || exit

echo "🚀 Desplegando a Vercel..."
echo ""
echo "ℹ️  Instrucciones:"
echo "   1. Te pedirá login la primera vez"
echo "   2. Set up and deploy? → Y"
echo "   3. Which scope? → [Elige tu cuenta]"
echo "   4. Link to existing project? → N"
echo "   5. Project name? → mecanizados-calero"
echo "   6. In which directory? → ./"
echo "   7. Want to override settings? → N"
echo ""
read -p "Presiona ENTER para continuar..."

vercel --prod

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ ¡Sitio desplegado!"
echo ""
echo "Para actualizar en el futuro:"
echo "   cd /app/github-pages"
echo "   vercel --prod"
echo ""
echo "Para ver deployments:"
echo "   vercel ls"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
