/*
 * JeniNails — 2027 Feminine Haute-Beauty Obsidian & Sapphire Cat-Eye 4D Atelier
 * - Zero white-flash guarantee: instant obsidian CSS backdrop + synchronous Frame 1 + WebGL context-lost/pageshow recovery
 * - Larger, ultra-crisp circular portrait of Jennifer in header
 * - GPU-only animated moving sapphire-pearl border around "Pedir cita" & primary CTAs
 * - 60 FPS native WebGL 1.0 (0 KB external JS libraries) with adaptive low-end Android scaling
 */
(function () {
  'use strict';

  if (window.__JENINAILS_4D_2027__) return;
  window.__JENINAILS_4D_2027__ = true;

  // 0. Non-blocking load of modern 2027 fashion/beauty fonts (Syne + Outfit)
  if (!document.getElementById('jn-2027-fonts')) {
    var fontLink = document.createElement('link');
    fontLink.id = 'jn-2027-fonts';
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap';
    document.head.appendChild(fontLink);
  }

  // 1. Inject 2027 Feminine Luxury Obsidian-Sapphire & Animated-Border CSS (Zero-Damage)
  var style = document.createElement('style');
  style.id = 'jeninails-2027-obsidian-theme';
  style.textContent = [
    ':root {',
    '  --jn-obsidian: #000103;',
    '  --jn-header-solid: #02050E;',
    '  --jn-topbar-solid: #010308;',
    '  --jn-pearl: #F9FCFF;',
    '  --jn-silver: rgba(226, 238, 255, 0.90);',
    '  --jn-silver-muted: rgba(190, 214, 245, 0.78);',
    '  --jn-sapphire: #74D2FF;',
    '  --jn-sapphire-core: #2BB8FF;',
    '  --jn-rose-pearl: #F4C8E8;',
    '  --jn-hairline: rgba(162, 212, 255, 0.18);',
    '  --jn-hairline-mid: rgba(162, 212, 255, 0.34);',
    '  --jn-hairline-strong: rgba(132, 216, 255, 0.78);',
    '  --jn-glass: rgba(3, 8, 20, 0.74);',
    '  --jn-glass-hover: rgba(5, 14, 34, 0.88);',
    '  --jn-control-bg: rgba(5, 12, 28, 0.86);',
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
    /* Retire legacy galaxy/aurora layers completely */
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
    /* Crisp, Luminous Feminine 2027 Typography (no muddy grey drop-shadow!) */
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
    '  text-shadow: 0 2px 22px rgba(43, 184, 255, 0.28), 0 1px 6px rgba(0, 2, 10, 0.95) !important;',
    '}',
    'h3, h4, .text-ivory {',
    '  color: var(--jn-pearl) !important;',
    '  text-shadow: 0 1px 10px rgba(0, 2, 10, 0.90);',
    '}',
    '#servicios .italic, .font-display.italic {',
    '  font-style: normal !important;',
    '  font-family: var(--jn-font-body) !important;',
    '  font-weight: 600 !important;',
    '  font-variant-numeric: tabular-nums !important;',
    '  color: var(--jn-sapphire) !important;',
    '}',
    '',
    /* 100% Solid Obsidian Header + LARGER, ULTRA-CRISP JENNIFER PORTRAIT */
    'body > div.z-30, body > div[class*="bg-dark-950"] {',
    '  background-color: var(--jn-topbar-solid) !important;',
    '  border-bottom: 1px solid var(--jn-hairline) !important;',
    '}',
    'header {',
    '  background-color: var(--jn-header-solid) !important;',
    '  border-bottom: 1px solid var(--jn-hairline-mid) !important;',
    '  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.84) !important;',
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
    '  box-shadow: 0 0 0 3px #02050E, 0 0 0 4.5px rgba(244, 200, 232, 0.45), 0 0 20px rgba(43, 184, 255, 0.55) !important;',
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
    '  text-shadow: 0 1px 12px rgba(0, 2, 10, 0.95);',
    '}',
    '.text-champagne, [class*="text-champagne/"] {',
    '  color: var(--jn-silver) !important;',
    '  text-shadow: 0 1px 10px rgba(0, 2, 10, 0.92);',
    '}',
    'footer p, footer span, .text-champagne\\/65, .text-champagne\\/60, .text-champagne\\/50 {',
    '  color: var(--jn-silver-muted) !important;',
    '}',
    '',
    /* PREMIUM CHROME-SAPPHIRE & ROSE-PEARL GLASS FRAMES FOR ALL NAIL PHOTOS */
    '.editorial-surface, .glass-panel, .glass-card, .nail-glow-card {',
    '  background: linear-gradient(160deg, rgba(8, 18, 42, 0.80) 0%, rgba(2, 6, 16, 0.88) 100%) !important;',
    '  border: 1px solid var(--jn-hairline-mid) !important;',
    '  border-radius: 22px !important;',
    '  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.74), 0 0 26px rgba(43, 184, 255, 0.14), inset 0 1px 0 rgba(244, 200, 232, 0.22) !important;',
    '  transition: transform 200ms var(--jn-ease-out), border-color 180ms ease, box-shadow 200ms ease !important;',
    '}',
    '.editorial-surface:hover, .glass-card:hover, .nail-glow-card:hover {',
    '  border-color: var(--jn-hairline-strong) !important;',
    '  box-shadow: 0 24px 54px rgba(0, 0, 0, 0.80), 0 0 34px rgba(56, 190, 255, 0.24), inset 0 1px 0 rgba(255, 255, 255, 0.32) !important;',
    '}',
    '',
    /* Luxury Chrome-Bezel Photo Cards in #galeriaGrid */
    '#galeriaGrid > * {',
    '  position: relative;',
    '  padding: 8px !important;',
    '  border-radius: 22px !important;',
    '  background: linear-gradient(155deg, rgba(16, 36, 74, 0.72) 0%, rgba(3, 8, 20, 0.92) 58%, rgba(28, 20, 52, 0.76) 100%) !important;',
    '  border: 1px solid rgba(162, 218, 255, 0.36) !important;',
    '  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.78), 0 0 24px rgba(43, 184, 255, 0.16), inset 0 1px 0 rgba(244, 200, 232, 0.30) !important;',
    '  transition: transform 220ms var(--jn-ease-out), border-color 180ms ease, box-shadow 220ms ease !important;',
    '  overflow: hidden;',
    '}',
    '#galeriaGrid > *:hover {',
    '  transform: translateY(-4px);',
    '  border-color: rgba(140, 224, 255, 0.84) !important;',
    '  box-shadow: 0 24px 52px rgba(0, 0, 0, 0.86), 0 0 34px rgba(56, 190, 255, 0.34), inset 0 1px 0 rgba(255, 255, 255, 0.44) !important;',
    '}',
    '#galeriaGrid > * img, section:first-of-type img:not(header img) {',
    '  border-radius: 15px !important;',
    '  border: 1px solid rgba(210, 236, 255, 0.28) !important;',
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
       2027 ANIMATED MOVING LUXURY BORDER FOR "PEDIR CITA" & PRIMARY CTA BUTTONS
       Pure GPU transform: rotate(360deg) — 60 FPS even on low-end Android
       ========================================================================= */
    '@keyframes jnBorderOrbit {',
    '  0%   { transform: translate(-50%, -50%) rotate(0deg); }',
    '  100% { transform: translate(-50%, -50%) rotate(360deg); }',
    '}',
    'button.bg-gold, a.bg-gold, .bg-gold, [class*="bg-gold/90"], [class*="from-gold"] {',
    '  position: relative !important;',
    '  z-index: 1 !important;',
    '  overflow: hidden !important;',
    '  isolation: isolate !important;',
    '  background: linear-gradient(135deg, #061530 0%, #0C2F6B 50%, #071630 100%) !important;',
    '  color: #FFFFFF !important;',
    '  font-family: var(--jn-font-body) !important;',
    '  font-weight: 600 !important;',
    '  letter-spacing: 0.01em !important;',
    '  border: 1px solid transparent !important;',
    '  box-shadow: 0 10px 28px rgba(43, 184, 255, 0.34), 0 0 18px rgba(244, 200, 232, 0.16) !important;',
    '  text-shadow: 0 1px 6px rgba(0, 4, 16, 0.8) !important;',
    '}',
    /* Rotating luminous sapphire + pearl-rose orbit border */
    'button.bg-gold::before, a.bg-gold::before, .bg-gold::before, [class*="bg-gold/90"]::before, [class*="from-gold"]::before {',
    '  content: "";',
    '  position: absolute;',
    '  top: 50%;',
    '  left: 50%;',
    '  width: 260%;',
    '  height: 260%;',
    '  min-width: 220px;',
    '  min-height: 220px;',
    '  z-index: -2;',
    '  background: conic-gradient(from 0deg, transparent 0deg, #2BB8FF 55deg, #FFFFFF 95deg, #F4C8E8 135deg, transparent 190deg, #38BEFF 260deg, #FFFFFF 300deg, transparent 360deg);',
    '  animation: jnBorderOrbit 3.4s linear infinite;',
    '  will-change: transform;',
    '  pointer-events: none;',
    '}',
    /* Inner velvet sapphire-obsidian jewel cap (leaves crisp 2px animated moving border) */
    'button.bg-gold::after, a.bg-gold::after, .bg-gold::after, [class*="bg-gold/90"]::after, [class*="from-gold"]::after {',
    '  content: "";',
    '  position: absolute;',
    '  inset: 2px;',
    '  z-index: -1;',
    '  border-radius: inherit;',
    '  background: linear-gradient(135deg, #06142C 0%, #0D3474 48%, #07142C 100%);',
    '  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.28);',
    '  pointer-events: none;',
    '}',
    'button.bg-gold *, a.bg-gold *, .bg-gold * {',
    '  color: #FFFFFF !important;',
    '  text-shadow: 0 1px 6px rgba(0, 4, 16, 0.8) !important;',
    '}',
    'button.bg-gold:hover, a.bg-gold:hover {',
    '  transform: translateY(-1px);',
    '  box-shadow: 0 14px 34px rgba(43, 184, 255, 0.46), 0 0 22px rgba(244, 200, 232, 0.26) !important;',
    '}',
    '',
    /* Unified Secondary Buttons & Filter Pills */
    'button:not(.bg-gold):not([class*="from-gold"]), a[class*="border"]:not(.bg-gold) {',
    '  background-color: var(--jn-control-bg);',
    '  border-color: var(--jn-hairline-mid) !important;',
    '  font-family: var(--jn-font-body) !important;',
    '}',
    'button:not(.bg-gold):hover, a[class*="border"]:not(.bg-gold):hover {',
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
    '@media (prefers-reduced-motion: reduce) {',
    '  button.bg-gold::before, a.bg-gold::before, .bg-gold::before, [class*="bg-gold/90"]::before, [class*="from-gold"]::before {',
    '    animation: none !important;',
    '  }',
    '  button, a[href], .pressable, summary, .editorial-surface, .glass-card, .glass-panel, .nail-glow-card, #galeriaGrid > *, #galeriaGrid > * img {',
    '    transition: none !important;',
    '  }',
    '}'
  ].join('\n');
  document.head.appendChild(style);

  // 2. Mount Full-Bleed Native WebGL 1.0 Canvas with Zero-White-Flash & bfcache Recovery
  var canvas = document.createElement('canvas');
  canvas.id = 'jeninails-obsidian-4d';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.insertBefore(canvas, document.body.firstChild);

  var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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

    // Immediate obsidian clear so Android Chrome NEVER flashes white before shader compile
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

    // Synchronous Frame 1 paint (eliminates white flash on first mobile entry!)
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
      if (!reducedMotion) elapsed += dt;

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

  // Recover seamlessly if Android Chrome pauses/drops WebGL or restores from bfcache
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
    initWebGL();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWebGL);
  } else {
    initWebGL();
  }
})();
