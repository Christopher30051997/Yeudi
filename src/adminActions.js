import { commitState } from './state.js';

export function toggleAiSystem(aiName) {
  commitState((state) => {
    const ai = state.aiSystems.find((item) => item.name === aiName);
    if (ai) ai.status = ai.status === 'Activa' ? 'Pausada' : 'Activa';
  });
}

export function approvePromotion(index) {
  commitState((state) => {
    if (state.promotionQueue[index]) state.promotionQueue[index].status = 'Aprobada y publicada';
  });
}

export function rejectPromotion(index) {
  commitState((state) => {
    if (state.promotionQueue[index]) state.promotionQueue[index].status = 'Rechazada';
  });
}
