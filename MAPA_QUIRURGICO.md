# MAPA QUIRURGICO - JeniNails (`jeninails.vercel.app`)

Repositorio oficial: `ElOriginal650/jeninails` (rama `main`)  
Produccion: `https://jeninails.vercel.app/`

> **Regla de oro:** Todo el sitio vive en un unico archivo **`index.html`** (~1,175 lineas, Tailwind por CDN, sin build). Antes de editar, ubica el cable exacto en este mapa y modifica unicamente ese bloque.

## Archivos en Raiz

- `index.html`: Sitio completo (HTML + configuracion Tailwind + CSS `<style>` + logica `<script>`).
- `vercel.json`, `manifest.webmanifest`, `robots.txt`, `sitemap.xml`: Configuracion de despliegue, PWA y SEO.
- 7 `.svg` locales: `jeni-avatar.svg`, `jelly-perlas.svg`, `jelly-portada.svg`, `manicura-coquette.svg`, `nivelacion-ojodegato.svg`, `pedicura-blanca.svg`, `polygel-corazones.svg`.

## Cables Separados dentro de `index.html`

| Cable | Lineas aprox. | Anclas (IDs, clases, funciones) | Responsabilidad |
| :--- | :--- | :--- | :--- |
| **Cable 1: SEO y Meta** | 1-85 | `<head>`, `google-site-verification`, `canonical`, `og:image`, `twitter:image` | Titulo, meta description, GSC (`DXEvv9uq39d_2C_WRT4Tg33oK5nKKvokw1fsRHloG7k`), vista previa WhatsApp/redes y favicon SVG inline. |
| **Cable 2: Diseno y Fondo 4D** | 85-270 | `tailwind.config`, `<style>`, `.aurora-bg`, `.aurora-blob`, `#catEyeCanvas`, `.glass-panel`, `.glass-card`, `.safe-bottom` | Fuentes (*Playfair Display*, *Plus Jakarta Sans*), paleta (`dark`, `champagne`, `gold`, `rose`, `cateye`), animaciones GPU y estilos glassmorphism. |
| **Cable 3: Header y Portada** | 275-430 | `<header>`, `jeni-avatar.svg`, primera `<section>`, `.nail-sticker-1`, `.nail-sticker-2`, `.nail-glow-card` | Barra superior, navegacion, titular principal, metodos de pago (Efectivo USD, Pago Movil BCV, Binance) y tarjeta destacada (*Micro-French & Brillo Perla*, Drive ID `16WZC8QJys4Kt2C_NMGqizk5Dra0Hx_C7`). |
| **Cable 4: Servicios y Precios** | 430-570 | `<section id="servicios">`, `seleccionarServicioDirecto()` | 6 tarjetas: Manicura ($6), Pedicura Spa ($6), Nivelacion Rubber ($8), Jelly Tip ($9), Polygel ($11) y Combo Duo ($11). |
| **Cable 5: Galeria y Fotos** | 570-635 (HTML) / 855-930 (JS) | `<section id="galeria">`, `#galeriaGrid`, `#selectionToast`, `#toastDesignName`, `fotosReales`, `renderizarGaleria()`, `filtrarGaleria()` | 16 fotos reales de Google Drive (`lh3.googleusercontent.com/d/{id}=w600` con fallback `drive.google.com/thumbnail?id={id}&sz=w600`) y filtros (`todos`, `rubber`, `extensiones`, `nailart`). |
| **Cable 6: Bio y Codigo QR** | 635-690 (HTML) / 1010-1060 (JS) | `<section id="sobre-jeni">`, `generarQR()`, `qrcode.min.js` | Presentacion de Jennifer, badges de valor y QR apuntando a `https://jeninails.vercel.app/?ref=qr`. |
| **Cable 7: Reserva y WhatsApp** | 690-785 (HTML) / 930-1010 (JS) | `<section id="agendar">`, `#nombreCliente`, `#servicioSelect`, `#disenoIdea`, `#extraCatEye`, `#extraFrancesa`, `#extraRetiro`, `#extraCristales`, `#fechaCita`, `#horaCita`, `#totalMonto`, `seleccionarModelo()`, `calcularTotal()`, `enviarWhatsApp()` | Calculadora de total en tiempo real y envio a WhatsApp (`https://wa.me/584245766425?text=...`). |
| **Cable 8: FAQ, Footer y Canvas** | 785-855 (HTML) / 1060-1175 (JS) | Preguntas Frecuentes, `<footer>`, barra movil `md:hidden`, `initCatEyeGalaxyEngine()`, `DOMContentLoaded` | 4 preguntas frecuentes, footer, barra fija movil y motor de particulas/haz magnetico en `#catEyeCanvas`. |

## Reglas Zero-Damage

1. **Sincronia de precios:** Cualquier cambio de precio o nombre en **Cable 4** (`#servicios`) debe actualizarse tambien en `#servicioSelect` (**Cable 7**), en `fotosReales` (**Cable 5**) y en los textos de precio minimo (**Cable 1** y **Cable 8**).
2. **Datos intocables:** No alterar el WhatsApp (`584245766425`), la verificacion de Google Search Console (`DXEvv9uq39d_2C_WRT4Tg33oK5nKKvokw1fsRHloG7k`) ni los `onerror` de respaldo de Google Drive sin instruccion directa.
3. **Sin funciones legadas:** Usar `seleccionarModelo()` y `seleccionarServicioDirecto()`; no reintroducir `prepararReserva()`.
4. **Prioridad movil (`390px`):** Mantener `overflow-x: hidden` / `clip`, sin tarjetas anidadas ni tapar contenido con la barra fija inferior (`.safe-bottom` y `pb-24`).

## Checklist Post-Deploy (`https://jeninails.vercel.app/`)

- [ ] El cable editado refleja el cambio sin romper bloques vecinos.
- [ ] La galeria carga y filtra las 16 fotos sin errores de consola.
- [ ] Al tocar un servicio o foto se actualizan `#servicioSelect`, `#disenoIdea` y `#totalMonto`.
- [ ] El boton de WhatsApp abre `wa.me/584245766425` con el mensaje completo.
