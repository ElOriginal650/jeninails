/*
 * JeniNails — 2027 Feminine Haute-Beauty Obsidian & Sapphire Cat-Eye 4D Atelier
 * - Head-first synchronous CSS & obsidian backdrop injection (0ms FOUC when loaded in <head>)
 * - Physically removes legacy .galaxy-stage & #catEyeCanvas so zero old loops burn mobile CPU/GPU
 * - Bulletproof 60 FPS GPU Dual-Comet Orbit Border on "Pedir cita" & WhatsApp CTAs
 *   (real DOM layers z-index 0/1/2, immune to Android prefers-reduced-motion & ::before clipping)
 * - Larger, crisp Jennifer portrait + 60 FPS native WebGL 1.0 (0 KB external JS libraries)
 */
(function () {
  'use strict';

  if (window.__JENINAILS_4D_2027__) return;
  window.__JENINAILS_4D_2027__ = true;

  var docEl = document.documentElement;
  if (docEl) {
    docEl.style.backgroundColor = '#000103';
    docEl.style.colorScheme = 'dark';
  }

  var head = document.head || document.getElementsByTagName('head')[0];

  // 0. Instant preconnect + non-blocking 2027 fashion/beauty fonts (Syne + Outfit)
  if (head) {
    if (!document.getElementById('jn-2027-pc1')) {
      var pc1 = document.createElement('link');
      pc1.id = 'jn-2027-pc1';
      pc1.rel = 'preconnect';
      pc1.href = 'https://fonts.googleapis.com';
      head.appendChild(pc1);
    }
    if (!document.getElementById('jn-2027-pc2')) {
      var pc2 = document.createElement('link');
      pc2.id = 'jn-2027-pc2';
      pc2.rel = 'preconnect';
      pc2.href = 'https://fonts.gstatic.com';
      pc2.crossOrigin = 'anonymous';
      head.appendChild(pc2);
    }
    if (!document.getElementById('jn-2027-fonts')) {
      var fontLink = document.createElement('link');
      fontLink.id = 'jn-2027-fonts';
      fontLink.rel = 'stylesheet';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap';
      head.appendChild(fontLink);
    }
  }

  // 1. Inject 2027 Feminine Luxury Obsidian-Sapphire & Animated-Border CSS Immediately (Zero-Damage)
  var style = document.createElement('style');
  style.id = 'jeninails-2027-obsidian-theme';
  style.textContent = [
    ':root {',
    '  --jn-obsidian: #000103;',
    '  --jn-header-solid: #02050E;',
    '  --jn-topbar-solid: #010308;',
    '  --jn-pearl: #F9FCFF;',
    '  --jn-silver: rgba(232, 242, 255, 0.92);',
    '  --jn-silver-muted: rgba(202, 224, 252, 0.82);',
    '  --jn-sapphire: #74D2FF;',
    '  --jn-sapphire-core: #2BB8FF;',
    '  --jn-rose-pearl: #F6C6EA;',
    '  --jn-hairline: rgba(162, 212, 255, 0.18);',
    '  --jn-hairline-mid: rgba(162, 212, 255, 0.34);',
    '  --jn-hairline-strong: rgba(132, 216, 255, 0.80);',
    '  --jn-glass: rgba(3, 8, 20, 0.76);',
    '  --jn-glass-hover: rgba(5, 14, 34, 0.90);',
    '  --jn-control-bg: rgba(4, 11, 26, 0.88);',
    '  --jn-active-bg: rgba(34, 146, 245, 0.28);',
    '  --jn-font-display: "Syne", "Outfit", system-ui, sans-serif;',
    '  --jn-font-body: "Outfit", system-ui, -apple-system, sans-serif;',
    '  --jn-ease-out: cubic-bezier(0.23, 1, 0.32, 1);',
    '}',
    '',
    'html, body {',
    '  background-color: var(--jn-obsidian) !important;',
    '  color: var(--jn-pearl) !important;',
    '  font-family: var(--jn-font-body) !important;',
    '  overflow-x: clip !important;',
    '}',
    '',
    /* Completely kill legacy galaxy/aurora layers from frame 0 */
    '.galaxy-stage, #nebulaParallax, .nebula-layer, .nebula-cloud, .nebula-1, .nebula-2, .nebula-3, .velvet-grain, .silk-bg, .silk-veil, .aurora-bg, .aurora-blob, #catEyeBeam, #catEyeCanvas {',
    '  display: none !important;',
    '  visibility: hidden !important;',
    '  opacity: 0 !important;',
    '  pointer-events: none !important;',
    '}',
    '',
    /* Zero-White-Flash Canvas: instant obsidian-sapphire CSS backdrop underneath WebGL */
    '#jeninails-obsidian-4d {',
    '  position: fixed;',
    '  inset: 0;',
    '  width: 100%;',
    '  height: 100%;',
    '  z-index: 0;',
    '  display: block;',
    '  pointer-events: none;',
    '  background-color: #000103 !important;',
    '  background-image: radial-gradient(ellipse 85% 55% at 50% 42%, #072A6B 0%, #02091B 52%, #000103 100%) !important;',
    '}',
    '',
    /* Crisp, Luminous Feminine 2027 Typography */
    '.font-display, h1, h2, h3, h4 {',
    '  font-family: var(--jn-font-display) !important;',
    '  font-style: normal !important;',
    '  letter-spacing: -0.025em !important;',
    '}',
    'h1, h2 {',
    '  font-weight: 700 !important;',
    '  color: var(--jn-pearl) !important;',
    '  background: none !important;',
    '  -webkit-text-fill-color: var(--jn-pearl) !important;',
    '  filter: none !important;',
    '  text-shadow: 0 2px 22px rgba(43, 184, 255, 0.30), 0 1px 6px rgba(0, 2, 10, 0.96) !important;',
    '}',
    'h3, h4, .text-ivory {',
    '  color: var(--jn-pearl) !important;',
    '  text-shadow: 0 1px 10px rgba(0, 2, 10, 0.92);',
    '}',
    '#servicios .italic, .font-display.italic {',
    '  font-style: normal !important;',
    '  font-family: var(--jn-font-body) !important;',
    '  font-weight: 600 !important;',
    '  font-variant-numeric: tabular-nums !important;',
    '  color: var(--jn-sapphire) !important;',
    '}',
    '',
    /* 100% Solid Obsidian Header + Enlarged, Ultra-Crisp Jennifer Portrait */
    'body > div.z-30, body > div[class*="bg-dark-950"] {',
    '  background-color: var(--jn-topbar-solid) !important;',
    '  border-bottom: 1px solid var(--jn-hairline) !important;',
    '}',
    'header {',
    '  background-color: var(--jn-header-solid) !important;',
    '  border-bottom: 1px solid var(--jn-hairline-mid) !important;',
    '  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.86) !important;',
    '}',
    'header > div {',
    '  min-height: 74px !important;',
    '  height: auto !important;',
    '  padding-top: 8px !important;',
    '  padding-bottom: 8px !important;',
    '}',
    'header img {',
    '  width: 54px !important;',
    '  height: 54px !important;',
    '  min-width: 54px !important;',
    '  min-height: 54px !important;',
    '  border-radius: 9999px !important;',
    '  object-fit: cover !important;',
    '  object-position: center 18% !important;',
    '  border: 2px solid #8AD8FF !important;',
    '  box-shadow: 0 0 0 3px #02050E, 0 0 0 4.5px rgba(246, 198, 234, 0.50), 0 0 20px rgba(43, 184, 255, 0.58) !important;',
    '  filter: contrast(1.06) brightness(1.05) saturate(1.06);',
    '  image-rendering: -webkit-optimize-contrast;',
    '}',
    '@media (min-width: 640px) {',
    '  header img {',
    '    width: 60px !important;',
    '    height: 60px !important;',
    '    min-width: 60px !important;',
    '    min-height: 60px !important;',
    '  }',
    '}',
    '',
    /* Continuous 4D Flow between sections */
    'section, section#servicios, section#galeria, section#agendar, section#sobre-jeni, section#faq {',
    '  background-color: transparent !important;',
    '  border-top: 0 !important;',
    '  border-color: transparent !important;',
    '}',
    'footer {',
    '  background-color: rgba(1, 3, 10, 0.92) !important;',
    '  border-top: 1px solid var(--jn-hairline) !important;',
    '}',
    '',
    /* Soft metallic sapphire hairlines (zero harsh #ffffff borders) */
    '[class*="border-champagne"], [class*="border-white"], [class*="border-gold"], [class*="divide-champagne"] > *, [class*="divide-white"] > *, hr {',
    '  border-color: var(--jn-hairline) !important;',
    '}',
    '',
    /* High-contrast Ice Sapphire & Silver Text System */
    '.text-gold, .text-gold-light, .hover\\:text-gold:hover {',
    '  color: var(--jn-sapphire) !important;',
    '  text-shadow: 0 1px 14px rgba(0, 2, 10, 0.98), 0 0 6px rgba(0, 2, 10, 0.95);',
    '}',
    '.text-champagne, [class*="text-champagne/"] {',
    '  color: var(--jn-silver) !important;',
    '  text-shadow: 0 1px 14px rgba(0, 2, 10, 0.98), 0 0 6px rgba(0, 2, 10, 0.95);',
    '}',
    'footer p, footer span, .text-champagne\\/65, .text-champagne\\/60, .text-champagne\\/50 {',
    '  color: var(--jn-silver-muted) !important;',
    '}',
    '',
    /* PREMIUM CHROME-SAPPHIRE & ROSE-PEARL GLASS FRAMES FOR ALL NAIL PHOTOS */
    '.editorial-surface, .glass-panel, .glass-card, .nail-glow-card {',
    '  background: linear-gradient(160deg, rgba(8, 18, 42, 0.82) 0%, rgba(2, 6, 16, 0.90) 100%) !important;',
    '  border: 1px solid var(--jn-hairline-mid) !important;',
    '  border-radius: 22px !important;',
    '  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.76), 0 0 26px rgba(43, 184, 255, 0.14), inset 0 1px 0 rgba(246, 198, 234, 0.24) !important;',
    '  transition: transform 200ms var(--jn-ease-out), border-color 180ms ease, box-shadow 200ms ease !important;',
    '}',
    '.editorial-surface:hover, .glass-card:hover, .nail-glow-card:hover {',
    '  border-color: var(--jn-hairline-strong) !important;',
    '  box-shadow: 0 24px 54px rgba(0, 0, 0, 0.82), 0 0 34px rgba(56, 190, 255, 0.26), inset 0 1px 0 rgba(255, 255, 255, 0.34) !important;',
    '}',
    '',
    /* Luxury Chrome-Bezel Photo Cards in #galeriaGrid */
    '#galeriaGrid > * {',
    '  position: relative;',
    '  padding: 8px !important;',
    '  border-radius: 22px !important;',
    '  background: linear-gradient(155deg, rgba(16, 36, 74, 0.74) 0%, rgba(3, 8, 20, 0.92) 58%, rgba(28, 20, 52, 0.78) 100%) !important;',
    '  border: 1px solid rgba(162, 218, 255, 0.38) !important;',
    '  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.78), 0 0 24px rgba(43, 184, 255, 0.16), inset 0 1px 0 rgba(246, 198, 234, 0.30) !important;',
    '  transition: transform 220ms var(--jn-ease-out), border-color 180ms ease, box-shadow 220ms ease !important;',
    '  overflow: hidden;',
    '}',
    '#galeriaGrid > *:hover {',
    '  transform: translateY(-4px);',
    '  border-color: rgba(140, 224, 255, 0.86) !important;',
    '  box-shadow: 0 24px 52px rgba(0, 0, 0, 0.86), 0 0 34px rgba(56, 190, 255, 0.36), inset 0 1px 0 rgba(255, 255, 255, 0.44) !important;',
    '}',
    '#galeriaGrid > * img, section:first-of-type img:not(header img) {',
    '  border-radius: 15px !important;',
    '  border: 1px solid rgba(210, 236, 255, 0.30) !important;',
    '  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.56) !important;',
    '  filter: contrast(1.05) saturate(1.07) brightness(1.03);',
    '  transition: transform 320ms var(--jn-ease-out) !important;',
    '}',
    '#galeriaGrid > *:hover img {',
    '  transform: scale(1.04);',
    '}',
    '#galeriaGrid > * > div:last-child {',
    '  padding: 10px 6px 4px !important;',
    '}',
    '',
    '#servicios .editorial-surface > div > button, #servicios .editorial-surface .space-y-3 > *, #servicios .editorial-surface .divide-y > * {',
    '  margin-bottom: 8px;',
    '}',
    '',
    /* =========================================================================
       2027 BULLETPROOF 60 FPS DUAL-COMET ORBIT BORDER FOR "PEDIR CITA" & CTAs
       Uses real GPU-composited DOM layers (z-index 0 / 1 / 2) — NO negative
       z-index ::before hacks that clip or freeze in Chrome Android!
       Immune to MIUI/HyperOS prefers-reduced-motion throttling.
       ========================================================================= */
    '@-webkit-keyframes jnOrbitSpin {',
    '  0%   { -webkit-transform: translate3d(-50%, -50%, 0) rotate(0deg); transform: translate3d(-50%, -50%, 0) rotate(0deg); }',
    '  100% { -webkit-transform: translate3d(-50%, -50%, 0) rotate(360deg); transform: translate3d(-50%, -50%, 0) rotate(360deg); }',
    '}',
    '@keyframes jnOrbitSpin {',
    '  0%   { -webkit-transform: translate3d(-50%, -50%, 0) rotate(0deg); transform: translate3d(-50%, -50%, 0) rotate(0deg); }',
    '  100% { -webkit-transform: translate3d(-50%, -50%, 0) rotate(360deg); transform: translate3d(-50%, -50%, 0) rotate(360deg); }',
    '}',
    'button.bg-gold, a.bg-gold, .bg-gold, [class*="bg-gold/90"], [class*="from-gold"], .jn-orbit-cta {',
    '  position: relative !important;',
    '  overflow: hidden !important;',
    '  isolation: isolate !important;',
    '  background: #041026 !important;',
    '  color: #FFFFFF !important;',
    '  font-family: var(--jn-font-body) !important;',
    '  font-weight: 600 !important;',
    '  letter-spacing: 0.015em !important;',
    '  border: 0 !important;',
    '  box-shadow: 0 0 0 1px rgba(116, 210, 255, 0.28), 0 10px 28px rgba(43, 184, 255, 0.36), 0 0 18px rgba(246, 198, 234, 0.22) !important;',
    '  text-shadow: 0 1px 6px rgba(0, 4, 16, 0.92) !important;',
    '}',
    /* Disable legacy pseudo-elements once real DOM orbit layers are mounted */
    '.jn-orbit-cta::before, .jn-orbit-cta::after {',
    '  content: none !important;',
    '  display: none !important;',
    '}',
    /* Pure-CSS fallback before DOMContentLoaded finishes (zero flicker) */
    'button.bg-gold:not(.jn-orbit-cta)::before, a.bg-gold:not(.jn-orbit-cta)::before, .bg-gold:not(.jn-orbit-cta)::before, [class*="bg-gold/90"]:not(.jn-orbit-cta)::before, [class*="from-gold"]:not(.jn-orbit-cta)::before {',
    '  content: "" !important;',
    '  position: absolute !important;',
    '  top: 50% !important;',
    '  left: 50% !important;',
    '  width: 520px !important;',
    '  height: 520px !important;',
    '  z-index: 0 !important;',
    '  background: conic-gradient(from 0deg, transparent 0deg, #168CFF 35deg, #88E5FF 68deg, #FFFFFF 86deg, #F6C6EA 106deg, transparent 138deg, transparent 180deg, #168CFF 215deg, #88E5FF 248deg, #FFFFFF 266deg, #F6C6EA 286deg, transparent 318deg, transparent 360deg) !important;',
    '  -webkit-animation: jnOrbitSpin 2.6s linear infinite !important;',
    '  animation: jnOrbitSpin 2.6s linear infinite !important;',
    '  will-change: transform !important;',
    '  pointer-events: none !important;',
    '}',
    /* Real DOM GPU Spinner (z-index: 0) — dual opposing luminous comets (0deg & 180deg) */
    '.jn-orbit-beam {',
    '  position: absolute !important;',
    '  top: 50% !important;',
    '  left: 50% !important;',
    '  width: var(--jn-orbit-size, 520px) !important;',
    '  height: var(--jn-orbit-size, 520px) !important;',
    '  z-index: 0 !important;',
    '  border-radius: 50% !important;',
    '  background: conic-gradient(from 0deg, transparent 0deg, #168CFF 32deg, #7CE2FF 66deg, #FFFFFF 86deg, #F6C6EA 108deg, transparent 142deg, transparent 180deg, #168CFF 212deg, #7CE2FF 246deg, #FFFFFF 266deg, #F6C6EA 288deg, transparent 322deg, transparent 360deg) !important;',
    '  -webkit-animation: jnOrbitSpin 2.6s linear infinite !important;',
    '  animation: jnOrbitSpin 2.6s linear infinite !important;',
    '  will-change: transform !important;',
    '  pointer-events: none !important;',
    '}',
    /* Real DOM Inner Velvet Jewel Cap (z-index: 1) — leaves crisp 2px moving luminous border */
    '.jn-orbit-inner {',
    '  position: absolute !important;',
    '  inset: 2px !important;',
    '  z-index: 1 !important;',
    '  border-radius: inherit !important;',
    '  background: linear-gradient(135deg, #051128 0%, #0C3272 52%, #06132B 100%) !important;',
    '  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.34) !important;',
    '  pointer-events: none !important;',
    '}',
    /* Real DOM Foreground Label (z-index: 2) — crisp text & icons above the glowing rim */
    '.jn-orbit-label {',
    '  position: relative !important;',
    '  z-index: 2 !important;',
    '  display: inline-flex !important;',
    '  align-items: center !important;',
    '  justify-content: center !important;',
    '  gap: 0.45rem !important;',
    '  width: 100% !important;',
    '  color: #FFFFFF !important;',
    '  text-shadow: 0 1px 6px rgba(0, 4, 16, 0.92) !important;',
    '}',
    'button.bg-gold *, a.bg-gold *, .bg-gold *, .jn-orbit-cta * {',
    '  color: #FFFFFF !important;',
    '  text-shadow: 0 1px 6px rgba(0, 4, 16, 0.92) !important;',
    '}',
    'button.bg-gold:hover, a.bg-gold:hover, .jn-orbit-cta:hover {',
    '  transform: translateY(-1px);',
    '  box-shadow: 0 0 0 1px rgba(140, 224, 255, 0.50), 0 14px 34px rgba(43, 184, 255, 0.48), 0 0 24px rgba(246, 198, 234, 0.30) !important;',
    '}',
    '',
    /* Unified Secondary Buttons & Filter Pills */
    'button:not(.bg-gold):not([class*="from-gold"]):not(.jn-orbit-cta), a[class*="border"]:not(.bg-gold):not(.jn-orbit-cta) {',
    '  background-color: var(--jn-control-bg);',
    '  border-color: var(--jn-hairline-mid) !important;',
    '  font-family: var(--jn-font-body) !important;',
    '}',
    'button:not(.bg-gold):not(.jn-orbit-cta):hover, a[class*="border"]:not(.bg-gold):not(.jn-orbit-cta):hover {',
    '  border-color: var(--jn-hairline-strong) !important;',
    '}',
    '',
    /* Form Inputs, Selects & Accordions */
    'input[type="text"], input[type="date"], input[type="time"], select, textarea, details {',
    '  background-color: var(--jn-control-bg) !important;',
    '  border: 1px solid var(--jn-hairline-mid) !important;',
    '  color: var(--jn-pearl) !important;',
    '  border-radius: 14px !important;',
    '}',
    'input::placeholder, textarea::placeholder {',
    '  color: var(--jn-silver-muted) !important;',
    '}',
    'input:focus, select:focus, textarea:focus {',
    '  border-color: var(--jn-sapphire-core) !important;',
    '  box-shadow: 0 0 0 2px rgba(43, 184, 255, 0.28) !important;',
    '}',
    '',
    /* Unified Active Selection State in #agendar */
    '#agendar [class*="border-gold"], #agendar [class*="bg-gold/"] {',
    '  background-color: var(--jn-active-bg) !important;',
    '  border-color: var(--jn-hairline-strong) !important;',
    '  box-shadow: 0 0 0 1px rgba(132, 216, 255, 0.38), 0 10px 24px rgba(8, 82, 188, 0.34) !important;',
    '}',
    '#agendar [class*="bg-gold/"] *, #agendar [class*="border-gold"] .text-gold {',
    '  color: var(--jn-pearl) !important;',
    '}',
    '',
    /* Crisp Tabular Total Readout */
    '#totalMonto {',
    '  font-family: var(--jn-font-display) !important;',
    '  font-weight: 700 !important;',
    '  color: var(--jn-sapphire) !important;',
    '  font-variant-numeric: tabular-nums !important;',
    '  text-shadow: 0 2px 20px rgba(43, 184, 255, 0.45) !important;',
    '}',
    '',
    /* Custom Checkboxes -> Ice Sapphire */
    '.custom-check {',
    '  border-color: var(--jn-hairline-mid) !important;',
    '  background-color: var(--jn-obsidian) !important;',
    '}',
    '.custom-check:checked {',
    '  background-color: var(--jn-sapphire-core) !important;',
    '  border-color: var(--jn-sapphire) !important;',
    '}',
    '',
    /* Mobile Sticky Bottom Bar */
    '.fixed.bottom-0, nav.fixed.bottom-0, div.fixed.bottom-0 {',
    '  background-color: var(--jn-header-solid) !important;',
    '  border-top: 1px solid var(--jn-hairline-mid) !important;',
    '}',
    '',
    /* Emil Kowalski Tactile Micro-Interactions */
    'button, a[href], .pressable, summary {',
    '  transition: transform 140ms var(--jn-ease-out), opacity 150ms ease, border-color 180ms ease, background-color 180ms ease;',
    '}',
    'button:active, a[href]:active, .pressable:active, #galeriaGrid > *:active {',
    '  transform: scale(0.97) !important;',
    '}',
    'button:focus-visible, a:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible, summary:focus-visible {',
    '  outline: 2px solid var(--jn-sapphire) !important;',
    '  outline-offset: 2px !important;',
    '}',
    '::-webkit-scrollbar-track { background: #000103 !important; }',
    '::-webkit-scrollbar-thumb { background: rgba(116, 210, 255, 0.36) !important; }',
    /* Respect reduced-motion on hover/layout transitions, but keep signature CTA orbit gently alive on Android */
    '@media (prefers-reduced-motion: reduce) {',
    '  .jn-orbit-beam {',
    '    -webkit-animation-duration: 3.8s !important;',
    '    animation-duration: 3.8s !important;',
    '  }',
    '  .editorial-surface, .glass-card, .glass-panel, .nail-glow-card, #galeriaGrid > *, #galeriaGrid > * img {',
    '    transition: none !important;',
    '  }',
    '}'
  ].join('\n');
  if (head) head.appendChild(style);

  // 2. Mount Bulletproof Real-DOM Dual-Comet Orbit Borders on "Pedir cita" & WhatsApp CTAs
  function enhanceCtaBorders() {
    var candidates = document.querySelectorAll('button, a');

    for (var i = 0; i < candidates.length; i++) {
      var el = candidates[i];
      if (!el || el.classList.contains('jn-orbit-cta')) continue;

      var cls = (el.className && typeof el.className === 'string') ? el.className : '';
      var txt = (el.textContent || '').toLowerCase();
      var onclickAttr = (el.getAttribute('onclick') || '').toLowerCase();
      var hrefAttr = (el.getAttribute('href') || '').toLowerCase();

      var isGoldCta = /\bbg-gold\b|bg-gold\/90|from-gold/.test(cls);
      var isBookingCta =
        txt.indexOf('pedir cita') !== -1 ||
        txt.indexOf('agendar cita') !== -1 ||
        txt.indexOf('confirmar y enviar al whatsapp') !== -1 ||
        txt.indexOf('escribirme al whatsapp') !== -1 ||
        onclickAttr.indexOf('enviarwhatsapp') !== -1;

      if (!isGoldCta && !isBookingCta) continue;
      if (hrefAttr === '#servicios' || hrefAttr === '#galeria' || hrefAttr === '#sobre-jeni' || hrefAttr === '#faq') continue;

      el.classList.add('jn-orbit-cta');

      // Wrap existing child nodes in foreground label (z-index: 2) without breaking event listeners
      var label = document.createElement('span');
      label.className = 'jn-orbit-label';
      while (el.firstChild) {
        label.appendChild(el.firstChild);
      }

      var beam = document.createElement('span');
      beam.className = 'jn-orbit-beam';
      beam.setAttribute('aria-hidden', 'true');

      var inner = document.createElement('span');
      inner.className = 'jn-orbit-inner';
      inner.setAttribute('aria-hidden', 'true');

      el.appendChild(beam);
      el.appendChild(inner);
      el.appendChild(label);
    }

    function syncOrbitSizes() {
      var all = document.querySelectorAll('.jn-orbit-cta');
      for (var k = 0; k < all.length; k++) {
        var btn = all[k];
        var w = btn.offsetWidth || 260;
        var h = btn.offsetHeight || 48;
        var diag = Math.ceil(Math.sqrt(w * w + h * h) * 1.18);
        btn.style.setProperty('--jn-orbit-size', Math.max(240, diag) + 'px');
      }
    }

    syncOrbitSizes();
    setTimeout(syncOrbitSizes, 350);
    if (!window.__JN_ORBIT_RESIZE_BOUND__) {
      window.__JN_ORBIT_RESIZE_BOUND__ = true;
      window.addEventListener('resize', syncOrbitSizes, { passive: true });
    }
  }

  // 3. Mount Engine & Physically Remove Legacy Background Nodes (stops old 2D canvas loop on low-end phones)
  function bootEngine() {
    if (!document.body) return;

    enhanceCtaBorders();

    var legacyNodes = document.querySelectorAll('.galaxy-stage, #catEyeCanvas, #catEyeBeam, #nebulaParallax, .aurora-bg');
    for (var i = 0; i < legacyNodes.length; i++) {
      if (legacyNodes[i] && legacyNodes[i].parentNode) {
        legacyNodes[i].parentNode.removeChild(legacyNodes[i]);
      }
    }

    var canvas = document.getElementById('jeninails-obsidian-4d');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'jeninails-obsidian-4d';
      canvas.setAttribute('aria-hidden', 'true');
      document.body.insertBefore(canvas, document.body.firstChild);
    }

    var state = {
      scrollTarget: 0.16,
      scrollSmooth: 0.16,
      scrollVel: 0,
      ptrX: 0,
      ptrY: 0,
      ptrSmoothX: 0,
      ptrSmoothY: 0,
      paused: false,
      rafId: 0
    };

    function getScrollNorm() {
      var maxS = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      return Math.min(1, Math.max(0, window.scrollY / maxS));
    }

    window.addEventListener('scroll', function () {
      state.scrollTarget = getScrollNorm();
    }, { passive: true });

    window.addEventListener('pointermove', function (e) {
      state.ptrX = (e.clientX / Math.max(1, window.innerWidth)) * 2 - 1;
      state.ptrY = -((e.clientY / Math.max(1, window.innerHeight)) * 2 - 1);
    }, { passive: true });

    window.addEventListener('touchmove', function (e) {
      if (e.touches && e.touches.length > 0) {
        var t = e.touches[0];
        state.ptrX = (t.clientX / Math.max(1, window.innerWidth)) * 2 - 1;
        state.ptrY = -((t.clientY / Math.max(1, window.innerHeight)) * 2 - 1);
      }
    }, { passive: true });

    document.addEventListener('visibilitychange', function () {
      state.paused = document.hidden;
    });

    function init2DFallback() {
      var ctx = canvas.getContext('2d');
      if (!ctx) return;
      function resize() {
        canvas.width = Math.max(1, window.innerWidth);
        canvas.height = Math.max(1, window.innerHeight);
      }
      resize();
      window.addEventListener('resize', resize, { passive: true });
      function draw() {
        state.rafId = requestAnimationFrame(draw);
        if (state.paused) return;
        var s = getScrollNorm();
        var w = canvas.width, h = canvas.height;
        ctx.fillStyle = '#000103';
        ctx.fillRect(0, 0, w, h);
        var g = ctx.createRadialGradient(w * 0.5, h * (0.25 + s * 0.5), 12, w * 0.5, h * (0.25 + s * 0.5), Math.max(w, h) * 0.48);
        g.addColorStop(0, 'rgba(92, 208, 255, 0.92)');
        g.addColorStop(0.28, 'rgba(18, 108, 224, 0.65)');
        g.addColorStop(0.65, 'rgba(4, 22, 68, 0.22)');
        g.addColorStop(1, 'rgba(0, 1, 3, 0)');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }
      draw();
    }

    function initWebGL() {
      if (state.rafId) {
        cancelAnimationFrame(state.rafId);
        state.rafId = 0;
      }

      var gl = canvas.getContext('webgl', {
        alpha: false,
        antialias: false,
        depth: false,
        stencil: false,
        preserveDrawingBuffer: true,
        powerPreference: 'high-performance'
      });
      if (!gl) {
        init2DFallback();
        return;
      }

      gl.clearColor(0.001, 0.002, 0.006, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      var vertSrc = [
        'attribute vec2 aPos;',
        'varying vec2 vUv;',
        'void main() {',
        '  vUv = aPos * 0.5 + 0.5;',
        '  gl_Position = vec4(aPos, 0.0, 1.0);',
        '}'
      ].join('\n');

      var fragSrc = [
        'precision highp float;',
        'varying vec2 vUv;',
        'uniform vec2 uRes;',
        'uniform float uTime;',
        'uniform float uScroll;',
        'uniform float uVel;',
        'uniform vec2 uPtr;',
        '',
        'float hash21(vec2 p) {',
        '  p = fract(p * vec2(234.34, 435.345));',
        '  p += dot(p, p + 34.23);',
        '  return fract(p.x * p.y);',
        '}',
        '',
        'float magWave(vec2 p, float t) {',
        '  float w1 = sin(p.x * 2.1 + p.y * 1.4 + t * 0.65);',
        '  float w2 = cos(p.x * 1.3 - p.y * 2.4 - t * 0.52);',
        '  float w3 = sin((p.x + p.y) * 3.1 - t * 0.38) * 0.5;',
        '  return (w1 + w2 + w3) * 0.38;',
        '}',
        '',
        'float velvetPowder(vec2 uv, float density, float angleShift) {',
        '  vec2 p = uv * density;',
        '  vec2 id = floor(p);',
        '  vec2 f = fract(p);',
        '  float best = 0.0;',
        '  for (int y = 0; y <= 1; y++) {',
        '    for (int x = 0; x <= 1; x++) {',
        '      vec2 cell = id + vec2(float(x), float(y));',
        '      float r1 = hash21(cell);',
        '      float r2 = hash21(cell + 41.17);',
        '      vec2 offset = vec2(r1, r2) * 0.82 + 0.09;',
        '      float d = length(f - vec2(float(x), float(y)) - offset + 0.5);',
        '      float flake = smoothstep(0.42, 0.04, d);',
        '      float glint = 0.5 + 0.5 * sin(r1 * 6.28318 + angleShift * (1.1 + r2 * 2.3));',
        '      best = max(best, flake * (0.38 + 0.62 * pow(glint, 2.4)));',
        '    }',
        '  }',
        '  return best;',
        '}',
        '',
        'void main() {',
        '  float aspect = uRes.x / max(1.0, uRes.y);',
        '  vec2 p = (vUv - 0.5) * vec2(aspect, 1.0);',
        '  float s = uScroll;',
        '  float v = clamp(uVel, -2.0, 2.0);',
        '  float wPhase = uTime * 0.42 + s * 4.2 + v * 0.45;',
        '',
        '  vec2 domeXY = p * vec2(0.72, 0.94);',
        '  float domeZ = sqrt(max(0.06, 1.0 - dot(domeXY, domeXY) * 0.58));',
        '',
        '  float tiltAngle = -0.52 + s * 1.65 + uPtr.x * 0.24;',
        '  float ca = cos(tiltAngle);',
        '  float sa = sin(tiltAngle);',
        '  mat2 rot = mat2(ca, -sa, sa, ca);',
        '  vec2 q = rot * p;',
        '  float bend = magWave(p * 1.15 + vec2(0.0, s * 0.8), wPhase) * (0.11 + abs(v) * 0.04);',
        '',
        '  float shiftY = -0.34 + s * 0.72 + uPtr.y * 0.14;',
        '  float shiftX = sin(s * 3.14159) * 0.14 - uPtr.x * 0.12;',
        '  vec2 eyeCoord = vec2((q.x - shiftX) * 0.72, (q.y - shiftY + bend) * 1.85);',
        '  float rEye = length(eyeCoord);',
        '  float crescentCut = smoothstep(-0.32, 0.36, q.y - shiftY + bend * 0.8 + 0.16);',
        '',
        '  float penumbra = exp(-rEye * rEye * 2.4) * (0.45 + 0.55 * crescentCut);',
        '  float velvetBody = exp(-rEye * rEye * 6.2) * (0.35 + 0.65 * crescentCut);',
        '  float razorSlit = exp(-pow((q.y - shiftY + bend) * 8.2, 2.0)) * exp(-pow((q.x - shiftX) * 1.35, 2.0));',
        '  float edgeArc = pow(1.0 - domeZ, 2.6) * exp(-pow((p.y + 0.45 - s * 0.92) * 2.6, 2.0));',
        '  float magField = clamp(penumbra * 0.78 + velvetBody * 1.05 + razorSlit * 0.65 + edgeArc * 0.52, 0.0, 1.45);',
        '',
        '  vec2 parallaxDeep = vec2(uPtr.x * 0.022, s * 0.24 + uPtr.y * 0.022);',
        '  vec2 parallaxNear = vec2(uPtr.x * 0.052, s * 0.52 + uPtr.y * 0.052);',
        '  mat2 rotA = mat2(0.8414, -0.5403, 0.5403, 0.8414);',
        '  mat2 rotB = mat2(-0.4161, -0.9093, 0.9093, -0.4161);',
        '  float powderDeep = velvetPowder(rotA * (p + parallaxDeep) + vec2(bend * 0.08), 155.0, wPhase * 1.1);',
        '  float powderNear = velvetPowder(rotB * (p + parallaxNear) - vec2(bend * 0.06), 275.0, wPhase * 1.65);',
        '  float silkyTexture = 0.62 + 0.34 * powderDeep + 0.42 * powderNear;',
        '  float microGlint = pow(powderNear * powderDeep, 1.85) * 2.1;',
        '',
        '  vec3 cObsidian = vec3(0.001, 0.002, 0.005);',
        '  vec3 cMidnight = vec3(0.005, 0.048, 0.195);',
        '  vec3 cSapphire = vec3(0.020, 0.235, 0.710);',
        '  vec3 cCobalt   = vec3(0.095, 0.595, 0.990);',
        '  vec3 cIce      = vec3(0.760, 0.955, 1.000);',
        '',
        '  float energy = magField * silkyTexture;',
        '  vec3 col = cObsidian;',
        '  col = mix(col, cMidnight, smoothstep(0.06, 0.32, energy));',
        '  col = mix(col, cSapphire, smoothstep(0.24, 0.64, energy));',
        '  col = mix(col, cCobalt,   smoothstep(0.56, 1.02, energy + razorSlit * 0.32));',
        '  col += cIce * (razorSlit * 0.26 + microGlint * velvetBody * 0.72);',
        '',
        '  float specArc = (p.x * 0.82 - p.y * 0.46) - (0.36 - s * 0.70 + uPtr.x * 0.16);',
        '  float studioStrip = exp(-pow(specArc * 28.0, 2.0)) * exp(-pow((p.y + 0.04 - s * 0.24) * 1.65, 2.0));',
        '  float fresnelRim = pow(1.0 - domeZ, 4.6) * 0.16;',
        '  col += vec3(0.84, 0.93, 1.0) * (studioStrip * 0.22 + fresnelRim * (0.20 + 0.80 * magField));',
        '',
        '  float vig = smoothstep(1.32, 0.22, length(p * vec2(0.84, 0.96)));',
        '  col *= (0.14 + 0.90 * vig);',
        '  col = col / (1.0 + col * 0.22);',
        '  gl_FragColor = vec4(col, 1.0);',
        '}'
      ].join('\n');

      function compile(type, src) {
        var sh = gl.createShader(type);
        gl.shaderSource(sh, src);
        gl.compileShader(sh);
        return gl.getShaderParameter(sh, gl.COMPILE_STATUS) ? sh : null;
      }

      var vs = compile(gl.VERTEX_SHADER, vertSrc);
      var fs = compile(gl.FRAGMENT_SHADER, fragSrc);
      if (!vs || !fs) {
        init2DFallback();
        return;
      }

      var prog = gl.createProgram();
      gl.attachShader(prog, vs);
      gl.attachShader(prog, fs);
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
        init2DFallback();
        return;
      }
      gl.useProgram(prog);

      var buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      var aPos = gl.getAttribLocation(prog, 'aPos');
      gl.enableVertexAttribArray(aPos);
      gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

      var uRes = gl.getUniformLocation(prog, 'uRes');
      var uTime = gl.getUniformLocation(prog, 'uTime');
      var uScroll = gl.getUniformLocation(prog, 'uScroll');
      var uVel = gl.getUniformLocation(prog, 'uVel');
      var uPtr = gl.getUniformLocation(prog, 'uPtr');

      var renderScale = Math.min(window.devicePixelRatio || 1, 1.5);
      function applySize() {
        var w = Math.max(1, Math.floor(window.innerWidth * renderScale));
        var h = Math.max(1, Math.floor(window.innerHeight * renderScale));
        if (canvas.width !== w || canvas.height !== h) {
          canvas.width = w;
          canvas.height = h;
          gl.viewport(0, 0, w, h);
        }
      }
      applySize();
      window.addEventListener('resize', applySize, { passive: true });

      function drawNow(elapsedSec) {
        if (gl.isContextLost && gl.isContextLost()) return;
        gl.uniform2f(uRes, canvas.width, canvas.height);
        gl.uniform1f(uTime, elapsedSec);
        gl.uniform1f(uScroll, state.scrollSmooth);
        gl.uniform1f(uVel, state.scrollVel);
        gl.uniform2f(uPtr, state.ptrSmoothX, state.ptrSmoothY);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
      }
      drawNow(0);

      var lastMs = performance.now();
      var elapsed = 0;
      var frames = 0;
      var fpsWin = performance.now();
      var slowStreak = 0;

      function loop(now) {
        state.rafId = requestAnimationFrame(loop);
        if (state.paused) {
          lastMs = now;
          return;
        }
        var dtMs = now - lastMs;
        lastMs = now;
        var dt = Math.min(0.05, Math.max(0.001, dtMs / 1000));
        elapsed += dt;

        var damp = 1 - Math.exp(-8.5 * dt);
        var prev = state.scrollSmooth;
        state.scrollSmooth += (state.scrollTarget - state.scrollSmooth) * damp;
        var instVel = (state.scrollSmooth - prev) / dt;
        state.scrollVel += (instVel - state.scrollVel) * (1 - Math.exp(-10 * dt));

        var pDamp = 1 - Math.exp(-6.5 * dt);
        state.ptrSmoothX += (state.ptrX - state.ptrSmoothX) * pDamp;
        state.ptrSmoothY += (state.ptrY - state.ptrSmoothY) * pDamp;

        drawNow(elapsed);

        frames++;
        var span = now - fpsWin;
        if (span >= 600) {
          var fps = Math.round((frames * 1000) / span);
          if (fps < 48 && renderScale > 0.72) {
            slowStreak++;
            if (slowStreak >= 2) {
              renderScale = Math.max(0.72, renderScale - 0.18);
              applySize();
              slowStreak = 0;
            }
          } else {
            slowStreak = 0;
          }
          frames = 0;
          fpsWin = now;
        }
      }

      state.rafId = requestAnimationFrame(loop);
    }

    canvas.addEventListener('webglcontextlost', function (e) {
      e.preventDefault();
      if (state.rafId) {
        cancelAnimationFrame(state.rafId);
        state.rafId = 0;
      }
    }, false);

    canvas.addEventListener('webglcontextrestored', function () {
      initWebGL();
    }, false);

    window.addEventListener('pageshow', function () {
      state.paused = false;
      state.scrollTarget = getScrollNorm();
      enhanceCtaBorders();
      initWebGL();
    });

    initWebGL();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootEngine);
  } else {
    bootEngine();
  }
})();
