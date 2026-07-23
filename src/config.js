export const platformConfig = {
  appName: 'GemasGo',
  rewardSplit: { user: 20, admin: 80 },
  adRules: {
    requiredBeforeFirstGame: true,
    requiredEveryPlays: 3,
    validationSeconds: 5,
  },
  supportedCryptos: ['USDT', 'Bitcoin', 'Ethereum', 'Binance Coin'],
  promotionPlatforms: ['YouTube', 'TikTok', 'Facebook'],
};

export const adminPermissions = [
  'Subir juegos HTML5',
  'Editar precios y recompensas',
  'Aprobar promociones',
  'Enviar comprobantes',
  'Auditar anuncios',
  'Activar o desactivar IAs',
];
