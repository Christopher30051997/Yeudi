import { appState, commitState } from './state.js';
import { createElement, formatGemas } from './utils.js';
import { cryptoPackages, renderCryptoOptions } from './payments.js';

export function renderStoreView() {
  const cards = appState.shopSections.map((section) => `
    <article>
      <h3>${section.title}</h3>
      <p>${section.description}</p>
      <ul>${section.options.map((option) => `<li>${option}</li>`).join('')}</ul>
      <button type="button">Configurar</button>
    </article>
  `).join('');

  const packages = cryptoPackages.map((pack, index) => `<button data-buy-package="${index}" type="button">Comprar ${formatGemas(pack.gems)} con ${pack.amount}</button>`).join('');
  const view = createElement(`
    <section class="content-card" id="tienda">
      <p class="eyebrow">Tienda GemasGo</p>
      <h2>Canjes, compras con cripto y comprobantes</h2>
      <div class="shop-grid">${cards}</div>
      <article class="content-card store-extra"><h3>Paquetes cripto disponibles</h3><ul class="feature-list">${renderCryptoOptions()}</ul><div class="store-actions">${packages}</div><small data-store-message></small></article>
    </section>
  `);

  view.addEventListener('click', (event) => {
    const button = event.target.closest('[data-buy-package]');
    if (!button) return;
    const pack = cryptoPackages[Number(button.dataset.buyPackage)];
    commitState((state) => {
      state.user.balance += pack.gems;
      state.ledger.unshift({ id: `mov-${Date.now()}`, type: 'credit', title: 'Compra cripto', source: pack.crypto, amount: pack.gems, status: 'Pendiente de comprobante admin' });
    });
    view.querySelector('[data-store-message]').textContent = `Compra registrada: ${formatGemas(pack.gems)} con ${pack.crypto}.`;
  });

  return view;
}
