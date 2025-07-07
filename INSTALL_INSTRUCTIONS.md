# 📦 GovSource AI - Instalación Rápida

## 🎉 ¡Tu aplicación está lista!

Este archivo ZIP contiene tu aplicación GovSource AI completamente funcional y lista para lanzar.

## 📋 Contenido del Package

```
govsource-ai/
├── 📂 components/              # Componentes React
│   ├── CountrySelector.tsx     # Selector de países
│   └── icons.tsx              # Iconos SVG
├── 📂 services/               # Servicios API
│   └── geminiService.ts       # Integración Gemini AI
├── 📂 src/                    # Archivos fuente
│   └── index.css              # Estilos Tailwind
├── 📂 public/                 # Archivos estáticos
│   └── _redirects             # Configuración Netlify
├── 📄 App.tsx                 # Componente principal
├── 📄 package.json            # Dependencias npm
├── 📄 netlify.toml            # Configuración deploy
├── 📄 deploy.sh               # Script de deploy
├── 📄 README.md               # Documentación completa
└── 📄 DEPLOYMENT_GUIDE.md     # Guía de deploy
```

## 🚀 Instalación (5 minutos)

### 1. Extraer el ZIP
```bash
# Extrae el archivo en tu directorio de proyectos
unzip govsource-ai-complete.zip
cd govsource-ai/
```

### 2. Instalar Dependencias
```bash
# Instala todas las dependencias npm
npm install
```

### 3. Configurar API Key
```bash
# Edita .env.local con tu API key real
# Ve a: https://makersuite.google.com/app/apikey
nano .env.local
```

Reemplaza:
```
VITE_GEMINI_API_KEY=PLACEHOLDER_API_KEY
```

Con:
```
VITE_GEMINI_API_KEY=tu_api_key_real_aqui
```

### 4. Probar Localmente
```bash
# Ejecuta en modo desarrollo
npm run dev
```

Abre http://localhost:5173 en tu navegador.

### 5. Construir para Producción
```bash
# Genera el build optimizado
npm run build
```

## 🌐 Deploy en Netlify (10 minutos)

### Opción A: Deploy Automático
1. Sube tu carpeta a GitHub
2. Ve a [Netlify.com](https://netlify.com)
3. "New site from Git" → Conecta tu repo
4. Configura variable: `VITE_GEMINI_API_KEY`
5. ¡Deploy automático!

### Opción B: Deploy Manual
```bash
# Usa el script incluido
chmod +x deploy.sh
VITE_GEMINI_API_KEY=tu_api_key ./deploy.sh

# O arrastra la carpeta 'dist' a Netlify
```

## ✅ Verificación

Tu aplicación debe:
- ✅ Cargar correctamente en desarrollo
- ✅ Mostrar el formulario de consulta
- ✅ Permitir seleccionar países
- ✅ Responder consultas con Gemini AI
- ✅ Mostrar fuentes oficiales

## 🛠️ Comandos Útiles

```bash
npm run dev        # Desarrollo
npm run build      # Producción
npm run preview    # Vista previa del build
./deploy.sh        # Deploy completo
```

## 🆘 Problemas Comunes

**Error: API Key inválida**
- Verifica que tu API key sea correcta
- Asegúrate de usar el prefijo `VITE_`

**Error: Build fallido**
- Ejecuta `npm install` nuevamente
- Verifica que Node.js ≥ 18

**Error: No carga CSS**
- Verifica que Tailwind CSS esté instalado
- Ejecuta `npm run build` nuevamente

## 📖 Documentación Completa

- **README.md**: Guía completa del proyecto
- **DEPLOYMENT_GUIDE.md**: Instrucciones detalladas de deploy

## 🎯 Siguientes Pasos

1. ✅ **Deploy exitoso**
2. 🔧 **Configurar dominio personalizado**
3. 📊 **Agregar Google Analytics**
4. 💰 **Implementar monetización**
5. 📱 **Planificar versión móvil**

## 📞 Soporte

¿Necesitas ayuda?
- 📧 Email: tu-email@ejemplo.com
- 📱 GitHub Issues
- 📖 Documentación incluida

---

**¡Felicitaciones! Tu asistente legal IA está listo para cambiar el mundo legal en Perú** 🇵🇪🚀