const fotosReales = [
    { id: "1UyRNy-9zb44b0Sq_Ujn_cyWL07IhsbZ7", title: "Francesa Polka Dots Cherry", cat: "nailart", precio: "$9", val: "9", serv: "Jelly Tip (Soft Gel)", nuevo: true },
    { id: "1PfNUFy6nB_EvBiSp7ro8ahGb6wyK-Z1W", title: "Joya Ojo de Gato & Marco de Oro", cat: "nailart", precio: "$8", val: "8", serv: "Nivelación con Base Rubber", nuevo: true },
    { id: "16WZC8QJys4Kt2C_NMGqizk5Dra0Hx_C7", title: "Micro-French & Brillo Perla", cat: "rubber", precio: "$8", val: "8", serv: "Nivelación con Base Rubber" },
    { id: "1P5ZMeNmExLewJvmbASlAB9GFYzci-ke8", title: "Francesa con Marco de Oro", cat: "nailart", precio: "$9", val: "9", serv: "Jelly Tip (Soft Gel)" },
    { id: "1IHKec73cHVDag6k9oF1dpi9NbN5D9TWM", title: "Francés Amarillo & Flor", cat: "nailart", precio: "$8", val: "8", serv: "Nivelación con Base Rubber" },
    { id: "1oozpKgmkCNvNud0hyYZq4tLm01SmMPrz", title: "Nivelación Rubber Natural", cat: "rubber", precio: "$8", val: "8", serv: "Nivelación con Base Rubber" },
    { id: "1TnaCOzSME_gB--tI-BT6JWeQFt_X_qLL", title: "Diseño Animal Print Rojo", cat: "nailart", precio: "$8", val: "8", serv: "Nivelación con Base Rubber" },
    { id: "1lJK2GRViGistev73vYYaTgbi9xN5gYz8", title: "Vino Cherry & Destellos", cat: "rubber", precio: "$6", val: "6", serv: "Manicura Semipermanente" },
    { id: "1Py-z-G8t4kLOptk6Zx5RCQ6eiBTpynio", title: "Burbujas Rosas & Relieve 3D", cat: "nailart", precio: "$8", val: "8", serv: "Nivelación con Base Rubber" },
    { id: "1bNc7Q2XnFFIqq8a0DFThRn3IifK_lZmK", title: "Polygel Rosa con Flor 3D", cat: "extensiones", precio: "$11", val: "11", serv: "Polygel Esculpido o Tips" },
    { id: "1WrINhasN9kwRyE8VePvPnS7UAecQtXba", title: "Pedicura Spa con Margaritas", cat: "rubber", precio: "$6", val: "6", serv: "Pedicura Spa en Cualquier Color" },
    { id: "19yP9A2L-ujBNswzD6fDce_k9AgrG2VRW", title: "Manicura Rusa Nacarada", cat: "rubber", precio: "$8", val: "8", serv: "Nivelación con Base Rubber" },
    { id: "1Q5vyhKGXhQv8xHmYlVH4tHUg_cNbi5CW", title: "Almendra Rojo Intenso", cat: "extensiones", precio: "$11", val: "11", serv: "Polygel Esculpido o Tips" },
    { id: "1uCqF1-hE53SDuSPXSoOu2eFN1aSZlw0w", title: "Rubber Base Tono Nude", cat: "rubber", precio: "$8", val: "8", serv: "Nivelación con Base Rubber" },
    { id: "1babJmUwxpVGhFQYRtdkRLpfbQHmVWxdD", title: "Francesa Blanca Clásica", cat: "rubber", precio: "$6", val: "6", serv: "Manicura Semipermanente" }
];

const FOTOS_INICIALES = 6;
let mostrarTodo = false;
let filtroActual = "todos";

function getImgWidth() {
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (conn && (conn.saveData || /2g|3g/.test(conn.effectiveType || ""))) return 320;
    return window.innerWidth < 640 ? 400 : 560;
}

