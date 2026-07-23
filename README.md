# GemasGo

Aplicación web frontend de **GemasGo** organizada por partes: entrada pública, panel de usuario y panel de administrador separado.

## Rutas principales

- `index.html`: página pública y panel del usuario.
- `admin.html`: panel privado de administración en una dirección distinta.

## Qué incluye el panel del usuario

- Registro con nombre, correo opcional, contraseña y mensajes de validación.
- Menú tipo red social con secciones separadas: Inicio, Juegos, Anuncios, Tienda, Promociones y Comprobantes.
- Juegos instantáneos con anuncio obligatorio antes de iniciar y cada tres partidas.
- Anuncios disponibles con actualización de saldo e historial en billetera.
- Tienda con diamantes Free Fire, vidas, paquetes GemasGo con cripto y comprobantes.
- Promociones para YouTube, TikTok y Facebook con calculadora de costo y envío a revisión.
- Vista de comprobantes y mensajes del usuario.

## Qué incluye el panel administrador

- Ruta separada `admin.html` para no mezclarlo con el panel del usuario.
- Resumen operativo, revisión de promociones, señales de seguridad y controles del sistema.
- Acciones para aprobar/rechazar promociones y activar/desactivar sistemas internos.

## Preparado para base de datos

- `src/database/adapter.js` deja un punto único para reemplazar `localStorage` por una API o base de datos real.
- `docs/database-schema.sql` define tablas iniciales para usuarios, anuncios, billetera, promociones y comprobantes.

## Estructura técnica

- `src/app.js`: arranque del panel de usuario.
- `src/adminApp.js`: arranque exclusivo del panel administrador.
- `src/storage.js` y `src/state.js`: estado persistente local.
- `src/adEngine.js`, `src/promotionEngine.js`, `src/adminActions.js`: lógica separada por dominio.
- `styles.css`: diseño visual responsive para escritorio y navegador de celular.

## Ejecutar localmente

```bash
python3 -m http.server 4173
```

Luego abre:

- Usuario: `http://127.0.0.1:4173/index.html`
- Administrador: `http://127.0.0.1:4173/admin.html`

## Producción

La app está preparada para conectar backend real en la capa `src/database/adapter.js`. Para operar con dinero, anuncios o cuentas reales, conecta autenticación, base de datos, pagos, proveedor de anuncios y almacenamiento de comprobantes desde servicios seguros.
