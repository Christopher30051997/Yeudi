import { promotionQueue } from './data.js';
import { calculatePromotionCost, createElement, formatGemas } from './utils.js';

export function renderPromotionsView() {
  const queue = promotionQueue.map((item) => `<li><strong>${item.platform}</strong> · ${item.target} · ${formatGemas(item.cost)} · ${item.status}</li>`).join('');
  const view = createElement(`
    <section class="content-card promotion-card" id="promociones">
      <div>
        <p class="eyebrow">Promociones de vídeos</p>
        <h2>Promociona YouTube, TikTok o Facebook</h2>
        <p>El video queda en espera hasta que el administrador lo apruebe.</p>
        <ul class="queue-list">${queue}</ul>
      </div>
      <form class="promo-form" id="promoCalculator">
        <input type="url" name="url" placeholder="URL del vídeo" aria-label="URL del vídeo" required />
        <input type="number" name="views" min="0" placeholder="Vistas deseadas" aria-label="Vistas deseadas" />
        <input type="number" name="likes" min="0" placeholder="Me gusta deseados" aria-label="Me gusta deseados" />
        <select name="days" aria-label="Duración de promoción"><option value="1">1 día</option><option value="7">7 días</option><option value="30">30 días</option></select>
        <button type="submit">Calcular costo</button>
        <output id="promoCost">Costo estimado: --</output>
      </form>
    </section>
  `);

  view.querySelector('#promoCalculator').addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const cost = calculatePromotionCost({ views: Number(data.get('views')), likes: Number(data.get('likes')), days: Number(data.get('days')) });
    view.querySelector('#promoCost').textContent = `Costo estimado: ${formatGemas(cost)} · Estado: pendiente de aprobación`;
  });

  return view;
}