function renderizarGaleria(filtro = "todos") {
    filtroActual = filtro;
    const grid = document.getElementById("galeriaGrid");
    const verMasWrap = document.getElementById("verMasContainer");
    const btnVerMas = document.getElementById("btnVerMas");
    if (!grid) return;

    const filtradas = filtro === "todos" ? fotosReales : fotosReales.filter(f => f.cat === filtro);
    const limite = (filtro === "todos" && !mostrarTodo) ? FOTOS_INICIALES : filtradas.length;
    const visibles = filtradas.slice(0, limite);
    const imgW = getImgWidth();

    const frag = document.createDocumentFragment();
    visibles.forEach(f => {
        const card = document.createElement("article");
        card.className = "photo-card pressable group cursor-pointer flex flex-col";
        card.onclick = () => seleccionarModelo(f.title, f.serv, f.val);

        const imgSrc = f.src ? f.src : `https://lh3.googleusercontent.com/d/${f.id}=w${imgW}`;
        const imgFallback = f.src ? "" : `onerror="this.onerror=null; this.src='https://drive.google.com/thumbnail?id=${f.id}&sz=w${imgW}';"`;
        const nuevoTag = f.nuevo ? '<span class="text-[10px] uppercase tracking-[0.16em] text-gold font-semibold mr-1.5">Nuevo ·</span>' : '';

        card.innerHTML = `
            <div class="aspect-square rounded-2xl overflow-hidden bg-dark-900 border border-champagne/10">
                <img src="${imgSrc}"
                     ${imgFallback}
                     alt="${f.title} por JeniNails"
                     width="320" height="320"
                     loading="lazy" decoding="async"
                     class="w-full h-full object-cover">
            </div>
            <div class="pt-3 flex items-baseline justify-between gap-2">
                <h4 class="font-display text-sm sm:text-base font-medium text-ivory group-hover:text-gold transition-colors leading-snug">${f.title}</h4>
                <span class="font-display text-sm sm:text-base text-gold tabular-nums shrink-0">${f.precio}</span>
            </div>
            <p class="text-[11px] text-champagne/65 mt-0.5 truncate">${nuevoTag}${f.serv}</p>
        `;
        frag.appendChild(card);
    });

    grid.innerHTML = "";
    grid.appendChild(frag);

    if (verMasWrap && btnVerMas) {
        const restantes = filtradas.length - visibles.length;
        if (restantes > 0) {
            btnVerMas.innerText = `Ver más modelos (${restantes} fotos restantes)`;
            verMasWrap.classList.remove("hidden");
        } else {
            verMasWrap.classList.add("hidden");
        }
    }
}

function mostrarTodasLasFotos() {
    mostrarTodo = true;
    renderizarGaleria(filtroActual);
}

function filtrarGaleria(cat, btnEl) {
    document.querySelectorAll(".filter-btn").forEach(b => {
        b.className = "filter-btn pressable px-3.5 py-2 rounded-full bg-dark-900/80 text-champagne/85 border border-champagne/15 hover:border-gold/50";
    });
    if (btnEl) {
        btnEl.className = "filter-btn pressable px-3.5 py-2 rounded-full bg-gold text-dark-950 font-semibold";
    }
    renderizarGaleria(cat);
}

// Helpers de horario: SOLO Viernes (5), Sábado (6) y Domingo (0)
const DIAS_ES = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const MESES_CORTO = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

function esDiaLaboral(dateObj) {
    const d = dateObj.getDay();
    return d === 5 || d === 6 || d === 0;
}

