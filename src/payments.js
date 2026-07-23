import { platformConfig } from './config.js';

export const cryptoPackages = [
  { crypto: 'USDT', amount: '5 USDT', gems: 5000 },
  { crypto: 'Bitcoin', amount: '0.0002 BTC', gems: 7200 },
  { crypto: 'Ethereum', amount: '0.004 ETH', gems: 6800 },
  { crypto: 'Binance Coin', amount: '0.02 BNB', gems: 6200 },
];

export function renderCryptoOptions() {
  return cryptoPackages
    .filter((pack) => platformConfig.supportedCryptos.includes(pack.crypto))
    .map((pack) => `<li>${pack.amount} → ${pack.gems.toLocaleString('es')} GG (${pack.crypto})</li>`)
    .join('');
}
