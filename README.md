# GemasGo

Prototipo frontend estático de la plataforma GemasGo: monetización por anuncios, juegos instantáneos, tienda, promociones de vídeos y administración supervisada por IA.

## Estructura

- `index.html`: documento principal y shell de la aplicación.
- `styles.css`: diseño visual, tarjetas, layout tipo red social y responsive.
- `src/app.js`: inicialización de navegación, estadísticas y vistas.
- `src/data.js`: datos mock de usuarios, juegos, anuncios, tienda, IA y promociones.
- `src/language.js`: selector de idioma basado en el navegador.
- `src/games.js`: galería de juegos y anuncio obligatorio antes de jugar/cada 3 partidas.
- `src/ads.js`: reportes de anuncios y modal de validación.
- `src/store.js`: tienda con diamantes, vidas, cripto y comprobantes.
- `src/promotions.js`: calculadora de costo de promoción y cola de revisión.
- `src/admin.js`: panel administrador con KPIs, acciones y control de IA.
- `src/home.js`: resumen de monetización e IA.
- `src/utils.js`: utilidades de formato, creación DOM y cálculos.

## Ejecutar localmente

```bash
python -m http.server 4173
```

Luego abrir `http://127.0.0.1:4173/index.html`.

## Alcance

Este prototipo no incluye backend real, autenticación persistente, pagos cripto reales ni integración con redes sociales. Está organizado como base frontend para conectar esas piezas posteriormente.
