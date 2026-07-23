import { appState } from './state.js';
import { calculateAdSplit, formatGemas } from './utils.js';

export function buildAdminReport() {
  const totalAdValue = appState.ads.reduce((sum, ad) => sum + (ad.value * ad.views), 0);
  const split = calculateAdSplit(totalAdValue);
  return {
    activeUsers: 8420,
    totalViews: appState.ads.reduce((sum, ad) => sum + ad.views, 0),
    userPayout: formatGemas(split.user),
    adminRevenue: formatGemas(split.admin),
    pendingPromotions: appState.promotionQueue.filter((promo) => promo.status.includes('revisión')).length,
    currentUserBalance: formatGemas(appState.user.balance),
  };
}
