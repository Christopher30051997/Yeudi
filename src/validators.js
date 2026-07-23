export function validateRegistration({ name, email, password }) {
  const errors = [];
  if (!name || name.trim().length < 2) errors.push('El nombre debe tener al menos 2 caracteres.');
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('El correo no tiene un formato válido.');
  if (!password || password.length < 8) errors.push('La contraseña debe tener mínimo 8 caracteres.');
  return errors;
}

export function validatePromotion({ url, views, likes, days }) {
  const errors = [];
  if (!/^https?:\/\//.test(url)) errors.push('El enlace debe comenzar con http:// o https://.');
  if (Number(views) < 0 || Number(likes) < 0) errors.push('Vistas y me gusta no pueden ser negativos.');
  if (Number(days) < 1) errors.push('La duración mínima es 1 día.');
  return errors;
}
