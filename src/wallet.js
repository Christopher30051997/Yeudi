import { appState, commitState } from './state.js';
import { formatGemas } from './utils.js';

export function creditGemas(amount, source = 'Sistema') {
  commitState((state) => {
    state.user.balance += amount;
    state.user.validViews += 1;
    state.ledger.unshift({ id: `mov-${Date.now()}`, type: 'credit', title: 'Crédito GemasGo', source, amount, status: 'Aprobado' });
  });
}

export function renderWalletLedger() {
  const rows = appState.ledger.map((movement) => `
    <tr>
      <td>${movement.title}</td>
      <td>${movement.source}</td>
      <td>${formatGemas(movement.amount)}</td>
      <td>${movement.status}</td>
    </tr>
  `).join('');

  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Movimiento</th><th>Origen</th><th>Monto</th><th>Estado</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}
