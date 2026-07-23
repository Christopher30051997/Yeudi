export const fraudSignals = [
  { signal: 'Repetición de IP', level: 'Medio', action: 'Limitar anuncios por hora' },
  { signal: 'Clicks demasiado rápidos', level: 'Alto', action: 'Pausar recompensa y revisar' },
  { signal: 'Sesión normal', level: 'Bajo', action: 'Acreditar GemasGo' },
];

export function getFraudVerdict(playCount) {
  if (playCount > 0 && playCount % 12 === 0) return 'Revisión manual requerida';
  if (playCount > 0 && playCount % 6 === 0) return 'Monitoreo reforzado';
  return 'Seguro para recompensar';
}