function formatearISO(dateObj) {
    const y = dateObj.getFullYear();
    const m = String(dateObj.getMonth() + 1).padStart(2, "0");
    const d = String(dateObj.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
}

function proximoDiaDisponible(desdeDate) {
    const d = new Date(desdeDate.getFullYear(), desdeDate.getMonth(), desdeDate.getDate());
    while (!esDiaLaboral(d)) d.setDate(d.getDate() + 1);
    return d;
}

function proximosTresDiasFinDeSemana(desdeDate) {
    const out = [];
    const base = new Date(desdeDate.getFullYear(), desdeDate.getMonth(), desdeDate.getDate());
    for (let i = 0; i < 14 && out.length < 3; i++) {
        const c = new Date(base.getFullYear(), base.getMonth(), base.getDate() + i);
        if (esDiaLaboral(c)) out.push(c);
    }
    return out;
}

function nombreDiaFecha(isoStr) {
    if (!isoStr) return "A convenir (Vie-Dom)";
    const p = isoStr.split("-").map(Number);
    if (p.length !== 3) return isoStr;
    const d = new Date(p[0], p[1] - 1, p[2]);
    return `${DIAS_ES[d.getDay()]} ${String(p[2]).padStart(2, "0")}/${String(p[1]).padStart(2, "0")}/${p[0]}`;
}

function actualizarFechaLegible(isoStr) {
    const el = document.getElementById("fechaLegible");
    if (el && isoStr) el.innerText = `Día elegido: ${nombreDiaFecha(isoStr)}`;
}

function renderWeekendPills() {
    const wrap = document.getElementById("weekendPills");
    const fechaInput = document.getElementById("fechaCita");
    if (!wrap) return;
    const dias = proximosTresDiasFinDeSemana(new Date());
    wrap.innerHTML = "";

    dias.forEach((d, idx) => {
        const iso = formatearISO(d);
        const btn = document.createElement("button");
        btn.type = "button";
        btn.dataset.iso = iso;
        btn.onclick = () => elegirWeekendPill(btn);
        btn.className = idx === 0
            ? "wk-pill pressable py-3 px-2 rounded-xl bg-gold/15 border border-gold text-center"
            : "wk-pill pressable py-3 px-2 rounded-xl bg-dark-950/85 border border-champagne/15 text-center";
        btn.innerHTML = `
            <span class="block text-xs font-semibold text-ivory">${DIAS_ES[d.getDay()]}</span>
            <span class="block text-[11px] text-champagne/75 mt-0.5">${d.getDate()} ${MESES_CORTO[d.getMonth()]}</span>
        `;
        wrap.appendChild(btn);
        if (idx === 0 && fechaInput) {
            fechaInput.min = iso;
            fechaInput.value = iso;
            actualizarFechaLegible(iso);
        }
    });
}

function elegirWeekendPill(btnEl) {
    document.querySelectorAll(".wk-pill").forEach(b => {
        b.className = "wk-pill pressable py-3 px-2 rounded-xl bg-dark-950/85 border border-champagne/15 text-center";
    });
    btnEl.className = "wk-pill pressable py-3 px-2 rounded-xl bg-gold/15 border border-gold text-center";
    const fechaInput = document.getElementById("fechaCita");
    if (fechaInput) fechaInput.value = btnEl.dataset.iso;
    actualizarFechaLegible(btnEl.dataset.iso);
    const aviso = document.getElementById("fechaAviso");
    if (aviso) aviso.classList.add("hidden");
}

function toggleOtraFecha() {
    const w = document.getElementById("otraFechaWrap");
    if (w) w.classList.toggle("hidden");
}

function validarFinDeSemana(inputEl) {
    const aviso = document.getElementById("fechaAviso");
    if (!inputEl || !inputEl.value) return true;
    const p = inputEl.value.split("-").map(Number);
    const elegida = new Date(p[0], p[1] - 1, p[2]);
    if (!esDiaLaboral(elegida)) {
        const sugerida = proximoDiaDisponible(elegida);
        inputEl.value = formatearISO(sugerida);
        actualizarFechaLegible(inputEl.value);
        if (aviso) {
            aviso.innerText = `Jeni atiende solo Viernes, Sábado y Domingo. Ajustamos al ${nombreDiaFecha(inputEl.value)}.`;
            aviso.classList.remove("hidden");
        }
    } else {
        actualizarFechaLegible(inputEl.value);
        if (aviso) aviso.classList.add("hidden");
    }
    document.querySelectorAll(".wk-pill").forEach(b => {
        const active = b.dataset.iso === inputEl.value;
        b.className = active
            ? "wk-pill pressable py-3 px-2 rounded-xl bg-gold/15 border border-gold text-center"
            : "wk-pill pressable py-3 px-2 rounded-xl bg-dark-950/85 border border-champagne/15 text-center";
    });
    return true;
}

function sincronizarServicioPills(servicioNombre) {
    const select = document.getElementById("servicioSelect");
    for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].dataset.name === servicioNombre || select.options[i].dataset.name.includes(servicioNombre)) {
            select.selectedIndex = i;
            break;
        }
    }
    const activo = select.options[select.selectedIndex].dataset.name;
    document.querySelectorAll(".serv-pill").forEach(p => {
        const match = p.dataset.serv === activo;
        const span = p.dataset.span ? " " + p.dataset.span : "";
        p.className = (match
            ? "serv-pill pressable text-left p-2.5 sm:p-3 rounded-xl bg-gold/15 border border-gold text-xs"
            : "serv-pill pressable text-left p-2.5 sm:p-3 rounded-xl bg-dark-950/85 border border-champagne/15 text-xs") + span;
    });
    calcularTotal();
}

