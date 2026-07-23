# GemasGo

Aplicación web frontend de **GemasGo**, una plataforma de monetización con anuncios recompensados, juegos instantáneos, tienda, promociones de videos, comprobantes, billetera, controles administrativos e IAs operativas simuladas en el navegador.

## Qué incluye

- Página principal con selector de idioma, mensaje de bienvenida, descripción de políticas y formulario de registro.
- Registro con validaciones, nombre de usuario en panel y persistencia local.
- Panel tipo red social con menú de tres rayitas, saldo, estadísticas y vistas internas.
- Galería de juegos en 4 columnas, anuncio obligatorio antes de iniciar y cada tres partidas.
- Sistema de anuncios con validación, cálculo 20/80, saldo actualizado, historial y reporte administrativo.
- Tienda con diamantes Free Fire, vidas, compra de GemasGo con USDT/BTC/ETH/BNB y comprobantes.
- Promociones para YouTube, TikTok y Facebook con calculadora de costo, cola de revisión y aprobación admin.
- Panel administrador con KPIs, permisos, señales antifraude, aprobación/rechazo de promociones y control de IAs.
- IA de Anuncios, IA Antifraude, IA de Notificación e IA Supervisora representadas como módulos separados.
- PWA básica con manifest, service worker, ícono, robots y documentación de despliegue/legal.

## Estructura

- `index.html`: aplicación principal, registro, dashboard, modal de anuncios y service worker.
- `styles.css`: diseño responsive completo.
- `src/app.js`: arranque, rutas internas, navegación y refresco de estadísticas.
- `src/storage.js` y `src/state.js`: persistencia local y estado global.
- `src/auth.js`, `src/validators.js`: registro y validaciones.
- `src/adEngine.js`, `src/ads.js`: flujo de anuncios, recompensas y reparto 20/80.
- `src/games.js`, `src/fraud.js`: juegos instantáneos y antifraude.
- `src/store.js`, `src/payments.js`, `src/wallet.js`: tienda, cripto y billetera.
- `src/promotions.js`, `src/promotionEngine.js`: promociones y cálculo de costo.
- `src/admin.js`, `src/adminActions.js`, `src/reports.js`: administración, reportes y moderación.
- `src/notifications.js`, `src/policies.js`, `src/config.js`, `src/language.js`, `src/utils.js`: soporte general.
- `assets/`, `docs/`, `manifest.webmanifest`, `service-worker.js`, `robots.txt`: recursos públicos y documentación.

## Ejecutar localmente

```bash
python3 -m http.server 4173
```

Luego abre `http://127.0.0.1:4173/index.html`.

## Producción

La aplicación funciona completa en frontend con `localStorage`. Para dinero real, anuncios reales o cuentas reales, conecta las mismas capas a servicios backend seguros de autenticación, pagos, anuncios y almacenamiento de comprobantes.
