export function formatGemas(amount) {
  return `${new Intl.NumberFormat('es').format(amount)} GG`;
}

export function createElement(html) {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}

export function calculateAdSplit(value) {
  return {
    user: Math.round(value * 0.2),
    admin: Math.round(value * 0.8),
  };
}

export function calculatePromotionCost({ views = 0, likes = 0, days = 1 }) {
  return Math.max(250, Math.ceil((views * 1.2) + (likes * 2.4) + (days * 85)));
}
