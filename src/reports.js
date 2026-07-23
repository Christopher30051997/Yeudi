import { ads, promotionQueue, user } from './data.js';
import { calculateAdSplit, formatGemas } from './utils.js';

export function buildAdminReport() {
  const totalAdValue = ads.reduce((sum, ad) => sum + (ad.value * ad.views), 0);
  const split = calculateAdSplit(totalAdValue);
  return {
    activeUsers: 8420,
    totalViews: ads.reduce((sum, ad) => sum + ad.views, 0),
    userPayout: formatGemas(split.user),
    adminRevenue: formatGemas(split.admin),
    pendingPromotions: promotionQueue.length,
    currentUserBalance: formatGemas(user.balance),
  };
}