function elegirServicioPill(btnEl) {
    sincronizarServicioPills(btnEl.dataset.serv);
}

function elegirTurnoPill(btnEl) {
    document.querySelectorAll(".turno-pill").forEach(b => {
        b.className = "turno-pill pressable py-3 px-3.5 rounded-xl bg-dark-950/85 border border-champagne/15 text-center text-xs";
    });
    btnEl.className = "turno-pill pressable py-3 px-3.5 rounded-xl bg-gold/15 border border-gold text-center text-xs";
    const input = document.getElementById("horaCita");
    if (input) input.value = btnEl.dataset.turno;
}

function seleccionarModelo(titulo, servicioNombre, precioVal) {
    sincronizarServicioPills(servicioNombre);

    const disenoInput = document.getElementById("disenoIdea");
    if (disenoInput) disenoInput.value = `Modelo: ${titulo}`;

    const badge = document.getElementById("modeloBadge");
    if (badge) {
        badge.innerText = `Modelo: ${titulo}`;
        badge.classList.remove("hidden");
    }

    const toast = document.getElementById("selectionToast");
    const toastName = document.getElementById("toastDesignName");
    if (toast && toastName) {
        toastName.innerText = titulo;
        toast.classList.remove("hidden");
    }

    const agendar = document.getElementById("agendar");
    if (agendar) agendar.scrollIntoView({ behavior: "smooth" });
}

function seleccionarServicioDirecto(servicioNombre, precioVal) {
    sincronizarServicioPills(servicioNombre);
    const agendar = document.getElementById("agendar");
    if (agendar) agendar.scrollIntoView({ behavior: "smooth" });
}

function calcularTotal() {
    const select = document.getElementById("servicioSelect");
    const servicio = parseFloat(select.value) || 6;
    let extras = 0;
    if (document.getElementById("extraCatEye").checked) extras += 1;
    if (document.getElementById("extraFrancesa").checked) extras += 1;
    if (document.getElementById("extraRetiro").checked) extras += 2;
    if (document.getElementById("extraCristales").checked) extras += 1;

    const total = servicio + extras;
    document.getElementById("totalMonto").innerText = `$${total.toFixed(2)}`;
    return total;
}

