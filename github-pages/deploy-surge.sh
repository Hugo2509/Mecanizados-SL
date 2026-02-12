#!/bin/bash

# Script para deploy en Surge.sh (la opción más rápida)

echo "╔══════════════════════════════════════════════════════════════╗"
echo "║     DEPLOY A SURGE.SH - ULTRA RÁPIDO                         ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

# Verificar si surge está instalado
if ! command -v surge &> /dev/null; then
    echo "📦 Instalando Surge..."
    npm install -g surge
    echo ""
fi

cd /app/github-pages || exit

echo "🚀 Desplegando a Surge.sh..."
echo ""
echo "ℹ️  Si es tu primera vez:"
echo "   - Te pedirá email y password (crea una cuenta)"
echo "   - Te sugerirá un dominio random"
echo "   - Puedes cambiarlo por: mecanizados-calero.surge.sh"
echo ""

surge

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ ¡Sitio desplegado!"
echo ""
echo "Para actualizar en el futuro:"
echo "   cd /app/github-pages"
echo "   surge"
echo ""
echo "Para eliminar:"
echo "   surge teardown mecanizados-calero.surge.sh"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
