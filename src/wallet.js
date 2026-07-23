import { user } from './data.js';
import { formatGemas } from './utils.js';

export function creditGemas(amount) {
  user.balance += amount;
  user.validViews += 1;
  document.querySelector('#walletBalance').textContent = formatGemas(user.balance);
}

export function renderWalletLedger() {
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Movimiento</th><th>Origen</th><th>Monto</th><th>Estado</th></tr></thead>
        <tbody>
          <tr><td>Vista recompensada</td><td>Anuncio CryptoPay</td><td>+20 GG</td><td>Validado por IA</td></tr>
          <tr><td>Promoción enviada</td><td>YouTube</td><td>-1,800 GG</td><td>En revisión</td></tr>
          <tr><td>Compra de monedas</td><td>USDT</td><td>+5,000 GG</td><td>Comprobante recibido</td></tr>
        </tbody>
      </table>
    </div>
  `;
}
