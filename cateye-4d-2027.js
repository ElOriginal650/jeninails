/*
 * JeniNails — Obsidian Sapphire Magnetic Cat-Eye 4D Engine (2027 Luxury Edition)
 * Zero external dependencies (0 KB CDN), 60 FPS native WebGL 1.0 with adaptive mobile GPU scaling,
 * plus Emil Design Engineering tactile micro-interactions.
 */
(function () {
  'use strict';

  if (window.__JENINAILS_4D_2027__) return;
  window.__JENINAILS_4D_2027__ = true;

  // 1. Inject 2027 Luxury Obsidian-Sapphire CSS + Emil Kowalski Micro-Interactions (Zero-Damage)
  var style = document.createElement('style');
  style.id = 'jeninails-2027-obsidian-theme';
  style.textContent = [
    ':root {',
    '  --jn-obsidian: #000103;',
    '  --jn-ink: #f2f7ff;',
    '  --jn-ink-soft: rgba(210, 232, 255, 0.78);',
    '  --jn-sapphire: #38beff;',
    '  --jn-hairline: rgba(116, 198, 255, 0.20);',
    '  --jn-hairline-hover: rgba(132, 214, 255, 0.46);',
    '  --jn-glass: rgba(2, 6, 16, 0.56);',
    '  --jn-glass-strong: rgba(3, 9, 24, 0.74);',
    '  --jn-bar: rgba(2, 5, 14, 0.76);',
    '  --jn-ease-out: cubic-bezier(0.23, 1, 0.32, 1);',
    '}',
    'html, body {',
    '  background-color: var(--jn-obsidian) !important;',
    '  overflow-x: clip !important;',
    '}',
    /* Completely retire legacy galaxy/aurora layers so they NEVER cover the 4D WebGL canvas */
    '.galaxy-stage, #nebulaParallax, .nebula-layer, .nebula-cloud, .nebula-1, .nebula-2, .nebula-3, .velvet-grain, .silk-bg, .silk-veil, .aurora-bg, .aurora-blob, #catEyeBeam, #catEyeCanvas {',
    '  display: none !important;',
    '  visibility: hidden !important;',
    '  opacity: 0 !important;',
    '  pointer-events: none !important;',
    '}',
    '#jeninails-obsidian-4d {',
    '  position: fixed;',
    '  inset: 0;',
    '  width: 100%;',
    '  height: 100%;',
    '  z-index: 0;',
    '  display: block;',
    '  pointer-events: none;',
    '}',
    /* Let sections breathe cleanly over the living 4D obsidian-sapphire magnetic gel */
    'section#servicios, section#galeria, section#agendar, section#sobre-jeni, section#faq {',
    '  background-color: transparent !important;',
    '  border-top-color: var(--jn-hairline) !important;',
    '}',
    'header {',
    '  background-color: var(--jn-bar) !important;',
    '  border-bottom-color: var(--jn-hairline) !important;',
    '}',
    'footer {',
    '  background-color: rgba(1, 3, 9, 0.72) !important;',
    '  border-top-color: var(--jn-hairline) !important;',
    '}',
    /* Luxury Obsidian Glass Surfaces (matches actual .editorial-surface class in JeniNails) */
    '.editorial-surface, .glass-panel, .glass-card, .nail-glow-card {',
    '  background-color: var(--jn-glass) !important;',
    '  border-color: var(--jn-hairline) !important;',
    '  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.56), inset 0 1px 0 rgba(185, 228, 255, 0.09) !important;',
    '  transition: transform 200ms var(--jn-ease-out), border-color 180ms ease, background-color 180ms ease !important;',
    '}',
    '.editorial-surface:hover, .glass-card:hover, .nail-glow-card:hover {',
    '  border-color: var(--jn-hairline-hover) !important;',
    '  background-color: var(--jn-glass-strong) !important;',
    '}',
    /* Emil Kowalski tactile button press discipline */
    'button, a[href], .pressable {',
    '  transition: transform 150ms var(--jn-ease-out), opacity 150ms ease, border-color 180ms ease, background-color 180ms ease;',
    '}',
    'button:active, a[href]:active, .pressable:active {',
    '  transform: scale(0.97) !important;',
    '}',
    'button:focus-visible, a:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible {',
    '  outline: 2px solid var(--jn-sapphire) !important;',
    '  outline-offset: 2px !important;',
    '}',
    '::-webkit-scrollbar-track { background: #000103 !important; }',
    '::-webkit-scrollbar-thumb { background: rgba(56, 190, 255, 0.32) !important; }',
    '@media (prefers-reduced-motion: reduce) {',
    '  button, a[href], .pressable, .editorial-surface, .glass-card, .glass-panel, .nail-glow-card {',
    '    transition: none !important;',
    '  }',
    '}'
  ].join('\n');
  document.head.appendChild(style);

  // 2. Mount Full-Bleed Native WebGL 1.0 Canvas
  var canvas = document.createElement('canvas');
  canvas.id = 'jeninails-obsidian-4d';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.insertBefore(canvas, document.body.firstChild);

  var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var state = {
    scrollTarget: 0.14,
    scrollSmooth: 0.14,
    scrollVel: 0,
    ptrX: 0,
    ptrY: 0,
    ptrSmoothX: 0,
    ptrSmoothY: 0,
    paused: false
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
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });
    function draw() {
      requestAnimationFrame(draw);
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
    var gl = canvas.getContext('webgl', {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      preserveDrawingBuffer: false,
      powerPreference: 'high-performance'
    });
    if (!gl) {
      init2DFallback();
      return;
    }

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
      '  col += vec3(0.82, 0.94, 1.0) * (studioStrip * 0.22 + fresnelRim * (0.20 + 0.80 * magField));',
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

    var lastMs = performance.now();
    var elapsed = 0;
    var frames = 0;
    var fpsWin = performance.now();
    var slowStreak = 0;

    function loop(now) {
      requestAnimationFrame(loop);
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

      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, elapsed);
      gl.uniform1f(uScroll, state.scrollSmooth);
      gl.uniform1f(uVel, state.scrollVel);
      gl.uniform2f(uPtr, state.ptrSmoothX, state.ptrSmoothY);
      gl.drawArrays(gl.TRIANGLES, 0, 3);

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

    requestAnimationFrame(loop);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWebGL);
  } else {
    initWebGL();
  }
})();
