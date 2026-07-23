import { platformConfig } from './config.js';
import { commitState } from './state.js';
import { calculateAdSplit } from './utils.js';

export function recordAdView(adId) {
  let reward = 0;
  commitState((state) => {
    const ad = state.ads.find((item) => item.id === adId) || state.ads[0];
    const split = calculateAdSplit(ad.value);
    ad.views += 1;
    reward = split.user;
    state.user.balance += reward;
    state.user.validViews += 1;
    state.ledger.unshift({
      id: `mov-${Date.now()}`,
      type: 'credit',
      title: 'Vista de anuncio',
      source: ad.advertiser,
      amount: reward,
      status: `${platformConfig.rewardSplit.user}/${platformConfig.rewardSplit.admin} validado`,
    });
  });
  return reward;
}

export function shouldShowGameAd(totalPlays) {
  return platformConfig.adRules.requiredBeforeFirstGame && (totalPlays === 0 || totalPlays % platformConfig.adRules.requiredEveryPlays === 0);
}
