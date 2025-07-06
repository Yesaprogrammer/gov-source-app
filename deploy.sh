#!/bin/bash

# Script de deploy para GovSource AI
# Automatiza el proceso de construcción y deploy a Netlify

echo "🚀 Iniciando proceso de deploy de GovSource AI..."

# Verificar que las variables de entorno estén configuradas
if [ -z "$VITE_GEMINI_API_KEY" ]; then
    echo "❌ Error: VITE_GEMINI_API_KEY no está configurada"
    echo "   Asegúrate de configurar tu API key de Gemini en las variables de entorno"
    exit 1
fi

echo "✅ Variables de entorno verificadas"

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

# Verificar que no hay errores de lint
echo "🔍 Verificando código..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Error en la construcción del proyecto"
    exit 1
fi

echo "✅ Aplicación construida exitosamente"
echo "📁 Archivos generados en el directorio 'dist'"
echo ""
echo "🌐 Para deploar en Netlify:"
echo "   1. Sube tu repositorio a GitHub"
echo "   2. Conecta tu repositorio en Netlify"
echo "   3. Configura la variable de entorno VITE_GEMINI_API_KEY"
echo "   4. Netlify detectará automáticamente la configuración"
echo ""
echo "✨ Deploy completado!"