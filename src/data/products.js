/**
 * Catálogo de productos — Tu Mundo Shop
 * Categorías: premium (6), estandar (5), nuevos (3), exclusivos (3)
 * Total: 17 productos
 * Cada producto tiene su propia imagen individual en /images/<categoria>/
 */

export const categories = [
  { id: 'premium', name: 'Premium', icon: '⭐', description: 'Lo mejor de lo mejor, calidad superior' },
  { id: 'estandar', name: 'Estándar', icon: '✅', description: 'Calidad confiable para el día a día' },
  { id: 'nuevos', name: 'Nuevos', icon: '🆕', description: 'Las últimas novedades llegaron' },
  { id: 'exclusivos', name: 'Exclusivos', icon: '🔥', description: 'Ediciones limitadas, solo para ti' },
];

const image = (cat, slug) => `/images/${cat}/${slug}.svg`;

export const products = [
  // ===== PREMIUM (6) =====
  {
    id: 1,
    name: 'Reloj Inteligente Pro Max',
    category: 'premium',
    slug: 'reloj-inteligente-pro-max',
    image: image('premium', 'reloj-inteligente-pro-max'),
    description: 'Descubre el futuro en tu muñeca. Monitoreo de salud en tiempo real, GPS integrado y una batería que dura hasta 14 días. Diseñado para quienes no se conforman con menos.',
    price: '$289.990',
    features: ['Pantalla AMOLED 1.9"', 'GPS + GLONASS', 'Resistente al agua 50m', 'Batería 14 días', 'Monitoreo cardíaco ECG'],
    highlight: 'Tecnología de punta con diseño premium',
    whatsapp: '5491122334401',
  },
  {
    id: 2,
    name: 'Auriculares Cancelación de Ruido',
    category: 'premium',
    slug: 'auriculares-cancelacion-ruido',
    image: image('premium', 'auriculares-cancelacion-ruido'),
    description: 'Sumérgete en tu música sin distracciones. Cancelación activa de ruido de 40dB, sonido envolvente 3D y 60 horas de reproducción. El silencio nunca sonó tan bien.',
    price: '$249.990',
    features: ['Cancelación activa 40dB', 'Sonido Hi-Res 3D', '60h de batería', 'Códec LDAC', 'Plegables y portátiles'],
    highlight: 'Silencio absoluto, sonido perfecto',
    whatsapp: '5491122334402',
  },
  {
    id: 3,
    name: 'Cámara Deportiva 4K Ultra HD',
    category: 'premium',
    slug: 'camara-deportiva-4k-ultra-hd',
    image: image('premium', 'camara-deportiva-4k-ultra-hd'),
    description: 'Captura cada aventura con calidad cinematográfica. Grabación 4K a 120fps, estabilización de imagen avanzada y resistente hasta 30m sin carcasa. Tu historia merece ser vista en 4K.',
    price: '$329.990',
    features: ['4K a 120fps', 'Estabilización Hypersmooth', 'Sumergible 30m', 'Pantalla táctil frontal', 'WiFi + Bluetooth 5.0'],
    highlight: 'Calidad cinematográfica en tus aventuras',
    whatsapp: '5491122334403',
  },
  {
    id: 4,
    name: 'Laptop Ultraligera Pro',
    category: 'premium',
    slug: 'laptop-ultraligera-pro',
    image: image('premium', 'laptop-ultraligera-pro'),
    description: 'Potencia sin peso. Con solo 980g, esta laptop equipada con procesador de última generación y 16GB de RAM te permite trabajar desde cualquier lugar sin límites. La libertad de ser productivo.',
    price: '$899.990',
    features: ['Procesador Intel i7 13va gen', '16GB RAM DDR5', '512GB SSD NVMe', 'Pantalla 14" 2K', 'Peso: 980g'],
    highlight: 'Potencia extrema en menos de 1kg',
    whatsapp: '5491122334404',
  },
  {
    id: 5,
    name: 'Drone Profesional con Cámara',
    category: 'premium',
    slug: 'drone-profesional-camara',
    image: image('premium', 'drone-profesional-camara'),
    description: 'Eleva tu perspectiva. Vuela hasta 8km de distancia con transmisión HD en tiempo real. Cámara 6K con estabilización de 3 ejes para tomas aéreas que parecen de película.',
    price: '$459.990',
    features: ['Cámara 6K HDR', 'Estabilización 3 ejes', 'Alcance 8km', 'Autonomía 45 min', 'Sensor de obstáculos 360°'],
    highlight: 'La vista más espectacular, desde las alturas',
    whatsapp: '5491122334405',
  },
  {
    id: 6,
    name: 'Smartwatch Deportivo Elite',
    category: 'premium',
    slug: 'smartwatch-deportivo-elite',
    image: image('premium', 'smartwatch-deportivo-elite'),
    description: 'Entrena como un atleta olímpico. Más de 100 modos deportivos, VO2 máximo, análisis de sueño avanzado y resistencia militar. Supera tus límites con datos precisos.',
    price: '$199.990',
    features: ['100+ modos deportivos', 'VO2 Max + umbral láctico', 'GPS multibanda', 'Resistencia MIL-STD-810', 'Autonomía 21 días'],
    highlight: 'Diseñado para atletas exigentes',
    whatsapp: '5491122334406',
  },

  // ===== ESTANDAR (5) =====
  {
    id: 7,
    name: 'Parlante Bluetooth Portátil',
    category: 'estandar',
    slug: 'parlante-bluetooth-portatil',
    image: image('estandar', 'parlante-bluetooth-portatil'),
    description: 'Lleva la fiesta a donde vayas. Sonido potente con graves profundos, resistente al agua y 20 horas de reproducción. El compañero perfecto para cualquier momento.',
    price: '$49.990',
    features: ['Potencia 30W', 'Resistente IPX7', '20h batería', 'Bluetooth 5.3', 'Micrófono incorporado'],
    highlight: 'Sonido grande, tamaño pequeño',
    whatsapp: '5491122334407',
  },
  {
    id: 8,
    name: 'Base de Carga Inalámbrica',
    category: 'estandar',
    slug: 'base-carga-inalambrica',
    image: image('estandar', 'base-carga-inalambrica'),
    description: 'Olvida los cables para siempre. Carga rápida 15W compatible con todos tus dispositivos. Diseño slim con led inteligente que no molesta mientras duermes.',
    price: '$29.990',
    features: ['Carga rápida 15W', 'Compatible Qi universal', 'Protección sobrecarga', 'LED inteligente', 'Anti-resbalante'],
    highlight: 'Carga sin cables, vive sin límites',
    whatsapp: '5491122334408',
  },
  {
    id: 9,
    name: 'Teclado Mecánico RGB',
    category: 'estandar',
    slug: 'teclado-mecanico-rgb',
    image: image('estandar', 'teclado-mecanico-rgb'),
    description: 'Cada tecla, una experiencia. Switches mecánicos de alta respuesta, retroiluminación RGB personalizable y construcción en aluminio. Escribe y juega con precisión quirúrgica.',
    price: '$59.990',
    features: ['Switches Cherry MX', 'RGB por tecla', 'Aluminio anodizado', 'Anti-ghosting total', 'Cable USB-C desmontable'],
    highlight: 'Precisión y estilo en cada tecla',
    whatsapp: '5491122334409',
  },
  {
    id: 10,
    name: 'Mouse Inalámbrico Ergonómico',
    category: 'estandar',
    slug: 'mouse-inalambrico-ergonomico',
    image: image('estandar', 'mouse-inalambrico-ergonomico'),
    description: 'Tu mano te lo agradecerá. Diseño ergonómico que reduce la fatiga, sensor de alta precisión y 80 días de autonomía. Trabaja sin pausas, sin molestias.',
    price: '$39.990',
    features: ['Diseño ergonómico vertical', 'Sensor 4000 DPI', '80 días batería', 'Silencioso', 'Conexión USB-C'],
    highlight: 'Comodidad que se siente, rendimiento que se ve',
    whatsapp: '5491122334410',
  },
  {
    id: 11,
    name: 'Hub USB-C Multipuerto',
    category: 'estandar',
    slug: 'hub-usb-c-multipuerto',
    image: image('estandar', 'hub-usb-c-multipuerto'),
    description: 'Conecta todo lo que necesitas. Expande tu puerto USB-C a 7 puertos diferentes: HDMI 4K, USB 3.0, lector de tarjetas y más. La estación de trabajo definitiva en tu bolsillo.',
    price: '$34.990',
    features: ['HDMI 4K 60Hz', '3x USB 3.0', 'Lector SD/microSD', 'Puerto PD 100W', 'Cable integrado'],
    highlight: 'Un solo puerto, infinitas posibilidades',
    whatsapp: '5491122334411',
  },

  // ===== NUEVOS (3) =====
  {
    id: 12,
    name: 'Lentes de Realidad Virtual',
    category: 'nuevos',
    slug: 'lentes-realidad-virtual',
    image: image('nuevos', 'lentes-realidad-virtual'),
    description: 'El metaverso te espera. Pantallas 4K por ojo, seguimiento ocular y controladores hápticos. Vive experiencias que desafían la realidad desde tu sala de estar.',
    price: '$199.990',
    features: ['4K por ojo', 'Seguimiento ocular', 'Controladores hápticos', 'Sonido espacial 3D', 'Biblioteca 500+ juegos'],
    highlight: 'El metaverso nunca se sintió tan real',
    whatsapp: '5491122334412',
  },
  {
    id: 13,
    name: 'Cargador Solar Portátil',
    category: 'nuevos',
    slug: 'cargador-solar-portatil',
    image: image('nuevos', 'cargador-solar-portatil'),
    description: 'Energía limpia donde sea. Panel solar monocristalino de alta eficiencia con batería integrada de 20000mAh. Carga tus dispositivos con el poder del sol, sin tomacorrientes.',
    price: '$69.990',
    features: ['Panel solar 5W', 'Batería 20000mAh', '2 puertos USB', 'Plegable y ultraligero', 'Gancho para mochila'],
    highlight: 'Carga tus dispositivos con el poder del sol',
    whatsapp: '5491122334413',
  },
  {
    id: 14,
    name: 'Traductor de Idiomas Digital',
    category: 'nuevos',
    slug: 'traductor-idiomas-digital',
    image: image('nuevos', 'traductor-idiomas-digital'),
    description: 'Rompe las barreras del idioma. Traduce en tiempo real más de 100 idiomas con precisión IA. Perfecto para viajeros, negocios internacionales y aprendizaje.',
    price: '$89.990',
    features: ['108 idiomas', 'Traducción por voz', 'Modo offline', 'Pantalla táctil 2.4"', 'Batería 7 días'],
    highlight: 'Habla cualquier idioma, viaja sin fronteras',
    whatsapp: '5491122334414',
  },

  // ===== EXCLUSIVOS (3) =====
  {
    id: 15,
    name: 'Edición Limitada — Reloj de Colección',
    category: 'exclusivos',
    slug: 'reloj-coleccion-edicion-limitada',
    image: image('exclusivos', 'reloj-coleccion-edicion-limitada'),
    description: 'Solo 500 unidades en el mundo. Reloj mecánico con movimiento suizo, caja de titanio y esfera esmaltada a mano. Una obra de arte que marca el tiempo. Certificado de autenticidad incluido.',
    price: '$599.990',
    features: ['Movimiento suizo automático', 'Caja titanio grado 5', 'Esfera esmaltada a mano', 'Resistente 100m', 'Numerado individualmente'],
    highlight: '500 unidades. Cero repeticiones. Puro lujo.',
    whatsapp: '5491122334415',
  },
  {
    id: 16,
    name: 'Audífonos Hi-Fi de Estudio',
    category: 'exclusivos',
    slug: 'audifonos-hi-fi-estudio',
    image: image('exclusivos', 'audifonos-hi-fi-estudio'),
    description: 'Lo que los artistas escuchan. Monitores de estudio profesionales con drivers de neodimio de 50mm y respuesta plana. Cada nota, cada detalle, exactamente como fue grabado.',
    price: '$149.990',
    features: ['Drivers 50mm neodimio', 'Respuesta 5Hz-40kHz', 'Almohadillas memory foam', 'Cable desbalanceado OCC', 'Impedancia 32Ω'],
    highlight: 'Escucha lo que los artistas escuchan',
    whatsapp: '5491122334416',
  },
  {
    id: 17,
    name: 'Kit de Iluminación Inteligente',
    category: 'exclusivos',
    slug: 'kit-iluminacion-inteligente',
    image: image('exclusivos', 'kit-iluminacion-inteligente'),
    description: 'Transforma tu hogar en un escenario. 5 bombillas LED WiFi con 16 millones de colores, sincronización con música y comandos de voz. La atmósfera perfecta para cada momento.',
    price: '$79.990',
    features: ['Kit 5 bombillas', '16M colores RGB', 'Sincronización musical', 'Compatible Alexa/Google', 'App gratuita'],
    highlight: 'Tu hogar, tu ambientación, tu estilo',
    whatsapp: '5491122334417',
  },
];

export function getProductsByCategory(category) {
  return products.filter(p => p.category === category);
}

export function getProductBySlug(slug) {
  return products.find(p => p.slug === slug);
}

export function getAllSlugs() {
  return products.map(p => p.slug);
}

export function getFeaturedProducts(count = 3) {
  // Para el carrusel del Hero: toma 3 productos destacados (uno de cada categoría principal)
  const featured = [];
  const cats = ['premium', 'exclusivos', 'nuevos'];
  for (const cat of cats) {
    const found = products.find(p => p.category === cat && !featured.includes(p));
    if (found) featured.push(found);
  }
  return featured.slice(0, count);
}

export function getProductsForHero(count = 3) {
  // Toma los primeros 3 productos más atractivos para el carrusel
  return products.filter(p => p.category === 'premium').slice(0, count);
}
