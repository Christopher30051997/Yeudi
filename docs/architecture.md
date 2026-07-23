# Arquitectura GemasGo

GemasGo está organizado como prototipo frontend modular:

- `index.html`: estructura pública, registro, panel y modal de anuncios.
- `styles.css`: tema responsive inspirado en una red social.
- `src/`: módulos de vistas, datos, utilidades, seguridad, pagos, reportes y notificaciones.
- `manifest.webmanifest` y `service-worker.js`: base para comportamiento PWA estático.

## Flujo principal

1. El usuario selecciona idioma o se detecta desde el navegador.
2. Se registra con nombre, correo opcional y contraseña.
3. Ingresa al panel con saldo, estadísticas y navegación lateral.
4. Antes de jugar, y cada tres partidas, se muestra un anuncio obligatorio.
5. La IA calcula 20% para usuario y 80% para administración.
6. Promociones, tienda, comprobantes y reportes pasan por revisión administrativa.
