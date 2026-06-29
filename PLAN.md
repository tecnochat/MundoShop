# Plan de Desarrollo — Tu Mundo Shop

## Visión General
Sitio web informativo profesional para "Tu Mundo Shop", catálogo de productos clasificados por categorías con enlace directo a WhatsApp para compras.

## Stack Tecnológico
- **Framework:** Astro (generador de sitios estáticos, ultra-rápido)
- **Estilos:** CSS vanilla con variables CSS y diseño responsivo
- **Imágenes:** Optimización automática con Astro Image
- **SEO:** Meta tags, Open Graph, sitemap automático, schema.org

---

## Arquitectura del Proyecto

```
D:\MundoShop\
├── public\
│   ├── images\             # Imágenes de placeholder y assets estáticos
│   └── favicon.ico
├── src\
│   ├── components\         # Componentes reutilizables
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Footer.astro
│   │   ├── ProductCard.astro
│   │   ├── ProductGrid.astro
│   │   ├── CategoryNav.astro
│   │   ├── PaymentSection.astro
│   │   ├── ShippingSection.astro
│   │   ├── BusinessInfo.astro
│   │   ├── WhatsAppButton.astro
│   │   └── SEOHead.astro
│   ├── data\
│   │   └── products.js     # Data de productos (fuente de verdad)
│   ├── layouts\
│   │   └── Layout.astro    # Layout principal con SEO y estilos globales
│   ├── pages\
│   │   ├── index.astro     # Landing page con todas las secciones
│   │   ├── productos\
│   │   │   └── [slug].astro # Página individual de producto (dinámica)
│   │   └── 404.astro       # Página de error personalizada
│   └── styles\
│       └── global.css      # Estilos base y variables CSS
├── astro.config.mjs        # Configuración de Astro
├── package.json
├── tsconfig.json
├── PLAN.md
└── README.md
```

---

## Estructura de Datos (Productos)

### Categorías y Cantidades
| Categoría  | Cantidad | Descripción                |
|------------|----------|----------------------------|
| Premium    | 6        | Productos de alta gama     |
| Estándar   | 5        | Productos regulares        |
| Nuevos     | 3        | Lanzamientos recientes     |
| Exclusivos | 3        | Edición limitada           |
| **Total**  | **17**   |                            |

### Campos por Producto
```js
{
  id: 1,
  name: "Nombre del Producto",
  category: "premium" | "estandar" | "nuevos" | "exclusivos",
  description: "Párrafo breve con gancho de venta",
  price: "$XX.XX",
  features: ["Característica 1", "Característica 2"],
  slug: "nombre-del-producto",
  image: "/images/placeholder-category-1.jpg"
}
```

---

## Secciones del Landing Page

1. **Header** — Logo, navegación, menú responsivo (hamburguesa en mobile)
2. **Hero** — Banner principal con CTA, eslogan de la tienda
3. **Categorías** — Navegación rápida por categorías
4. **Productos por Categoría** (4 grids):
   - ⭐ Premium (6 productos)
   - ✅ Estándar (5 productos)
   - 🆕 Nuevos (3 productos)
   - 🔥 Exclusivos (3 productos)
5. **Formas de Pago** — Iconos y descripción
6. **Información del Negocio** — Horarios, contacto, dirección
7. **Formas de Envío** — Cobertura, tiempos, costos
8. **Footer** — Links, redes sociales, copyright

---

## Plan de Implementación (Fases)

### Fase 1: Inicialización del Proyecto
- [x] Crear estructura de directorios
- [x] Inicializar proyecto Astro
- [x] Configurar Astro (optimización de imágenes, sitemap)
- [x] Instalar dependencias

### Fase 2: Data Layer
- [ ] Crear archivo de datos de productos (17 productos)
- [ ] Crear imágenes placeholder

### Fase 3: Layout y Estilos Base
- [ ] Crear layout principal con SEO
- [ ] Definir variables CSS (colores, tipografía, espaciado)
- [ ] Crear estilos globales responsivos

### Fase 4: Componentes
- [ ] Header con navegación responsiva
- [ ] Hero section
- [ ] ProductCard (cada producto)
- [ ] ProductGrid (grilla por categoría)
- [ ] CategoryNav (navegación por categorías)
- [ ] WhatsAppButton
- [ ] PaymentSection
- [ ] ShippingSection
- [ ] BusinessInfo
- [ ] Footer

### Fase 5: Páginas
- [ ] Landing page (index) — integración de todas las secciones
- [ ] Página dinámica de producto ([slug].astro) con SEO individual
- [ ] Página 404 personalizada

### Fase 6: SEO y Performance
- [ ] Meta tags por página
- [ ] Open Graph / Twitter Cards
- [ ] Schema.org (Product, Organization)
- [ ] Sitemap.xml automático
- [ ] robots.txt
- [ ] Optimización de imágenes (lazy loading, WebP, sizes)

### Fase 7: Testing y Build
- [ ] Verificar build de producción
- [ ] Probar responsividad
- [ ] Verificar enlaces WhatsApp

---

## Estrategia SEO
- Meta tags descriptivos por producto
- Estructura semántica HTML5 (header, nav, main, section, article, footer)
- Atributos alt descriptivos en imágenes
- Schema.org Product para cada producto
- Schema.org Organization para el negocio
- Sitemap.xml generado automáticamente
- URLs amigables (/productos/nombre-del-producto)
- Títulos y descripciones únicos por página

## Diseño Responsivo
- **Mobile first:** 320px+
- **Tablet:** 768px+
- **Desktop:** 1024px+
- **Grid:** 1 col (mobile) → 2 cols (tablet) → 3 cols (desktop)
- Menú hamburguesa en mobile
- Tipografía fluida con clamp()

## Colores (por definir)
- Basados en el mockup de referencia
- Paleta profesional con acentos llamativos
- Contraste adecuado para accesibilidad

## Rendimiento
- Zero JavaScript por defecto (Astro islands)
- Imágenes optimizadas con astro:image
- Lazy loading nativo
- CSS crítico inline
- Fuente del sistema (sin descargas externas)
- Puntuación objetivo: 95+ Lighthouse
