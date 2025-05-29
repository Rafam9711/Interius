# 🚀 Predicción de Leads - Google & Meta Ads

Una aplicación web moderna para predecir leads de campañas publicitarias en Google Ads y Meta Ads utilizando inteligencia artificial.

## ✨ Características

- **Interfaz Moderna**: Diseño SaaS profesional con Tailwind CSS
- **Predicciones Duales**: Soporte para Google Ads y Meta Ads
- **Modo Oscuro**: Toggle entre tema claro y oscuro
- **Responsive**: Optimizado para desktop, tablet y móvil
- **Animaciones**: Transiciones suaves y efectos visuales
- **Comparación Visual**: Gráficos comparativos entre plataformas

## 🎨 Paleta de Colores

- **Azul Eléctrico** (#007BFF): Botones primarios, secciones Google
- **Verde Esmeralda** (#28A745): Botones secundarios, secciones Meta
- **Amarillo Dorado** (#FFC107): Detalles y acentos
- **Grises**: Fondos, texto y tarjetas

## 🏗️ Estructura del Proyecto

\`\`\`
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales
├── components/
│   ├── ui/                 # Componentes shadcn/ui
│   ├── header.tsx          # Header principal
│   ├── google-ads-form.tsx # Formulario Google Ads
│   ├── meta-ads-form.tsx   # Formulario Meta Ads
│   ├── comparison-chart.tsx # Gráfico comparativo
│   ├── theme-toggle.tsx    # Toggle modo oscuro
│   └── theme-provider.tsx  # Proveedor de tema
├── tailwind.config.ts      # Configuración Tailwind
└── README.md
\`\`\`

## 🚀 Tecnologías

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Componentes**: shadcn/ui
- **Iconos**: Lucide React
- **Tema**: next-themes
- **TypeScript**: Tipado completo

## 📱 Componentes Principales

### 1. Header
- Título y subtítulo de la aplicación
- Toggle para modo oscuro
- Iconos y branding

### 2. Google Ads Form
- Sliders para métricas (Cost, Clicks, Conversions, MQL, CPC, Conv. Rate)
- Botón de predicción con loading state
- Visualización de resultados
- Manejo de errores

### 3. Meta Ads Form
- Sliders para métricas (Cost, Reach, Impressions, CTR, CPC, CVR, MQL, SQL)
- Botón de predicción con loading state
- Visualización de resultados
- Manejo de errores

### 4. Comparison Chart
- Barras comparativas entre plataformas
- Indicador de ganador
- Resumen estadístico
- Animaciones de progreso

## 🔧 Instalación y Desarrollo

\`\`\`bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
\`\`\`

## 🌐 Despliegue

La aplicación está optimizada para despliegue en Vercel:

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno (si las hay)
3. Despliega automáticamente

## 🔮 Próximos Pasos (Backend)

### Endpoints a Implementar

1. **POST /api/predict/google**
   \`\`\`json
   {
     "cost": 1000,
     "clicks": 500,
     "conversions": 25,
     "mql": 15,
     "avgCpc": 2.5,
     "convRate": 5
   }
   \`\`\`

2. **POST /api/predict/meta**
   \`\`\`json
   {
     "cost": 1000,
     "reach": 10000,
     "impressions": 50000,
     "ctr": 2.5,
     "cpc": 1.5,
     "cvr": 3,
     "mql": 20,
     "sql": 10
   }
   \`\`\`

### Integración con APIs

- Reemplazar las funciones `handlePredict` en los componentes
- Conectar con servicios de ML/AI
- Implementar autenticación si es necesario
- Agregar persistencia de datos

## 📊 Métricas Soportadas

### Google Ads
- **Cost**: Presupuesto de campaña
- **Clicks**: Número de clicks
- **Conversions**: Conversiones totales
- **MQL**: Marketing Qualified Leads
- **Avg. CPC**: Costo promedio por click
- **Conv. Rate**: Tasa de conversión

### Meta Ads
- **Cost**: Presupuesto de campaña
- **Reach**: Alcance de la campaña
- **Impressions**: Impresiones totales
- **CTR**: Click-through rate
- **CPC**: Costo por click
- **CVR**: Conversion rate
- **MQL**: Marketing Qualified Leads
- **SQL**: Sales Qualified Leads

## 🎯 Características UX/UI

- **Responsive Design**: Adaptable a todos los dispositivos
- **Loading States**: Indicadores de carga durante predicciones
- **Error Handling**: Manejo elegante de errores
- **Dark Mode**: Soporte completo para modo oscuro
- **Animations**: Transiciones suaves y micro-interacciones
- **Accessibility**: Cumple con estándares de accesibilidad

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para detalles.
