# ☁️🤖 Portal Normativo Inteligente DGCyE (Cloud & Hugging Face IA)

**Materia:** Proyecto de Implementación de Sitios Web Dinámicos  
**Institución:** EEST N.º 1 "Eduardo Ader" — Vicente López  
**Curso:** 7° Año 2° Grupo B  
**Docente:** Prof. Mansilla Muñoz York Elías  
**Actividad 20:** Despliegue en la Nube, Inteligencia Artificial y Pitch Final (Caso DGCyE)

---

## 🎯 1. Descripción del Proyecto

Prototipo funcional para la **Dirección General de Cultura y Educación de la Provincia de Buenos Aires (DGCyE)** diseñado para optimizar la labor de inspectores de enseñanza, equipos directivos y docentes de GBA.

El sistema combina:
1. **Manipulación Dinámica del DOM y Filtros en Memoria:** Búsqueda instantánea por palabra clave, número de resolución, categoría temática y nivel educativo sin recargar la página (`< 50ms`).
2. **Asistente de Inteligencia Artificial con Hugging Face (NLP):** Integración mediante la API nativa `fetch()` con modelos pre-entrenados de procesamiento de lenguaje natural (`HuggingFaceH4/zephyr-7b-beta`, `mistralai/Mistral-7B-Instruct-v0.3`) y síntesis contextual sobre la normativa vigente.
3. **Generador Digital de Código QR Institucional:** Crea en tiempo real la credencial QR apuntando a la URL pública en producción (`HTTPS`) con descarga en formato PNG e impresión directa de tarjeta para la **Expo Técnica**.

---

## 🧠 2. Registro de Investigación e Integración IA (Hugging Face)

### ¿Qué es Hugging Face?
**Hugging Face** es la plataforma colaborativa y ecosistema abierto líder a nivel mundial en **Machine Learning** y **Procesamiento de Lenguaje Natural (NLP)**. Aloja cientos de miles de modelos pre-entrenados (Basados en arquitecturas *Transformer* como Mistral, Zephyr, Llama, BART y RoBERTa) accesibles mediante **Hugging Face Spaces** o su **Serverless Inference API** a través de peticiones HTTP `POST`.

### Caso de Uso Implementado en el Portal DGCyE
En lugar de buscar manualmente dentro de extensas resoluciones ministeriales en PDF, un inspector o docente de GBA puede escribir en lenguaje natural:

> *"¿Cuáles son las pautas para ferias de ciencias?"*

El módulo de IA en `js/app.js`:
1. Identifica el contexto normativo aplicable en memoria (`RESOC-2026-1480-GDEBA-DGCYE` — Reglamento General de Ferias de Educación, Artes, Ciencias y Tecnología - ACTJ).
2. Construye el payload JSON y ejecuta una petición asíncrona `fetch()` hacia `https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta`.
3. Devuelve un resumen automático y estructurado con las etapas obligatorias (Escolar, Distrital, Regional y Provincial), requisitos de Carpeta de Campo, Informe Pedagógico y cantidad de estudiantes expositores.

---

## 📂 3. Estructura Limpia del Repositorio (`main`)

```text
portal-dgcye/
├── index.html          # Interfaz principal del Portal DGCyE (Asistente IA, Buscador DOM, QR y Checklist)
├── css/
│   └── styles.css      # Estilos institucionales DGCyE / Portal ABC, diseño responsivo y vista de impresión QR
├── js/
│   ├── data.js         # Base de datos en memoria de 12 normativas oficiales de la DGCyE
│   └── app.js          # Lógica de filtrado DOM, Fetch API a Hugging Face y generador de Código QR
├── vercel.json         # Configuración de despliegue serverless y cabeceras de seguridad HTTPS
├── .gitignore          # Exclusión de archivos basura o temporales
└── README.md           # Documentación técnica y registro de investigación de la Actividad 20
```

---

## 🚀 4. Guía Paso a Paso para Subir a GitHub y Desplegar en Vercel

### Paso 1: Subir a un Repositorio Limpio en GitHub (Rama `main`)
1. Creá un nuevo repositorio público en GitHub llamado `portal-dgcye-ia` (sin archivos adicionales).
2. Abrí una terminal en esta carpeta y ejecutá:
   ```bash
   git init -b main
   git add .
   git commit -m "feat: portal DGCyE con filtros en memoria, asistente IA Hugging Face y QR institucional"
   git remote add origin https://github.com/TU_USUARIO/portal-dgcye-ia.git
   git push -u origin main
   ```

### Paso 2: Publicar en la Nube con Vercel (HTTPS Activo)
1. Ingresá en [vercel.com](https://vercel.com/) con tu cuenta de GitHub.
2. Hacé clic en **"Add New..." → "Project"** e importá el repositorio `portal-dgcye-ia`.
3. Hacé clic en **"Deploy"**. En menos de 30 segundos tendrás tu URL pública activa con certificado SSL (`https://portal-dgcye-ia.vercel.app`).
4. Al abrir la URL de Vercel, la sección **Código QR Institucional** del portal detectará automáticamente el dominio de producción y generará el QR listo para descargar o imprimir para la **Expo Técnica**.

---

## 🛠️ 5. Lista de Verificación Terminal (Checklist de Entrega Final)

- [x] **Repositorio GitHub Limpio:** Código estructurado en la rama `main` sin archivos basura.
- [x] **Portal DGCyE Desplegado:** Configurado con `vercel.json` para URL pública activa con protocolo `HTTPS`.
- [x] **Desafío de IA (Hugging Face):** Registro de investigación + integración interactiva del modelo de texto en el proyecto mediante `fetch()`.
- [x] **Código QR Institucional:** Generado digitalmente en la aplicación, apuntando al sistema en producción.
