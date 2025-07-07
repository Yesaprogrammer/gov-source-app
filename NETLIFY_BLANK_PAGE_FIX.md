# 🔧 Fix: Página en Blanco en Netlify

## ❌ Problema Actual
Tu app está desplegada en `leximanage.netlify.app` pero muestra página en blanco.

## 🎯 Causas Más Comunes

### 1. **Variable de Entorno Faltante** (90% de los casos)
- **Problema**: `VITE_GEMINI_API_KEY` no está configurada
- **Síntoma**: Página blanca, sin errores visibles

### 2. **Problemas de SPA Routing**
- **Problema**: Netlify no maneja rutas de React correctamente
- **Síntoma**: Página blanca al refrescar

### 3. **Errores de JavaScript**
- **Problema**: Errores en el código que rompen la app
- **Síntoma**: Página blanca, errores en consola

## ✅ Soluciones Paso a Paso

### **SOLUCIÓN 1: Configurar Variable de Entorno**

1. **Ve a tu Dashboard de Netlify**:
   - Abre [netlify.com](https://netlify.com)
   - Entra a tu sitio `leximanage`

2. **Configurar Variables**:
   ```
   Site Settings → Environment Variables → Add Variable
   
   Key: VITE_GEMINI_API_KEY
   Value: tu_api_key_de_gemini_real
   ```

3. **Redeploy**:
   - Deployments → Trigger Deploy → Deploy Site

### **SOLUCIÓN 2: Verificar Configuración SPA**

Asegúrate que tienes estos archivos:

**A. `public/_redirects`**:
```
/*    /index.html   200
```

**B. `netlify.toml`**:
```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### **SOLUCIÓN 3: Verificar Build**

1. **Ve a Netlify Logs**:
   - Deployments → Click en el último deploy
   - Revisa los logs de build

2. **Busca errores como**:
   ```
   Build failed
   Module not found
   Cannot resolve
   ```

### **SOLUCIÓN 4: Debug Local**

```bash
# 1. Verifica que funciona localmente
npm install
npm run build
npm run preview

# 2. Revisa la carpeta dist
ls -la dist/
# Debe tener: index.html, assets/

# 3. Prueba el build local
npx serve dist
```

## 🚀 **Solución Rápida Garantizada**

### **Método Express** (5 minutos):

1. **Configura la API Key**:
   ```
   Netlify Dashboard → tu_sitio → Site Settings 
   → Environment Variables → Add Variable:
   
   VITE_GEMINI_API_KEY = tu_api_key_real
   ```

2. **Redeploy forzado**:
   ```
   Deployments → Options → Clear cache and deploy site
   ```

3. **Espera 2-3 minutos** y recarga tu sitio

## 🔍 **Verificar que está Funcionando**

### **Pruebas:**
1. **Carga la página** → Debe aparecer "GovSource AI"
2. **Abre DevTools** (F12) → Console debe estar sin errores
3. **Prueba una consulta** → Debe responder con IA

### **Si sigue en blanco:**

**Revisa Console del navegador (F12)**:
```javascript
// Errores comunes:
- "Failed to fetch" → Problema de API key
- "Cannot resolve module" → Problema de build
- "404 Not Found" → Problema de routing
```

## 🎯 **Configuración Netlify Correcta**

### **Build Settings**:
```
Build command: npm run build
Publish directory: dist
Node version: 18
```

### **Environment Variables**:
```
VITE_GEMINI_API_KEY = AIza...tu_key_real
```

### **Deploy Settings**:
```
Branch: main
Auto-deploy: ON
```

## 🔄 **Si Nada Funciona: Redeploy Completo**

```bash
# 1. Asegúrate que tienes el código corregido
git pull origin main

# 2. Verifica localmente
npm run build

# 3. Nuevo deploy en Netlify
# Site Settings → Build & Deploy → Clear cache
# Deployments → Trigger deploy → Clear cache and deploy site
```

## 📞 **Debug Avanzado**

### **Ver logs detallados en Netlify**:
1. Functions → Function Log
2. Deployments → Deploy log  
3. Site Settings → Build hooks

### **Comandos debug locales**:
```bash
# Ver qué está en dist
ls -la dist/
cat dist/index.html

# Verificar variables de entorno
echo $VITE_GEMINI_API_KEY

# Servidor local del build
npx serve dist -l 3000
```

## ✅ **Estado Esperado**

### **Después del fix:**
- ✅ Página carga: Logo + formulario visible
- ✅ Console sin errores
- ✅ Selector de países funciona
- ✅ API responde correctamente

---

## 🎉 **¡Tu GovSource AI funcionará perfectamente!**

**El 99% de páginas en blanco se solucionan configurando la variable `VITE_GEMINI_API_KEY` en Netlify.**