import { commitState } from './state.js';
import { calculatePromotionCost } from './utils.js';
import { validatePromotion } from './validators.js';

export function submitPromotion(payload) {
  const errors = validatePromotion(payload);
  if (errors.length) return { ok: false, errors };

  const cost = calculatePromotionCost(payload);
  commitState((state) => {
    state.user.balance -= cost;
    state.user.activePromotions += 1;
    state.promotionQueue.unshift({
      platform: payload.platform,
      url: payload.url,
      target: `${payload.views} vistas / ${payload.likes} me gusta`,
      cost,
      status: 'En revisión',
    });
    state.ledger.unshift({ id: `mov-${Date.now()}`, type: 'debit', title: 'Promoción de video', source: payload.platform, amount: -cost, status: 'Pendiente de aprobación' });
  });
  return { ok: true, cost };
}