function enviarWhatsApp() {
    const fechaInput = document.getElementById("fechaCita");
    if (fechaInput) validarFinDeSemana(fechaInput);

    const nombre = document.getElementById("nombreCliente").value.trim() || "Cliente";
    const select = document.getElementById("servicioSelect");
    const servicioNombre = select.options[select.selectedIndex].dataset.name || select.options[select.selectedIndex].text;
    const diseno = document.getElementById("disenoIdea").value.trim() || "A coordinar";
    const fechaTexto = nombreDiaFecha(fechaInput ? fechaInput.value : "");
    const turno = document.getElementById("horaCita").value;
    const total = document.getElementById("totalMonto").innerText;

    const extras = [];
    if (document.getElementById("extraCatEye").checked) extras.push("Efecto Ojo de Gato (+$1)");
    if (document.getElementById("extraFrancesa").checked) extras.push("Francesa / Chrome (+$1)");
    if (document.getElementById("extraRetiro").checked) extras.push("Retiro Previo (+$2)");
    if (document.getElementById("extraCristales").checked) extras.push("Cristales / Glitter (+$1)");
    const extrasTexto = extras.length > 0 ? `\n• *Extras:* ${extras.join(", ")}` : "";

    const mensaje = `¡Hola Jeni!\nMi nombre es *${nombre}*.\nQuisiera agendar una cita en tu estudio en Barquisimeto:\n\n• *Servicio:* ${servicioNombre}\n• *Diseño o idea:* ${diseno}${extrasTexto}\n• *Fecha estimada:* ${fechaTexto}\n• *Turno:* ${turno}\n• *Total estimado:* ${total}\n\n¿Tienes disponibilidad para ese día? ¡Muchas gracias!`;
    const url = `https://wa.me/584245766425?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}

function initScrollReveals() {
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveals = document.querySelectorAll(".reveal-block");
    if (reduced || !("IntersectionObserver" in window)) {
        reveals.forEach(el => el.classList.add("is-visible"));
    } else {
        const revObs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add("is-visible");
                    revObs.unobserve(e.target);
                }
            });
        }, { rootMargin: "0px 0px -60px 0px", threshold: 0.05 });
        reveals.forEach(el => revObs.observe(el));
    }
}

let qrCargado = false;
function cargarYGenerarQR() {
    if (qrCargado) return;
    qrCargado = true;
    if (typeof QRCode !== "undefined") {
        generarQR();
        return;
    }
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js";
    script.defer = true;
    script.onload = generarQR;
    script.onerror = () => {
        const qrDiv = document.getElementById("qrcodeCanvas");
        if (qrDiv) qrDiv.innerText = "jeninails.vercel.app";
    };
    document.head.appendChild(script);
}

function generarQR() {
    const qrDiv = document.getElementById("qrcodeCanvas");
    if (!qrDiv || typeof QRCode === "undefined") return;
    qrDiv.innerHTML = "";
    new QRCode(qrDiv, {
        text: "https://jeninails.vercel.app/?ref=qr",
        width: 176,
        height: 176,
        colorDark: "#02050E",
        colorLight: "#F9FCFF",
        correctLevel: QRCode.CorrectLevel.H
    });
}

function descargarQR() {
    const img = document.querySelector("#qrcodeCanvas img");
    if (img && img.src) {
        const a = document.createElement("a");
        a.href = img.src;
        a.download = "JeniNails-QR-Oficial.png";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } else {
        const canvas = document.querySelector("#qrcodeCanvas canvas");
        if (canvas) {
            const a = document.createElement("a");
            a.href = canvas.toDataURL("image/png");
            a.download = "JeniNails-QR-Oficial.png";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }
}

function compartirEnlace() {
    if (navigator.share) {
        navigator.share({
            title: "JeniNails Atelier ✦ Uñas de Lujo en Barquisimeto",
            text: "Polygel, Jelly Tip, Nivelación Rubber y Ojo de Gato 4D en Barquisimeto Centro (Vie–Dom previa cita).",
            url: "https://jeninails.vercel.app/?ref=share"
        }).catch(() => {});
    } else if (navigator.clipboard) {
        navigator.clipboard.writeText("https://jeninails.vercel.app/?ref=share");
        alert("Enlace copiado al portapapeles.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderizarGaleria("todos");
    renderWeekendPills();
    calcularTotal();
    initScrollReveals();

    const yearEl = document.getElementById("currentYear");
    if (yearEl) yearEl.innerText = new Date().getFullYear();

    const qrSec = document.getElementById("qr-code");
    if (qrSec && "IntersectionObserver" in window) {
        const obs = new IntersectionObserver((entries) => {
            if (entries.some(e => e.isIntersecting)) {
                cargarYGenerarQR();
                obs.disconnect();
            }
        }, { rootMargin: "200px" });
        obs.observe(qrSec);
    } else {
        cargarYGenerarQR();
    }
});
