export const languages = {
  es: { flag: '🇪🇸', label: 'Español' },
  en: { flag: '🇺🇸', label: 'English' },
  zh: { flag: '🇨🇳', label: '中文' },
  hi: { flag: '🇮🇳', label: 'हिन्दी' },
  ar: { flag: '🇸🇦', label: 'العربية' },
};

export const user = {
  name: 'Invitado GemasGo',
  balance: 12480,
  validViews: 248,
  activePromotions: 6,
  gamesPlayed: 93,
  fraudLevel: 'Seguro',
};

export const games = [
  { id: 'turbo-gem', icon: '🏎️', title: 'Turbo Gem', category: 'Carreras', plays: 0 },
  { id: 'puzzle-mina', icon: '🧩', title: 'Puzzle Mina', category: 'Puzzle', plays: 0 },
  { id: 'cosmo-gg', icon: '🚀', title: 'Cosmo GG', category: 'Arcade', plays: 0 },
  { id: 'gol-rapido', icon: '⚽', title: 'Gol Rápido', category: 'Deportes', plays: 0 },
  { id: 'dragon-click', icon: '🐉', title: 'Dragón Click', category: 'Clicker', plays: 0 },
  { id: 'arquero-pro', icon: '🏹', title: 'Arquero Pro', category: 'Acción', plays: 0 },
  { id: 'ola-infinita', icon: '🌊', title: 'Ola Infinita', category: 'Aventura', plays: 0 },
  { id: 'moneda-rush', icon: '🪙', title: 'Moneda Rush', category: 'Recompensas', plays: 0 },
];

export const ads = [
  { id: 'ad-01', advertiser: 'CryptoPay', value: 100, views: 320, status: 'Activo' },
  { id: 'ad-02', advertiser: 'GameBoost', value: 80, views: 540, status: 'Activo' },
  { id: 'ad-03', advertiser: 'ShopGG', value: 150, views: 190, status: 'Pausado' },
];

export const shopSections = [
  { title: 'Diamantes Free Fire', description: '3 niveles configurables para canjear diamantes.', options: ['100 diamantes', '310 diamantes', '520 diamantes'] },
  { title: 'Vidas para juegos', description: 'Paquetes por cantidad para seguir jugando.', options: ['5 vidas', '15 vidas', '50 vidas'] },
  { title: 'Comprar GemasGo', description: 'Recarga con criptomonedas.', options: ['USDT', 'Bitcoin', 'Ethereum', 'Binance Coin'] },
  { title: 'Comprobantes', description: 'Fotos, recibos y mensajes enviados por administración.', options: ['Recibo pendiente', 'Pago aprobado', 'Soporte'] },
];

export const aiSystems = [
  { name: 'IA de Anuncios', status: 'Activa', description: 'Calcula reparto 20/80 y controla vistas.' },
  { name: 'IA Antifraude', status: 'Activa', description: 'Detecta trampas, bots y manipulación.' },
  { name: 'IA de Notificación', status: 'Activa', description: 'Envía mensajes, fotos y comprobantes.' },
  { name: 'IA Supervisora', status: 'Activa', description: 'Vigila estabilidad del sistema completo.' },
];

export const promotionQueue = [
  { platform: 'YouTube', url: 'https://youtube.com/watch?v=demo', target: '1,000 vistas', cost: 1800, status: 'En revisión' },
  { platform: 'TikTok', url: 'https://tiktok.com/@gemasgo/video/demo', target: '500 me gusta', cost: 1400, status: 'Aprobable' },
];
