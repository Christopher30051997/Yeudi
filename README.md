# GemasGo

Prototipo frontend estático de **GemasGo**, una plataforma de monetización con anuncios, juegos instantáneos, tienda, promociones de videos y panel administrador supervisado por IA.

## Estructura

- `index.html`: página principal, selector de idioma, registro, panel, navegación y modal de anuncios.
- `styles.css`: diseño responsive inspirado en una red social moderna.
- `src/app.js`: arranque de la SPA y navegación interna.
- `src/data.js`: datos mock de usuario, juegos, anuncios, tienda, IAs y promociones.
- `src/auth.js`: registro local y validaciones visibles de cuenta.
- `src/games.js`: galería de juegos en 4 columnas y anuncios obligatorios.
- `src/ads.js`: tabla de anuncios, reparto 20/80 y modal de validación.
- `src/store.js` + `src/payments.js`: tienda, canjes y paquetes con criptomonedas.
- `src/promotions.js`: calculadora y cola de aprobación de videos.
- `src/admin.js` + `src/reports.js`: KPIs, permisos, reportes y señales antifraude.
- `src/fraud.js`: reglas simuladas de IA antifraude.
- `src/notifications.js`: comprobantes, mensajes y alertas al usuario.
- `src/policies.js`: políticas centrales del prototipo.
- `src/language.js`: detección y cambio entre cinco idiomas.
- `src/utils.js`: utilidades compartidas.
- `manifest.webmanifest`, `service-worker.js`, `robots.txt` y `assets/icons/gemasgo.svg`: base PWA y assets públicos.
- `docs/architecture.md`: descripción técnica del flujo principal.

## Ejecutar localmente

```bash
python3 -m http.server 4173
```

Luego abre `http://127.0.0.1:4173/index.html`.

## Alcance del prototipo

Este proyecto no incluye backend real, pasarela de pagos, autenticación persistente ni SDKs de anuncios. Los cálculos y datos son simulados para representar cómo funcionaría la plataforma antes de integrar servicios reales.
