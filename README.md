# GovSource AI 🏛️

**Asistente legal inteligente que proporciona respuestas oficiales a preguntas legales y administrativas, basándose en fuentes gubernamentales de múltiples países, con enfoque especial en Perú.**

## ✨ Características

- 🤖 **IA Especializada**: Utiliza Google Gemini AI para respuestas precisas
- 🌍 **Multinavegación**: Soporte para 11 países (enfoque en Perú)
- 📚 **Fuentes Oficiales**: Referencias directas a sitios gubernamentales
- 🎨 **Interfaz Moderna**: Diseño responsive con Tailwind CSS
- 🚀 **Optimizado**: Construcción con Vite para máximo rendimiento
- 🔒 **Seguro**: Headers de seguridad y CSP configurados

## 🛠️ Tecnologías

- **Frontend**: React 19 + TypeScript + Vite
- **Estilos**: Tailwind CSS + PostCSS
- **IA**: Google Generative AI (Gemini)
- **Deploy**: Netlify (recomendado)

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js 18 o superior
- npm o yarn
- API Key de Google Gemini

### 1. Clonar el repositorio

```bash
git clone <tu-repositorio>
cd govsource-ai
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
VITE_GEMINI_API_KEY=tu_api_key_de_gemini_aqui
```

**Obtener API Key de Gemini:**
1. Ve a [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Crea una nueva API key
3. Copia la clave y pégala en tu archivo `.env.local`

### 4. Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### 5. Construir para producción

```bash
npm run build
```

## 📱 Uso de la Aplicación

1. **Selecciona un país** del menú desplegable
2. **Escribe tu pregunta legal** en el área de texto
3. **Haz clic en "Find Answer"** para obtener la respuesta
4. **Revisa las fuentes oficiales** proporcionadas al final

### Ejemplos de preguntas:

- "¿Cuáles son los requisitos para obtener una visa de trabajo en Perú?"
- "¿Cómo registro mi empresa en Perú?"
- "¿Cuáles son mis obligaciones tributarias como freelancer?"
- "¿Qué documentos necesito para residencia permanente?"

## 🌐 Deploy en Netlify

### Opción 1: Deploy Automático (Recomendado)

1. **Sube tu código a GitHub**
2. **Conecta con Netlify**:
   - Ve a [Netlify](https://netlify.com)
   - Crea una cuenta o inicia sesión
   - Haz clic en "New site from Git"
   - Conecta tu repositorio de GitHub

3. **Configurar variables de entorno**:
   - En tu dashboard de Netlify, ve a "Site settings"
   - Navega a "Environment variables"
   - Agrega: `VITE_GEMINI_API_KEY` con tu API key

4. **Deploy automático**:
   - Netlify detectará automáticamente la configuración
   - El deploy se activará automáticamente en cada push

### Opción 2: Deploy Manual

```bash
# Usar el script de deploy incluido
./deploy.sh

# O ejecutar manualmente:
npm run build
# Luego sube la carpeta 'dist' a Netlify
```

## 📋 Estructura del Proyecto

```
govsource-ai/
├── components/           # Componentes React
│   ├── CountrySelector.tsx
│   └── icons.tsx
├── services/            # Servicios API
│   └── geminiService.ts
├── src/                 # Archivos fuente
│   └── index.css
├── public/              # Archivos estáticos
│   └── _redirects
├── App.tsx              # Componente principal
├── constants.ts         # Constantes (países)
├── types.ts             # Tipos TypeScript
├── netlify.toml         # Configuración Netlify
├── tailwind.config.js   # Configuración Tailwind
└── deploy.sh            # Script de deploy
```

## 🔧 Configuración Avanzada

### Personalización de Países

Edita `constants.ts` para agregar o modificar países:

```typescript
export const COUNTRIES = [
  "Perú",
  "Tu Nuevo País",
  // ... otros países
];
```

### Personalización de Fuentes Oficiales

Edita `services/geminiService.ts` para agregar fuentes oficiales de tu país:

```typescript
const OFFICIAL_SOURCES = {
  'Tu País': [
    'https://gobierno.tu-pais.com',
    'https://migracion.tu-pais.com',
    // ... más fuentes
  ]
};
```

### Personalización de Estilos

Los colores de marca se pueden modificar en `tailwind.config.js`:

```javascript
colors: {
  'brand-primary': '#tu-color-primario',
  'brand-secondary': '#tu-color-secundario',
}
```

## 📊 Monitoreo y Analytics

Para agregar analytics en el futuro:

1. **Google Analytics**: Agregar script en `index.html`
2. **Hotjar**: Para heatmaps y grabaciones de usuario
3. **Mixpanel**: Para eventos personalizados

## 🔒 Seguridad

- Headers de seguridad configurados en `netlify.toml`
- Content Security Policy (CSP) restrictivo
- Variables de entorno para API keys
- Validación de entrada de usuario

## 🌟 Roadmap Futuro

- [ ] **Autenticación de usuarios** (Supabase)
- [ ] **Historial de consultas** (Base de datos)
- [ ] **Sistema de favoritos**
- [ ] **API propia para caching**
- [ ] **Notificaciones push**
- [ ] **Modo offline**
- [ ] **Soporte para más idiomas**

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📞 Soporte

Para soporte técnico o consultas:
- Crea un issue en GitHub
- Contacta al equipo de desarrollo

---

**Desarrollado con ❤️ para ayudar a las personas a acceder a información legal oficial**
