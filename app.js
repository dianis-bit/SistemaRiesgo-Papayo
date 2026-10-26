/* =========================================================
   FUNDO PAPAYO — CONTROL DE APLICACIONES, RIEGOS Y CAMPO
========================================================= */

const SVG_NS = "http://www.w3.org/2000/svg";

/* =========================================================
   CONFIGURACIÓN DE CUARTELES — FUNDO PAPAYO
========================================================= */

const cuarteles = {
    1: { equipo: "A", turno: "1", subturno: "1" },
    2: { equipo: "A", turno: "1", subturno: "1" },
    3: { equipo: "A", turno: "1", subturno: "1" },
    16: { equipo: "B", turno: "1", subturno: "1" },
    17: { equipo: "B", turno: "1", subturno: "1" },
    18: { equipo: "B", turno: "1", subturno: "1" },
    19: { equipo: "B", turno: "2", subturno: "2" },
    20: { equipo: "B", turno: "2", subturno: "2" },
    21: { equipo: "B", turno: "2", subturno: "2" },
    26: { equipo: "B", turno: "4", subturno: "4" },
    27: { equipo: "B", turno: "4", subturno: "4" },
    31: { equipo: "C", turno: "1", subturno: "1" },
    32: { equipo: "C", turno: "1", subturno: "1" },
    33: { equipo: "C", turno: "1", subturno: "1" },
    34: { equipo: "C", turno: "2", subturno: "2" },
    35: { equipo: "C", turno: "2", subturno: "2" },
    36: { equipo: "C", turno: "2", subturno: "2" },
    37: { equipo: "C", turno: "3", subturno: "3" },
    38: { equipo: "C", turno: "3", subturno: "3" },
    39: { equipo: "C", turno: "3", subturno: "3" },
    40: { equipo: "C", turno: "3", subturno: "3" },
    41: { equipo: "C", turno: "4", subturno: "4" },
    42: { equipo: "C", turno: "4", subturno: "4" },
    43: { equipo: "C", turno: "4", subturno: "4" },
    47: { equipo: "D", turno: "1", subturno: "1" },
    48: { equipo: "D", turno: "1", subturno: "1" },
    49: { equipo: "D", turno: "1", subturno: "1" },
    50: { equipo: "D", turno: "1", subturno: "1" },
    51: { equipo: "D", turno: "1", subturno: "1" },
    52: { equipo: "D", turno: "6", subturno: "6" },
    53: { equipo: "D", turno: "3", subturno: "3" },
    54: { equipo: "D", turno: "3", subturno: "3" },
    55: { equipo: "D", turno: "2", subturno: "2" },
    56: { equipo: "D", turno: "2", subturno: "2" },
    57: { equipo: "D", turno: "6", subturno: "6" },
    58: { equipo: "D", turno: "3", subturno: "3" },
    59: { equipo: "D", turno: "3", subturno: "3" },
    60: { equipo: "D", turno: "2", subturno: "2" },
    61: { equipo: "D", turno: "2", subturno: "2" },
    62: { equipo: "D", turno: "4", subturno: "4" },
    63: { equipo: "D", turno: "4", subturno: "4" },
    64: { equipo: "D", turno: "4", subturno: "4" },
    65: { equipo: "D", turno: "5", subturno: "5" },
    66: { equipo: "D", turno: "5", subturno: "5" },
    67: { equipo: "D", turno: "4", subturno: "4" },
    68: { equipo: "D", turno: "4", subturno: "4" },
    69: { equipo: "D", turno: "4", subturno: "4" },
    70: { equipo: "D", turno: "5", subturno: "5" },
    71: { equipo: "D", turno: "5", subturno: "5" },
    72: { equipo: "D", turno: "5", subturno: "5" },
    73: { equipo: "E", turno: "7", subturno: "7" },
    75: { equipo: "E", turno: "2", subturno: "2" },
    76: { equipo: "E", turno: "2", subturno: "2" },
    77: { equipo: "E", turno: "3", subturno: "3" },
    78: { equipo: "E", turno: "3", subturno: "3" },
    79: { equipo: "E", turno: "2", subturno: "2" },
    80: { equipo: "E", turno: "2", subturno: "2" },
    81: { equipo: "E", turno: "3", subturno: "3" },
    82: { equipo: "E", turno: "3", subturno: "3" },
    83: { equipo: "E", turno: "1", subturno: "1" },
    84: { equipo: "E", turno: "4", subturno: "4" },
    85: { equipo: "E", turno: "4", subturno: "4" },
    86: { equipo: "E", turno: "4", subturno: "4" },
    87: { equipo: "E", turno: "5", subturno: "5" },
    88: { equipo: "E", turno: "5", subturno: "5" },
    89: { equipo: "E", turno: "5", subturno: "5" },
    90: { equipo: "E", turno: "5", subturno: "5" },
    91: { equipo: "E", turno: "6", subturno: "6" },
    92: { equipo: "F", turno: "1", subturno: "1" },
    93: { equipo: "F", turno: "1", subturno: "1" },
    94: { equipo: "F", turno: "1", subturno: "1" },
    95: { equipo: "F", turno: "2", subturno: "2" },
    96: { equipo: "F", turno: "2", subturno: "2" },
    97: { equipo: "F", turno: "2", subturno: "2" },
    98: { equipo: "F", turno: "3", subturno: "3" },
    99: { equipo: "F", turno: "3", subturno: "3" },
    100: { equipo: "F", turno: "3", subturno: "3" },
    101: { equipo: "F", turno: "4", subturno: "4" },
    102: { equipo: "F", turno: "4", subturno: "4" },
    103: { equipo: "F", turno: "4", subturno: "4" },
    104: { equipo: "F", turno: "5", subturno: "5" },
    105: { equipo: "F", turno: "5", subturno: "5" },
    106: { equipo: "F", turno: "5", subturno: "5" },
    107: { equipo: "G", turno: "1", subturno: "1" },
    108: { equipo: "G", turno: "1", subturno: "1" },
    109: { equipo: "G", turno: "1", subturno: "1" },
    110: { equipo: "G", turno: "1", subturno: "1" },
    111: { equipo: "G", turno: "2", subturno: "2" },
    112: { equipo: "G", turno: "2", subturno: "2" },
    113: { equipo: "G", turno: "2", subturno: "2" },
    114: { equipo: "G", turno: "3", subturno: "3" },
    115: { equipo: "G", turno: "3", subturno: "3" },
    117: { equipo: "G", turno: "3", subturno: "3" }
};


/* =========================================================
   CUARTELES CON MÁS DE UN SEGMENTO EN EL MAPA

   Clave = número del cuartel, valor = ids de los segmentos
   extra (path) que también le pertenecen. Se pintan igual que
   el cuartel y cuentan como parte de él.
========================================================= */

const SEGMENTOS_EXTRA = {
    "60": ["path65"]
};


/* =========================================================
   REGLAS Y AJUSTES

   APTITUD PARA LABOR DE CAMPO
     0, 2, 4, 6, 8 h (o sin restricción) -> APTO
     12, 24, 48 h                         -> NO APTO

   TAMAÑOS DE LETRA (unidades del SVG)
========================================================= */

const HORAS_NO_APTO = 12;

const FONT_MAX_INTERIOR = 3.4;   // máximo dentro de un cuartel
const FONT_MIN_INTERIOR = 2.3;   // menos que esto -> se usa cuadro aparte
const FONT_CALLOUT = 3.4;        // cuadro aparte de aplicación
const FONT_RIEGO = 2.8;          // cuadro de riego (por turno)
const INTERLINEADO = 1.22;

// Cuarteles cuya info de aplicación va SIEMPRE en cuadro aparte
const FORZAR_CALLOUT = { "57": true };

// Lado preferido del cuadro aparte (C57: al costado, sobre R2)
const PREFERENCIA_CALLOUT = {
    "57": ["izquierda", "derecha", "abajo", "arriba"]
};

const ORDEN_LADOS = ["derecha", "izquierda", "abajo", "arriba"];

// Elementos de la leyenda que se usarán más adelante.
// true  = ocultos (en pantalla y en la imagen descargada)
// false = se muestran de nuevo
const OCULTAR_LEYENDA_PENDIENTE = true;
const LEYENDA_PENDIENTE = ["Ingreso de buses", "Salida de buses", "Paraderos"];


/* =========================================================
   DATOS
========================================================= */

let aplicaciones = {};
let riegos = {};
let labores = {};

let anchoMapaSVG = 0;
let altoMapaSVG = 0;

let bboxCuarteles = {};        // caja de cada cuartel
let piezasCuarteles = [];      // todos los segmentos: { cuartel, elId, bbox }
let etiquetasCuarteles = {};   // caja del número de cada cuartel
let limitesMapa = null;        // límites donde se puede dibujar
let zonasOcupadas = [];        // textos, cuadros e íconos ya colocados
let infoInterior = {};         // rect del texto de aplicación dentro del cuartel
let cacheAnchoTexto = {};


/* =========================================================
   COLORES
========================================================= */

const COLORES = {
    restriccionAlta: "#f50808",   // 24 h a más
    restriccionMedia: "#f87171",  // 12 h
    sinRestriccion: "#a7f3a0",    // 8, 6, 4, 2, 0 h
    riego: "#81d4fa",             // riego sin tiempo de reingreso
    disponible: "#ffffff"
};

function colorPorHoras(horas) {
    const h = Number(horas);
    if (h >= 24) return COLORES.restriccionAlta;
    if (h >= 12) return COLORES.restriccionMedia;
    return COLORES.sinRestriccion;
}


/* =========================================================
   UTILIDADES
========================================================= */

function crear(tag, atributos, texto) {
    const e = document.createElementNS(SVG_NS, tag);
    Object.keys(atributos || {}).forEach(k => e.setAttribute(k, atributos[k]));
    if (texto !== undefined) e.textContent = texto;
    return e;
}

function compararIds(a, b) {
    const na = parseInt(a, 10);
    const nb = parseInt(b, 10);
    if (na !== nb) return na - nb;
    return String(a).localeCompare(String(b), undefined, { numeric: true });
}

function limitar(valor, min, max) {
    return Math.min(Math.max(valor, min), max);
}

function areaSolape(a, b) {
    const ancho = Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x);
    const alto = Math.min(a.y + a.height, b.y + b.height) - Math.max(a.y, b.y);
    if (ancho <= 0 || alto <= 0) return 0;
    return ancho * alto;
}

function unirCajas(cajas) {
    const x1 = Math.min(...cajas.map(c => c.x));
    const y1 = Math.min(...cajas.map(c => c.y));
    const x2 = Math.max(...cajas.map(c => c.x + c.width));
    const y2 = Math.max(...cajas.map(c => c.y + c.height));
    return { x: x1, y: y1, width: x2 - x1, height: y2 - y1 };
}

// Ancho real del texto (negrita Arial) por cada unidad de tamaño de letra
function anchoPorUnidad(texto) {

    if (cacheAnchoTexto[texto] !== undefined) return cacheAnchoTexto[texto];

    let valor = texto.length * 0.62;
    const svgEl = document.querySelector("#mapaContainer svg");

    if (svgEl) {
        try {
            const t = crear("text", {
                x: 0, y: 0, opacity: 0,
                "font-size": 10,
                "font-family": "Arial, sans-serif",
                "font-weight": "bold"
            }, texto);
            svgEl.appendChild(t);
            const w = t.getBBox().width;
            svgEl.removeChild(t);
            if (w > 0) valor = w / 10;
        } catch (e) { /* se usa la estimación */ }
    }

    cacheAnchoTexto[texto] = valor;
    return valor;
}

function anchoMaximo(lineas) {
    return Math.max(...lineas.map(l => anchoPorUnidad(l.texto)));
}


/* =========================================================
   INICIO
========================================================= */

document.addEventListener("DOMContentLoaded", function () {
    colocarFechaActual();
    aplicarVisibilidadLeyenda();
    crearBotonNuevoDia();
    cargarCuarteles();
    inicializarMapa();
});


/* =========================================================
   FECHAS Y HORAS
========================================================= */

function colocarFechaActual() {
    const hoy = new Date();
    const fecha = hoy.toLocaleDateString("es-PE", {
        day: "2-digit", month: "2-digit", year: "numeric"
    });
    document.getElementById("fechaActual").textContent = fecha;
}

// Ejemplo: 12-OCT
function formatearFechaCorta(fecha) {

    if (!fecha) return "";
    const partes = fecha.split("-");
    if (partes.length !== 3) return fecha;

    const meses = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN",
        "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];

    return `${partes[2]}-${meses[Number(partes[1]) - 1]}`;
}

// Ejemplo: 10:00 AM
function formatearHora(hora) {

    if (!hora) return "";
    const partes = hora.split(":");

    let horas = Number(partes[0]);
    const minutos = partes[1];
    const periodo = horas >= 12 ? "PM" : "AM";

    if (horas === 0) horas = 12;
    if (horas > 12) horas -= 12;

    return `${horas}:${minutos} ${periodo}`;
}


/* =========================================================
   CARGAR CUARTELES EN LOS SELECT
========================================================= */

function cargarCuarteles() {

    const selectAplicacion = document.getElementById("aplicacionCuartel");
    const selectCampo = document.getElementById("campoCuartel");

    Object.keys(cuarteles)
        .sort(compararIds)
        .forEach(numero => {

            const opcionAplicacion = document.createElement("option");
            opcionAplicacion.value = numero;
            opcionAplicacion.textContent = `Cuartel ${numero}`;
            selectAplicacion.appendChild(opcionAplicacion);

            const opcionCampo = document.createElement("option");
            opcionCampo.value = numero;
            opcionCampo.textContent = `Cuartel ${numero}`;
            selectCampo.appendChild(opcionCampo);

        });

    selectCampo.addEventListener("change", function () {
        mostrarEstadoCampo(this.value);
    });
}


/* =========================================================
   INICIALIZAR MAPA (el SVG ya está incrustado en el HTML)
========================================================= */

function inicializarMapa() {

    const svgEl = document.querySelector("#mapaContainer svg");

    if (!svgEl) {
        document.getElementById("mapaContainer").innerHTML = `
            <div class="error-mapa">
                <h3>⚠️ No se encontró el mapa</h3>
                <p>El SVG no está incrustado en el HTML. Vuelva a generar el archivo.</p>
            </div>
        `;
        return;
    }

    if (svgEl.viewBox && svgEl.viewBox.baseVal && svgEl.viewBox.baseVal.width) {
        anchoMapaSVG = svgEl.viewBox.baseVal.width;
        altoMapaSVG = svgEl.viewBox.baseVal.height;
    } else {
        anchoMapaSVG = svgEl.width.baseVal.value;
        altoMapaSVG = svgEl.height.baseVal.value;
    }

    prepararCuartelesSVG();
}


/* =========================================================
   PREPARAR SVG
========================================================= */

function prepararCuartelesSVG() {

    bboxCuarteles = {};
    piezasCuarteles = [];
    let capa = null;

    Object.keys(cuarteles).forEach(numero => {

        const elemento = document.getElementById(numero);

        if (!elemento) {
            console.warn(`No se encontró C${numero} en el SVG`);
            return;
        }

        elemento.classList.add("cuartel-svg");

        elemento.addEventListener("click", function () {
            seleccionarCuartel(numero);
        });

        try {
            bboxCuarteles[numero] = elemento.getBBox();
            piezasCuarteles.push({ cuartel: numero, elId: numero, bbox: bboxCuarteles[numero] });
            if (!capa) capa = elemento.parentNode;
        } catch (error) {
            console.error(`No se pudo calcular la caja de C${numero}`, error);
        }

    });

    // Segmentos extra (cuarteles de más de una pieza)
    Object.keys(SEGMENTOS_EXTRA).forEach(numero => {

        if (!cuarteles[numero]) return;

        SEGMENTOS_EXTRA[numero].forEach(idExtra => {

            const extra = document.getElementById(idExtra);

            if (!extra) {
                console.warn(`No se encontró el segmento ${idExtra} de C${numero}`);
                return;
            }

            extra.classList.add("cuartel-svg");
            extra.addEventListener("click", function () {
                seleccionarCuartel(numero);
            });

            try {
                piezasCuarteles.push({ cuartel: numero, elId: idExtra, bbox: extra.getBBox() });
            } catch (error) {
                console.error(`No se pudo calcular la caja de ${idExtra}`, error);
            }

        });

    });

    const svgEl = document.querySelector("#mapaContainer svg");

    calcularLimites(svgEl, capa);
    detectarEtiquetas(svgEl);

    refrescarTodo();
}

// Límites del dibujo en las coordenadas de la capa del mapa.
// Se usa solo la transformación propia de la capa (no getCTM, que
// incluye la escala de pantalla y daba límites incorrectos).
function calcularLimites(svgEl, capa) {

    limitesMapa = null;

    try {
        const vb = svgEl.viewBox.baseVal;

        let a = 1, d = 1, e = 0, f = 0;

        const consolidada = capa.transform.baseVal.consolidate();
        if (consolidada) {
            a = consolidada.matrix.a || 1;
            d = consolidada.matrix.d || 1;
            e = consolidada.matrix.e;
            f = consolidada.matrix.f;
        }

        const x1 = (vb.x - e) / a;
        const x2 = (vb.x + vb.width - e) / a;
        const y1 = (vb.y - f) / d;
        const y2 = (vb.y + vb.height - f) / d;

        limitesMapa = {
            minX: Math.min(x1, x2) + 0.5,
            minY: Math.min(y1, y2) + 0.5,
            maxX: Math.max(x1, x2) - 0.5,
            maxY: Math.max(y1, y2) - 0.5
        };
    } catch (err) {
        limitesMapa = null;
    }

    // Respaldo: el área de los cuarteles con un margen
    if (!limitesMapa || !isFinite(limitesMapa.minX) || !isFinite(limitesMapa.maxX)) {
        const todas = unirCajas(Object.keys(bboxCuarteles).map(id => bboxCuarteles[id]));
        limitesMapa = {
            minX: todas.x - 25, minY: todas.y - 25,
            maxX: todas.x + todas.width + 25, maxY: todas.y + todas.height + 25
        };
    }
}

// Ubica el número de cada cuartel (para no escribir encima de él)
function detectarEtiquetas(svgEl) {

    etiquetasCuarteles = {};

    svgEl.querySelectorAll("text").forEach(t => {

        const id = t.textContent.trim();
        if (!cuarteles[id] || !bboxCuarteles[id]) return;

        let b;
        try { b = t.getBBox(); } catch (e) { return; }

        let xs = [b.x, b.x + b.width];
        let ys = [b.y, b.y + b.height];

        try {
            const consolidada = t.transform.baseVal.consolidate();
            if (consolidada) {
                const m = consolidada.matrix;
                const puntos = [
                    [b.x, b.y], [b.x + b.width, b.y],
                    [b.x, b.y + b.height], [b.x + b.width, b.y + b.height]
                ].map(p => ({
                    x: m.a * p[0] + m.c * p[1] + m.e,
                    y: m.b * p[0] + m.d * p[1] + m.f
                }));
                xs = puntos.map(p => p.x);
                ys = puntos.map(p => p.y);
            }
        } catch (e) { /* sin transformación */ }

        const rect = {
            x: Math.min(...xs),
            y: Math.min(...ys),
            width: Math.max(...xs) - Math.min(...xs),
            height: Math.max(...ys) - Math.min(...ys)
        };

        const caja = bboxCuarteles[id];
        const ampliada = {
            x: caja.x - 2, y: caja.y - 2,
            width: caja.width + 4, height: caja.height + 4
        };

        if (areaSolape(rect, ampliada) > 0) {
            etiquetasCuarteles[id] = rect;
        }

    });
}


/* =========================================================
   DETECCIÓN DE PUNTOS DENTRO DE CUARTELES
========================================================= */

function puntoEnCuartel(id, x, y) {

    const el = document.getElementById(id);
    if (!el) return false;

    if (typeof el.isPointInFill === "function") {
        try {
            return el.isPointInFill(new DOMPoint(x, y));
        } catch (e) { /* se usa la caja */ }
    }

    const b = bboxCuarteles[id];
    return !!b && x >= b.x && x <= b.x + b.width && y >= b.y && y <= b.y + b.height;
}

function puntoEnPieza(pieza, x, y) {

    const el = document.getElementById(pieza.elId);

    if (el && typeof el.isPointInFill === "function") {
        try {
            return el.isPointInFill(new DOMPoint(x, y));
        } catch (e) { /* se usa la caja */ }
    }

    const b = pieza.bbox;
    return x >= b.x && x <= b.x + b.width && y >= b.y && y <= b.y + b.height;
}

function cuartelEnPunto(x, y) {

    for (let i = 0; i < piezasCuarteles.length; i++) {
        const pz = piezasCuarteles[i];
        const b = pz.bbox;
        if (x < b.x || x > b.x + b.width || y < b.y || y > b.y + b.height) continue;
        if (puntoEnPieza(pz, x, y)) return pz.cuartel;
    }

    return null;
}

// Cajas de todos los segmentos de un cuartel
function cajasDe(id) {
    return piezasCuarteles.filter(pz => pz.cuartel === String(id)).map(pz => pz.bbox);
}

function rectDentroDeCuartel(numero, rect) {

    const m = 0.15;
    const x1 = rect.x + m, x2 = rect.x + rect.width - m;
    const y1 = rect.y + m, y2 = rect.y + rect.height - m;

    const puntos = [
        [x1, y1], [x2, y1], [x1, y2], [x2, y2],
        [(x1 + x2) / 2, y1], [(x1 + x2) / 2, y2],
        [x1, (y1 + y2) / 2], [x2, (y1 + y2) / 2]
    ];

    return puntos.every(p => puntoEnCuartel(numero, p[0], p[1]));
}

// Puntaje de un rectángulo: 0 = no tapa ningún cuartel ajeno ni otra info
function puntuarRect(rect, permitidos) {

    if (limitesMapa) {
        if (rect.x < limitesMapa.minX || rect.y < limitesMapa.minY ||
            rect.x + rect.width > limitesMapa.maxX ||
            rect.y + rect.height > limitesMapa.maxY) {
            return 100000;
        }
    }

    const nx = Math.max(3, Math.ceil(rect.width / 2.5));
    const ny = Math.max(3, Math.ceil(rect.height / 2.5));

    let malos = 0;

    for (let i = 0; i < nx; i++) {
        for (let j = 0; j < ny; j++) {
            const x = rect.x + (i + 0.5) * rect.width / nx;
            const y = rect.y + (j + 0.5) * rect.height / ny;
            const id = cuartelEnPunto(x, y);
            if (id && permitidos.indexOf(id) === -1) malos++;
        }
    }

    const area = rect.width * rect.height;

    // Tapar texto, íconos u otras cajas ya colocadas es lo peor
    let ocupado = 0;
    zonasOcupadas.forEach(z => { ocupado += areaSolape(rect, z); });
    const penalOcupado = ocupado > 0 ? 30 + (ocupado / area) * 300 : 0;

    // Tapar el número de un cuartel también se evita
    let etiquetas = 0;
    Object.keys(etiquetasCuarteles).forEach(id => {
        etiquetas += areaSolape(rect, etiquetasCuarteles[id]);
    });
    const penalEtiquetas = etiquetas > 0 ? 8 + (etiquetas / area) * 150 : 0;

    return (malos / (nx * ny)) * 100 + penalOcupado + penalEtiquetas;
}


/* =========================================================
   REFRESCAR TODO EL MAPA

   Orden: franjas -> info de aplicación -> íconos -> info de
   riego (por turno). Todo se recalcula en cada pasada para
   que nada quede superpuesto.
========================================================= */

function limpiarSuperposiciones() {
    document.querySelectorAll(
        "#mapaContainer .informacion-cuartel, #mapaContainer .icono-trabajadores, #mapaContainer .franja-orillado"
    ).forEach(e => e.remove());
}

function refrescarTodo() {

    actualizarMapa();
    limpiarSuperposiciones();

    zonasOcupadas = [];
    infoInterior = {};

    const ids = Object.keys(cuarteles).sort(compararIds);

    ids.forEach(colocarFranjaOrillado);
    ids.forEach(colocarInfoAplicacion);
    ids.forEach(colocarIconoTrabajadores);

    obtenerGruposRiego().forEach(colocarInfoRiegoGrupo);
}


/* =========================================================
   SELECCIONAR CUARTEL
========================================================= */

function seleccionarCuartel(numero) {

    const destino = document.getElementById("estadoSeleccionado");
    if (!destino) return;

    const datos = cuarteles[numero];
    const estado = obtenerEstadoCuartel(numero);

    destino.textContent =
        `C${numero} | Equipo ${datos.equipo} | ${estado.texto}`;
}


/* =========================================================
   ESTADO DEL CUARTEL

   FONDO:
   1) Aplicación normal o dron (color por horas)
   2) Riego (celeste sin reingreso / rojo por horas con reingreso)
   3) Disponible (blanco)
   El ORILLADO no pinta fondo (solo franja roja en el borde),
   pero sí cuenta para saber si el cuartel es apto o no.

   APTITUD:
   12, 24, 48 h -> NO APTO     |     0, 2, 4, 6, 8 h -> APTO
========================================================= */

function obtenerEstadoCuartel(numero) {

    const aplicacion = aplicaciones[numero];
    const riego = riegos[numero];
    const tieneLabor = Boolean(labores[numero]);

    const horasAplicacion = aplicacion ? Number(aplicacion.restriccionHoras || 0) : 0;
    const horasAplicacionFondo =
        aplicacion && aplicacion.tipo !== "orillado" ? horasAplicacion : 0;
    const horasRiego = riego && riego.reingreso ? Number(riego.horasReingreso || 0) : 0;

    const horasFondo = Math.max(horasAplicacionFondo, horasRiego);
    const horasMaximas = Math.max(horasAplicacion, horasRiego);
    const noApto = horasMaximas >= HORAS_NO_APTO;

    let color = COLORES.disponible;

    if (horasFondo > 0) {
        color = colorPorHoras(horasFondo);
    } else if (aplicacion && aplicacion.tipo !== "orillado") {
        color = COLORES.sinRestriccion;
    } else if (riego) {
        color = riego.reingreso ? colorPorHoras(horasRiego) : COLORES.riego;
    }

    const detalles = [];

    if (aplicacion) {
        const tipo = aplicacion.tipo === "dron" ? "APLICACIÓN CON DRON"
            : aplicacion.tipo === "orillado" ? "APLICACIÓN DE ORILLADO" : "APLICACIÓN";
        detalles.push(`${tipo} - ${horasAplicacion > 0 ? `RESTRICCIÓN ${horasAplicacion} H` : "SIN RESTRICCIÓN"}`);
    }

    if (riego) {
        detalles.push(riego.reingreso
            ? `RIEGO - REINGRESO ${horasRiego} H`
            : "RIEGO - SIN TIEMPO DE REINGRESO");
    }

    if (!detalles.length && tieneLabor) detalles.push("CUARTEL A LABORAR");

    return {
        texto: detalles.length ? detalles.join(" | ") : "DISPONIBLE PARA LABOR",
        color,
        noApto,
        horasMaximas,
        aplicacion,
        riego
    };
}


/* =========================================================
   ACTUALIZAR MAPA (color de fondo)
========================================================= */

function actualizarMapa() {

    Object.keys(cuarteles).forEach(numero => {

        const elemento = document.getElementById(numero);
        if (!elemento) return;

        const color = obtenerEstadoCuartel(numero).color;

        elemento.style.fill = color;

        (SEGMENTOS_EXTRA[numero] || []).forEach(idExtra => {
            const extra = document.getElementById(idExtra);
            if (extra) extra.style.fill = color;
        });

    });
}


/* =========================================================
   FRANJA DE ORILLADO (siempre roja)
========================================================= */

function colocarFranjaOrillado(numero) {

    const aplicacion = aplicaciones[numero];
    if (!aplicacion || aplicacion.tipo !== "orillado") return;

    const piezas = piezasCuarteles.filter(pz => pz.cuartel === String(numero));

    piezas.forEach(pz => {

        const elemento = document.getElementById(pz.elId);
        if (!elemento || !elemento.parentNode) return;

        const franja = elemento.cloneNode(false);

        franja.setAttribute("id", `orillado-${pz.elId}`);
        franja.setAttribute("class", "franja-orillado");
        franja.removeAttribute("inkscape:label");
        franja.removeAttribute("sodipodi:nodetypes");
        franja.removeAttribute("onload");

        const grosor = Math.min(pz.bbox.width, pz.bbox.height) * 0.10;

        franja.style.fill = "none";
        franja.style.stroke = COLORES.restriccionAlta;
        franja.style.strokeWidth = grosor;
        franja.style.strokeOpacity = "1";
        franja.style.pointerEvents = "none";

        elemento.parentNode.appendChild(franja);

    });
}


/* =========================================================
   REGISTRAR / ELIMINAR APLICACIÓN
========================================================= */

function registrarAplicacion() {

    const cuartel = document.getElementById("aplicacionCuartel").value;
    const condicion = document.getElementById("aplicacionCondicion").value;
    const momento = document.getElementById("aplicacionMomento").value;
    const tipo = document.getElementById("aplicacionTipo").value;
    const fecha = document.getElementById("fechaAplicacion").value;

    const mensaje = document.getElementById("mensajeAplicacion");

    if (!cuartel || condicion === "" || !momento || !tipo || !fecha) {
        mensaje.textContent = "⚠️ Complete todos los campos.";
        mensaje.style.background = "#fee2e2";
        return;
    }

    aplicaciones[cuartel] = {
        restriccionHoras: Number(condicion),
        fecha: fecha,
        momento: momento,
        tipo: tipo
    };

    refrescarTodo();

    const nombreTipo =
        tipo === "dron" ? "con dron"
            : tipo === "orillado" ? "de orillado"
                : "normal";

    const apto = Number(condicion) < HORAS_NO_APTO;

    mensaje.textContent =
        `✅ Aplicación ${nombreTipo} registrada para C${cuartel}. ` +
        (apto ? "Apto para labores de campo." : `No apto para labor (${condicion} h).`);

    mensaje.style.background = "#dcfce7";

    seleccionarCuartel(cuartel);
}

function eliminarAplicacion() {

    const cuartel = document.getElementById("aplicacionCuartel").value;
    const mensaje = document.getElementById("mensajeAplicacion");

    if (!cuartel) {
        mensaje.textContent = "⚠️ Seleccione el cuartel que desea corregir.";
        mensaje.style.background = "#fee2e2";
        return;
    }

    if (!aplicaciones[cuartel]) {
        mensaje.textContent = `ℹ️ C${cuartel} no tiene ninguna aplicación registrada.`;
        mensaje.style.background = "#fef9c3";
        return;
    }

    delete aplicaciones[cuartel];

    refrescarTodo();

    mensaje.textContent = `🗑️ Aplicación eliminada de C${cuartel}.`;
    mensaje.style.background = "#e0f2fe";

    seleccionarCuartel(cuartel);
}


/* =========================================================
   TURNOS DE RIEGO
========================================================= */

function actualizarTurnos() {

    const equipo = document.getElementById("riegoEquipo").value;
    const selectTurno = document.getElementById("riegoTurno");

    selectTurno.innerHTML = `<option value="">Seleccione turno</option>`;

    document.getElementById("listaCuartelesTurno").innerHTML =
        "Seleccione equipo y turno";

    if (!equipo) return;

    const subturnos = [
        ...new Set(
            Object.values(cuarteles)
                .filter(c => c.equipo === equipo && c.subturno)
                .map(c => c.subturno)
        )
    ];

    subturnos.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

    subturnos.forEach(subturno => {
        const opcion = document.createElement("option");
        opcion.value = subturno;
        opcion.textContent = `Turno ${subturno}`;
        selectTurno.appendChild(opcion);
    });
}

function cuartelesDelSubturno(equipo, subturno) {

    return Object.keys(cuarteles)
        .filter(numero =>
            cuarteles[numero].equipo === equipo &&
            cuarteles[numero].subturno === subturno
        )
        .sort(compararIds);
}

function mostrarCuartelesTurno() {

    const equipo = document.getElementById("riegoEquipo").value;
    const subturno = document.getElementById("riegoTurno").value;
    const contenedor = document.getElementById("listaCuartelesTurno");

    if (!equipo || !subturno) {
        contenedor.innerHTML = "Seleccione equipo y turno";
        return;
    }

    contenedor.innerHTML = "";

    cuartelesDelSubturno(equipo, subturno).forEach(numero => {
        const chip = document.createElement("span");
        chip.className = "cuartel-chip";
        chip.textContent = `C${numero}`;
        contenedor.appendChild(chip);
    });
}

function actualizarCampoReingreso() {

    const tipo = document.querySelector('input[name="tipoRiego"]:checked');
    const contenedor = document.getElementById("campoHorasReingreso");

    if (!contenedor) return;

    contenedor.style.display =
        tipo && tipo.value === "reingreso" ? "flex" : "none";
}


/* =========================================================
   REGISTRAR / ELIMINAR RIEGO
========================================================= */

function registrarRiego() {

    const equipo = document.getElementById("riegoEquipo").value;
    const subturno = document.getElementById("riegoTurno").value;
    const fecha = document.getElementById("fechaRiego").value;
    const hora = document.getElementById("horaRiego").value;
    const tipo = document.querySelector('input[name="tipoRiego"]:checked');
    const horasReingreso = document.getElementById("riegoHorasReingreso").value;

    const mensaje = document.getElementById("mensajeRiego");

    if (!equipo || !subturno || !fecha || !hora || !tipo) {
        mensaje.textContent = "⚠️ Complete todos los campos.";
        mensaje.style.background = "#fee2e2";
        return;
    }

    const conReingreso = tipo.value === "reingreso";

    if (conReingreso && !horasReingreso) {
        mensaje.textContent = "⚠️ Seleccione las horas de reingreso.";
        mensaje.style.background = "#fee2e2";
        return;
    }

    const lista = cuartelesDelSubturno(equipo, subturno);

    lista.forEach(numero => {
        riegos[numero] = {
            equipo: equipo,
            subturno: subturno,
            fecha: fecha,
            hora: hora,
            reingreso: conReingreso,
            horasReingreso: conReingreso ? Number(horasReingreso) : 0
        };
    });

    refrescarTodo();

    const tipoTexto = conReingreso
        ? `🔴 CON REINGRESO (${horasReingreso} H)`
        : "🔵 SIN TIEMPO DE REINGRESO";

    mensaje.textContent =
        `✅ Riego registrado para ${lista.length} cuarteles (turno ${subturno}). ${tipoTexto}`;

    mensaje.style.background = "#dcfce7";
}

function eliminarRiego() {

    const equipo = document.getElementById("riegoEquipo").value;
    const subturno = document.getElementById("riegoTurno").value;
    const mensaje = document.getElementById("mensajeRiego");

    if (!equipo || !subturno) {
        mensaje.textContent = "⚠️ Seleccione el equipo y turno que desea corregir.";
        mensaje.style.background = "#fee2e2";
        return;
    }

    const lista = cuartelesDelSubturno(equipo, subturno)
        .filter(numero => riegos[numero]);

    if (lista.length === 0) {
        mensaje.textContent = `ℹ️ El turno ${subturno} no tiene riegos registrados.`;
        mensaje.style.background = "#fef9c3";
        return;
    }

    lista.forEach(numero => { delete riegos[numero]; });

    refrescarTodo();

    mensaje.textContent =
        `🗑️ Riego eliminado de ${lista.length} cuarteles (turno ${subturno}).`;

    mensaje.style.background = "#e0f2fe";
}


/* =========================================================
   ESTADO DE CAMPO
========================================================= */

function mostrarEstadoCampo(numero) {

    const contenedor = document.getElementById("estadoCampo");

    if (!numero) {
        contenedor.innerHTML = "Seleccione un cuartel";
        return;
    }

    const estado = obtenerEstadoCuartel(numero);

    if (estado.noApto) {

        contenedor.innerHTML = `
            <div class="campo-no-disponible">❌ NO APTO PARA LABOR</div>
            <p>${estado.texto}</p>
        `;

    } else if (estado.horasMaximas > 0) {

        contenedor.innerHTML = `
            <div class="campo-disponible">✅ APTO PARA LABOR</div>
            <p>${estado.texto}</p>
        `;

    } else {

        contenedor.innerHTML = `
            <div class="campo-disponible">✅ DISPONIBLE PARA LABOR</div>
            <p>El cuartel puede registrarse para labores.</p>
        `;

    }
}


/* =========================================================
   REGISTRAR / ELIMINAR LABOR
========================================================= */

function registrarLabor() {

    const cuartel = document.getElementById("campoCuartel").value;
    const mensaje = document.getElementById("mensajeCampo");

    if (!cuartel) {
        mensaje.textContent = "⚠️ Seleccione un cuartel.";
        mensaje.style.background = "#fee2e2";
        return;
    }

    const estado = obtenerEstadoCuartel(cuartel);

    if (estado.noApto) {
        mensaje.textContent =
            `❌ No se puede registrar C${cuartel}: no apto (${estado.texto}).`;
        mensaje.style.background = "#fee2e2";
        return;
    }

    labores[cuartel] = {
        registrado: true,
        fecha: new Date().toISOString()
    };

    refrescarTodo();

    mensaje.textContent = `✅ Labor registrada correctamente en C${cuartel}.`;
    mensaje.style.background = "#dcfce7";
}

function eliminarLabor() {

    const cuartel = document.getElementById("campoCuartel").value;
    const mensaje = document.getElementById("mensajeCampo");

    if (!cuartel) {
        mensaje.textContent = "⚠️ Seleccione el cuartel que desea corregir.";
        mensaje.style.background = "#fee2e2";
        return;
    }

    if (!labores[cuartel]) {
        mensaje.textContent = `ℹ️ C${cuartel} no tiene labor registrada.`;
        mensaje.style.background = "#fef9c3";
        return;
    }

    delete labores[cuartel];

    refrescarTodo();

    mensaje.textContent = `🗑️ Labor eliminada de C${cuartel}.`;
    mensaje.style.background = "#e0f2fe";
}


/* =========================================================
   COLOR DEL TEXTO (según el fondo del cuartel)
========================================================= */

function obtenerColorTexto(color) {

    if (color === COLORES.restriccionAlta) return "#ffffff";
    if (color === COLORES.restriccionMedia) return "#7f1d1d";
    if (color === COLORES.sinRestriccion) return "#14532d";
    if (color === COLORES.riego) return "#075985";

    return "#222222";
}


/* =========================================================
   INFO DE APLICACIÓN

   Línea 1:  Ap. 12-OCT   (normal: Ap. | dron: A.dr. | orillado: A.or)
   Línea 2:  24 H / DÍA   (horas de restricción / DÍA o NOCHE)

   Se intenta escribir DENTRO del cuartel (esquivando el número
   del cuartel y respetando su forma). Si no hay espacio, se usa
   un cuadro aparte con línea guía que no tapa cuarteles vecinos.
========================================================= */

function lineasAplicacion(aplicacion, color) {

    const tipo = aplicacion.tipo === "dron" ? "A.dr."
        : aplicacion.tipo === "orillado" ? "A.or"
            : "Ap.";

    return [
        { texto: `${tipo} ${formatearFechaCorta(aplicacion.fecha)}`, color: color },
        { texto: `${aplicacion.restriccionHoras} H / ${aplicacion.momento === "dia" ? "DÍA" : "NOCHE"}`, color: color }
    ];
}

function colocarInfoAplicacion(numero) {

    const aplicacion = aplicaciones[numero];
    if (!aplicacion) return;

    const elemento = document.getElementById(numero);
    if (!elemento) return;

    const padre = elemento.parentNode;
    if (!padre) return;

    const caja = bboxCuarteles[numero] || elemento.getBBox();

    const grupo = crear("g", {
        id: `info-cuartel-${numero}`,
        class: "informacion-cuartel"
    });

    const estado = obtenerEstadoCuartel(numero);
    const lineas = lineasAplicacion(aplicacion, obtenerColorTexto(estado.color));

    let colocado = null;

    if (!FORZAR_CALLOUT[numero]) {
        colocado = ubicarTextoInterior(numero, caja, lineas);
    }

    if (colocado) {

        dibujarTextoInterior(grupo, colocado.rect, colocado.fs, lineas);
        zonasOcupadas.push(colocado.rect);
        infoInterior[numero] = colocado.rect;

    } else {

        const colorBorde = estado.color === COLORES.disponible ? "#6b7280" : estado.color;
        dibujarCallout(grupo, numero, caja, lineas, colorBorde);

    }

    padre.appendChild(grupo);
}


/* ---------- Texto dentro del cuartel ---------- */

function ubicarTextoInterior(numero, caja, lineas) {

    const n = lineas.length;
    const anchoUnidad = anchoMaximo(lineas);
    const etiqueta = etiquetasCuarteles[numero];
    const pad = 0.3;

    const regiones = [];

    if (etiqueta) {
        const bajoEtiqueta = etiqueta.y + etiqueta.height + pad;
        const derechaEtiqueta = etiqueta.x + etiqueta.width + pad;

        regiones.push({ x: caja.x, y: bajoEtiqueta, w: caja.width, h: caja.y + caja.height - bajoEtiqueta });
        regiones.push({ x: derechaEtiqueta, y: caja.y, w: caja.x + caja.width - derechaEtiqueta, h: caja.height });
        regiones.push({ x: caja.x, y: caja.y, w: etiqueta.x - pad - caja.x, h: caja.height });
        regiones.push({ x: caja.x, y: caja.y, w: caja.width, h: etiqueta.y - pad - caja.y });
    } else {
        regiones.push({ x: caja.x, y: caja.y, w: caja.width, h: caja.height });
    }

    let mejor = null;

    regiones.forEach(r => {

        if (r.w < 3 || r.h < 3) return;

        let fs = Math.min(
            FONT_MAX_INTERIOR,
            r.h * 0.92 / (n * INTERLINEADO),
            r.w * 0.94 / anchoUnidad
        );

        for (let i = 0; i < 5 && fs >= FONT_MIN_INTERIOR; i++, fs *= 0.93) {

            const rect = probarTexto(numero, r, fs, n, anchoUnidad);

            if (rect) {
                if (!mejor || fs > mejor.fs) mejor = { rect: rect, fs: fs };
                return;
            }

        }

    });

    return mejor;
}

function probarTexto(numero, r, fs, n, anchoUnidad) {

    const ancho = anchoUnidad * fs;
    const alto = n * fs * INTERLINEADO;

    if (ancho > r.w || alto > r.h) return null;

    const xs = [r.x + (r.w - ancho) / 2, r.x + 0.3, r.x + r.w - ancho - 0.3];
    const ys = [r.y + r.h - alto - 0.2, r.y + (r.h - alto) / 2, r.y + 0.2];

    for (const y of ys) {
        for (const x of xs) {
            const rect = { x: x, y: y, width: ancho, height: alto };
            if (rectDentroDeCuartel(numero, rect)) return rect;
        }
    }

    return null;
}

function dibujarTextoInterior(grupo, rect, fs, lineas) {

    lineas.forEach((linea, i) => {

        const halo = linea.color === "#ffffff" ? "#7f1d1d" : "#ffffff";

        const t = crear("text", {
            x: rect.x + rect.width / 2,
            y: rect.y + fs * 0.9 + i * fs * INTERLINEADO,
            "text-anchor": "middle",
            "font-size": fs,
            "font-family": "Arial, sans-serif",
            "font-weight": "bold",
            fill: linea.color,
            stroke: halo,
            "stroke-width": fs * 0.1,
            "stroke-linejoin": "round",
            "paint-order": "stroke"
        }, linea.texto);

        // Estilos en línea: ganan sobre el CSS y viajan en la imagen descargada
        t.style.stroke = halo;
        t.style.strokeWidth = fs * 0.1;
        t.style.paintOrder = "stroke";

        grupo.appendChild(t);

    });
}


/* ---------- Cuadro aparte (callout) ---------- */

function candidatosCallout(caja, w, h, distancias) {

    const cx = caja.x + caja.width / 2;
    const cy = caja.y + caja.height / 2;

    const dys = [0, h * 0.6, -h * 0.6, h * 1.2, -h * 1.2];
    const dxs = [0, w * 0.5, -w * 0.5, w * 1.0, -w * 1.0];

    const lista = [];

    distancias.forEach(d => {

        dys.forEach(dy => lista.push({
            lado: "derecha",
            x: caja.x + caja.width + d,
            y: cy - h / 2 + dy,
            ancla: { x: caja.x + caja.width, y: limitar(cy + dy, caja.y, caja.y + caja.height) }
        }));

        dys.forEach(dy => lista.push({
            lado: "izquierda",
            x: caja.x - d - w,
            y: cy - h / 2 + dy,
            ancla: { x: caja.x, y: limitar(cy + dy, caja.y, caja.y + caja.height) }
        }));

        dxs.forEach(dx => lista.push({
            lado: "abajo",
            x: cx - w / 2 + dx,
            y: caja.y + caja.height + d,
            ancla: { x: limitar(cx + dx, caja.x, caja.x + caja.width), y: caja.y + caja.height }
        }));

        dxs.forEach(dx => lista.push({
            lado: "arriba",
            x: cx - w / 2 + dx,
            y: caja.y - d - h,
            ancla: { x: limitar(cx + dx, caja.x, caja.x + caja.width), y: caja.y }
        }));

    });

    return lista;
}

function ubicarCallout(numero, caja, w, h) {

    const gap = 2.8;
    const orden = PREFERENCIA_CALLOUT[numero] || ORDEN_LADOS;

    const candidatos = candidatosCallout(caja, w, h, [gap, gap * 3, gap * 6])
        .sort((a, b) => orden.indexOf(a.lado) - orden.indexOf(b.lado));

    let mejor = null;
    let mejorPuntaje = Infinity;

    for (const cand of candidatos) {

        const puntaje = puntuarRect(
            { x: cand.x, y: cand.y, width: w, height: h },
            [String(numero)]
        );

        if (puntaje < mejorPuntaje) {
            mejorPuntaje = puntaje;
            mejor = cand;
        }

        if (puntaje < 1) break;
    }

    return mejor || candidatos[0];
}

function dibujarCallout(grupo, numero, caja, lineas, colorBorde) {

    const fs = FONT_CALLOUT;
    const lh = fs * INTERLINEADO;
    const padX = 1.6;
    const padY = 1.3;

    const w = anchoMaximo(lineas) * fs + padX * 2;
    const h = lineas.length * lh + padY * 2 - (lh - fs) * 0.5;

    const pos = ubicarCallout(numero, caja, w, h);

    const centroCaja = { x: pos.x + w / 2, y: pos.y + h / 2 };

    grupo.appendChild(crear("line", {
        x1: pos.ancla.x, y1: pos.ancla.y,
        x2: centroCaja.x, y2: centroCaja.y,
        stroke: "#4b5563",
        "stroke-width": 0.3,
        "stroke-dasharray": "0.8,0.6"
    }));

    grupo.appendChild(crear("circle", {
        cx: pos.ancla.x, cy: pos.ancla.y, r: 0.7, fill: "#4b5563"
    }));

    grupo.appendChild(crear("rect", {
        x: pos.x, y: pos.y, width: w, height: h,
        rx: 0.8, fill: "#ffffff",
        stroke: colorBorde, "stroke-width": 0.45
    }));

    lineas.forEach((linea, i) => {

        const color = linea.color === "#ffffff" ? "#7f1d1d" : linea.color;

        const t = crear("text", {
            x: pos.x + padX,
            y: pos.y + padY + fs * 0.85 + i * lh,
            "font-size": fs,
            "font-family": "Arial, sans-serif",
            "font-weight": "bold",
            fill: color
        }, linea.texto);

        t.style.stroke = "none";
        grupo.appendChild(t);

    });

    zonasOcupadas.push({ x: pos.x, y: pos.y, width: w, height: h });
}


/* =========================================================
   INFO DE RIEGO — UNA SOLA CAJA POR TURNO

   Línea 1:  R / 12-OCT            (riego sin restricción)
             R.R 24 H / 12-OCT     (riego con reingreso)
   Línea 2:  H.I 10:00 AM
   Línea 3:  C: 1-2-3              (cuarteles afectados)

   Todo el turno se pinta, pero la información se escribe una
   sola vez, sobre el turno, buscando el sitio donde menos
   estorbe (sin tapar cuarteles de otros turnos).
========================================================= */

function obtenerGruposRiego() {

    const grupos = {};

    Object.keys(riegos).forEach(numero => {

        const r = riegos[numero];
        const clave = `${r.equipo}-${r.subturno}`;

        if (!grupos[clave]) {
            grupos[clave] = { clave: clave, riego: r, cuarteles: [] };
        }

        grupos[clave].cuarteles.push(numero);

    });

    return Object.keys(grupos).map(k => {
        grupos[k].cuarteles.sort(compararIds);
        return grupos[k];
    });
}

function envolverCuarteles(ids) {

    const maxCaracteres = 17;
    const lineas = [];
    let actual = "C: ";
    let primero = true;

    ids.forEach(id => {

        const pieza = (primero ? "" : "-") + id;

        if ((actual + pieza).length > maxCaracteres && !primero && actual.trim() !== "C:") {
            lineas.push(actual + "-");
            actual = id;
        } else {
            actual += pieza;
        }

        primero = false;

    });

    lineas.push(actual);
    return lineas;
}

function colocarInfoRiegoGrupo(g) {

    const ids = g.cuarteles.filter(id => bboxCuarteles[id]);
    if (!ids.length) return;

    const primero = document.getElementById(ids[0]);
    if (!primero || !primero.parentNode) return;

    const r = g.riego;
    const fecha = formatearFechaCorta(r.fecha);

    const textos = [
        r.reingreso ? `R.R ${r.horasReingreso} H / ${fecha}` : `R / ${fecha}`,
        `H.I ${formatearHora(r.hora)}`
    ].concat(envolverCuarteles(ids));

    const colorBorde = r.reingreso ? "#b91c1c" : "#0369a1";

    const fs = FONT_RIEGO;
    const lh = fs * INTERLINEADO;
    const padX = 1.3;
    const padY = 1.0;

    const w = anchoMaximo(textos.map(t => ({ texto: t }))) * fs + padX * 2;
    const h = textos.length * lh + padY * 2 - (lh - fs) * 0.5;

    const cajas = ids.reduce((acc, id) => acc.concat(cajasDe(id)), []);
    const union = unirCajas(cajas);

    const porArea = ids.slice().sort((a, b) =>
        bboxCuarteles[b].width * bboxCuarteles[b].height -
        bboxCuarteles[a].width * bboxCuarteles[a].height
    );

    // Candidatos: sobre el propio turno primero, luego a los lados
    const candidatos = [];
    const dys = [0, h * 0.7, -h * 0.7, h * 1.4, -h * 1.4];

    const cx0 = union.x + union.width / 2;
    const cy0 = union.y + union.height / 2;

    dys.forEach(dy => [0, w * 0.5, -w * 0.5].forEach(dx => {
        candidatos.push({ x: cx0 - w / 2 + dx, y: cy0 - h / 2 + dy, fuera: false });
    }));

    porArea.forEach(id => {
        const b = bboxCuarteles[id];
        dys.forEach(dy => {
            candidatos.push({
                x: b.x + b.width / 2 - w / 2,
                y: b.y + b.height / 2 - h / 2 + dy,
                fuera: false
            });
        });
    });

    // Rejilla de posiciones sobre todo el turno
    const pasoX = Math.max(3, union.width / 20);
    const pasoY = Math.max(2.5, union.height / 10);
    const maxX = Math.max(union.x, union.x + union.width - w);
    const maxY = Math.max(union.y, union.y + union.height - h);

    for (let gy = union.y; gy <= maxY + 0.01; gy += pasoY) {
        for (let gx = union.x; gx <= maxX + 0.01; gx += pasoX) {
            candidatos.push({ x: gx, y: gy, fuera: false });
        }
    }

    candidatosCallout(union, w, h, [2.8, 8, 16, 28]).forEach(c => {
        candidatos.push({ x: c.x, y: c.y, fuera: true });
    });

    let mejor = null;
    let mejorPuntaje = Infinity;

    candidatos.forEach((cand, i) => {

        const rect = { x: cand.x, y: cand.y, width: w, height: h };
        const puntaje = puntuarRect(rect, ids) + (cand.fuera ? 4 : 0) + i * 0.002;

        if (puntaje < mejorPuntaje) {
            mejorPuntaje = puntaje;
            mejor = rect;
        }

    });

    if (!mejor) mejor = { x: cx0 - w / 2, y: cy0 - h / 2, width: w, height: h };

    const grupo = crear("g", {
        id: `info-riego-${g.clave}`,
        class: "informacion-cuartel info-riego-turno"
    });

    // Si el cuadro quedó fuera del turno, se une con una línea guía
    const centro = { x: mejor.x + w / 2, y: mejor.y + h / 2 };
    const idCentro = cuartelEnPunto(centro.x, centro.y);

    if (!idCentro || ids.indexOf(idCentro) === -1) {

        let cercano = ids[0];
        let menor = Infinity;

        ids.forEach(id => {
            const b = bboxCuarteles[id];
            const d = Math.hypot(b.x + b.width / 2 - centro.x, b.y + b.height / 2 - centro.y);
            if (d < menor) { menor = d; cercano = id; }
        });

        const bc = bboxCuarteles[cercano];
        const ancla = { x: bc.x + bc.width / 2, y: bc.y + bc.height / 2 };

        grupo.appendChild(crear("line", {
            x1: ancla.x, y1: ancla.y, x2: centro.x, y2: centro.y,
            stroke: "#4b5563", "stroke-width": 0.3, "stroke-dasharray": "0.8,0.6"
        }));

        grupo.appendChild(crear("circle", {
            cx: ancla.x, cy: ancla.y, r: 0.7, fill: "#4b5563"
        }));

    }

    grupo.appendChild(crear("rect", {
        x: mejor.x, y: mejor.y, width: w, height: h,
        rx: 0.8, fill: "#ffffff", "fill-opacity": 0.96,
        stroke: colorBorde, "stroke-width": 0.4
    }));

    textos.forEach((texto, i) => {

        const t = crear("text", {
            x: mejor.x + padX,
            y: mejor.y + padY + fs * 0.85 + i * lh,
            "font-size": fs,
            "font-family": "Arial, sans-serif",
            "font-weight": "bold",
            fill: i === 0 ? colorBorde : "#111827"
        }, texto);

        t.style.stroke = "none";
        grupo.appendChild(t);

    });

    primero.parentNode.appendChild(grupo);

    zonasOcupadas.push(mejor);
}


/* =========================================================
   ÍCONO TRABAJADORES

   Sin información en el cuartel: centrado y grande.
   Con texto de aplicación dentro: se coloca en el espacio
   libre más grande que deje el texto.
========================================================= */

function colocarIconoTrabajadores(numero) {

    const elemento = document.getElementById(numero);

    if (!elemento) {
        console.warn(`No existe C${numero} en SVG`);
        return;
    }

    if (!labores[numero]) return;

    const padre = elemento.parentNode;
    const caja = bboxCuarteles[numero] || elemento.getBBox();
    const lado = Math.min(caja.width, caja.height);

    let centroX = caja.x + caja.width / 2;
    let centroY = caja.y + caja.height / 2;
    let tamano = lado * 0.55;

    const texto = infoInterior[numero];

    if (texto) {

        const finTextoX = texto.x + texto.width;
        const finTextoY = texto.y + texto.height;

        const bandas = [
            { x: caja.x, y: caja.y, w: caja.width, h: texto.y - caja.y },
            { x: caja.x, y: finTextoY, w: caja.width, h: caja.y + caja.height - finTextoY },
            { x: caja.x, y: caja.y, w: texto.x - caja.x, h: caja.height },
            { x: finTextoX, y: caja.y, w: caja.x + caja.width - finTextoX, h: caja.height }
        ];

        let mejorBanda = null;
        let mejorTam = -1;

        bandas.forEach(b => {
            const tam = Math.min(Math.max(b.h, 0) * 0.9 / 0.7, Math.max(b.w, 0) * 0.9 / 1.55);
            if (tam > mejorTam) { mejorTam = tam; mejorBanda = b; }
        });

        tamano = Math.max(Math.min(mejorTam, lado * 0.55), lado * 0.2);
        centroX = mejorBanda.x + mejorBanda.w / 2;
        centroY = mejorBanda.y + mejorBanda.h / 2;
    }

    const grupo = crear("g", {
        id: `trabajadores-${numero}`,
        class: "icono-trabajadores",
        transform: `translate(${centroX}, ${centroY})`
    });

    grupo.appendChild(crearTrabajadorSVG(-tamano * 0.45, 0, tamano * 0.9));
    grupo.appendChild(crearTrabajadorSVG(0, -tamano * 0.08, tamano));
    grupo.appendChild(crearTrabajadorSVG(tamano * 0.45, 0, tamano * 0.9));

    padre.appendChild(grupo);

    zonasOcupadas.push({
        x: centroX - tamano * 0.78,
        y: centroY - tamano * 0.41,
        width: tamano * 1.56,
        height: tamano * 0.7
    });
}

function crearTrabajadorSVG(x, y, tamano) {

    const grupo = crear("g", {
        transform: `translate(${x}, ${y}) scale(${tamano / 100})`
    });

    grupo.appendChild(crear("circle", { cx: 0, cy: -23, r: 10, fill: "#263238" }));

    grupo.appendChild(crear("path", {
        d: "M -22 8 Q -20 -10 0 -12 Q 20 -10 22 8 L 18 35 L -18 35 Z",
        fill: "#263238"
    }));

    ["-1", "1"].forEach(signo => {
        const s = Number(signo);
        grupo.appendChild(crear("line", {
            x1: 18 * s, y1: 0, x2: 32 * s, y2: 18,
            stroke: "#263238", "stroke-width": 8, "stroke-linecap": "round"
        }));
    });

    return grupo;
}


/* =========================================================
   LEYENDA: ELEMENTOS PENDIENTES (deshabilitados, no borrados)

   Para volver a mostrarlos: OCULTAR_LEYENDA_PENDIENTE = false
========================================================= */

function aplicarVisibilidadLeyenda() {

    document.querySelectorAll(".leyenda > span").forEach(item => {

        const texto = item.textContent.trim();
        const pendiente = LEYENDA_PENDIENTE.some(t => texto.indexOf(t) !== -1);

        if (!pendiente) return;

        item.dataset.oculto = OCULTAR_LEYENDA_PENDIENTE ? "1" : "0";
        item.style.display = OCULTAR_LEYENDA_PENDIENTE ? "none" : "";

    });
}


/* =========================================================
   BOTÓN: ACTUALIZAR MAPA (NUEVO DÍA)

   Deja el mapa en blanco (borra aplicaciones, riegos y labores)
   y pone la fecha de hoy en el encabezado y en los formularios.
========================================================= */

function crearBotonNuevoDia() {

    const descargar = document.getElementById("btnDescargarMapa");

    if (!descargar || document.getElementById("btnNuevoDia")) return;

    const boton = document.createElement("button");
    boton.id = "btnNuevoDia";
    boton.className = "btn-descargar";
    boton.textContent = "🔄 Actualizar mapa";
    boton.style.background = "#c98500";
    boton.addEventListener("click", reiniciarMapa);

    const caja = document.createElement("div");
    caja.style.display = "flex";
    caja.style.gap = "8px";
    caja.style.flexWrap = "wrap";

    descargar.parentNode.insertBefore(caja, descargar);
    caja.appendChild(boton);
    caja.appendChild(descargar);
}

function reiniciarMapa() {

    const hoy = new Date().toLocaleDateString("es-PE", {
        day: "2-digit", month: "2-digit", year: "numeric"
    });

    const confirmar = confirm(
        `¿Actualizar el mapa?\n\nSe borrarán todas las aplicaciones, riegos y labores, y la fecha pasará a ${hoy}.`
    );

    if (!confirmar) return;

    aplicaciones = {};
    riegos = {};
    labores = {};

    refrescarTodo();
    colocarFechaActual();

    const hoyISO = new Date().toLocaleDateString("en-CA");

    ["fechaAplicacion", "fechaRiego"].forEach(id => {
        const campo = document.getElementById(id);
        if (campo) campo.value = hoyISO;
    });

    ["mensajeAplicacion", "mensajeRiego", "mensajeCampo"].forEach(id => {
        const mensaje = document.getElementById(id);
        if (mensaje) {
            mensaje.textContent = "";
            mensaje.style.background = "";
        }
    });

    const selectCampo = document.getElementById("campoCuartel");
    if (selectCampo) mostrarEstadoCampo(selectCampo.value);

    const seleccionado = document.getElementById("estadoSeleccionado");
    if (seleccionado) seleccionado.textContent = "";

    const mensajeApl = document.getElementById("mensajeAplicacion");
    if (mensajeApl) {
        mensajeApl.textContent = `🔄 Mapa actualizado. Fecha: ${hoy}.`;
        mensajeApl.style.background = "#e0f2fe";
    }
}


/* =========================================================
   CAMBIAR SECCIÓN
========================================================= */

function mostrarSeccion(nombre, boton) {

    document.querySelectorAll(".seccion").forEach(s => s.classList.remove("activa"));
    document.querySelectorAll(".menu-btn").forEach(b => b.classList.remove("activo"));

    if (nombre === "aplicaciones") document.getElementById("seccionAplicaciones").classList.add("activa");
    if (nombre === "riegos") document.getElementById("seccionRiegos").classList.add("activa");
    if (nombre === "campo") document.getElementById("seccionCampo").classList.add("activa");

    boton.classList.add("activo");
}


/* =========================================================
   DESCARGAR MAPA COMPLETO COMO PNG

   Incluye título, fecha, mapa con toda su información y la
   leyenda enmarcada en dos columnas. Se exporta en alta
   resolución (~4000 px de ancho) para que las letras pequeñas
   del mapa se lean bien al acercar la imagen.
========================================================= */

function descargarMapaComoImagen() {

    const boton = document.getElementById("btnDescargarMapa");
    const svgOriginal = document.querySelector("#mapaContainer svg");

    if (!svgOriginal || !anchoMapaSVG || !altoMapaSVG) {
        alert("El mapa todavía no está listo para descargar.");
        return;
    }

    const restaurarBoton = function () {
        if (boton) {
            boton.disabled = false;
            boton.textContent = "📥 Descargar mapa";
        }
    };

    if (boton) {
        boton.disabled = true;
        boton.textContent = "⏳ Generando imagen...";
    }

    try {

        const escala = anchoMapaSVG / 580;
        const altoTitulo = 34 * escala;

        const items = leerLeyendaDelDOM();
        const columnas = 2;
        const filas = Math.ceil(items.length / columnas);
        const altoFila = 9 * escala;
        const altoLeyenda = filas * altoFila + 23 * escala;

        const anchoTotal = anchoMapaSVG;
        const altoTotal = altoTitulo + altoMapaSVG + altoLeyenda;

        const svgFinal = crear("svg", {
            xmlns: SVG_NS,
            width: anchoTotal,
            height: altoTotal,
            viewBox: `0 0 ${anchoTotal} ${altoTotal}`
        });

        // Fondo
        svgFinal.appendChild(crear("rect", {
            x: 0, y: 0, width: anchoTotal, height: altoTotal, fill: "#ffffff"
        }));

        // Título
        svgFinal.appendChild(crear("text", {
            x: anchoTotal / 2, y: altoTitulo * 0.45,
            "text-anchor": "middle",
            "font-family": "Arial, sans-serif",
            "font-size": 10 * escala,
            "font-weight": "bold",
            fill: "#8a5a00"
        }, "FUNDO PAPAYO"));

        // Subtítulo con fecha
        const elementoFecha = document.getElementById("fechaActual");
        const fechaTexto = elementoFecha ? elementoFecha.textContent : "";

        svgFinal.appendChild(crear("text", {
            x: anchoTotal / 2, y: altoTitulo * 0.80,
            "text-anchor": "middle",
            "font-family": "Arial, sans-serif",
            "font-size": 5 * escala,
            fill: "#555555"
        }, `Programación de aplicaciones, riegos y campo — ${fechaTexto}`));

        // Mapa
        const mapaClon = svgOriginal.cloneNode(true);
        mapaClon.removeAttribute("id");
        mapaClon.setAttribute("x", 0);
        mapaClon.setAttribute("y", altoTitulo);
        mapaClon.setAttribute("width", anchoMapaSVG);
        mapaClon.setAttribute("height", altoMapaSVG);
        svgFinal.appendChild(mapaClon);

        // Caja de leyenda
        const margen = 3 * escala;
        const yLeyenda = altoTitulo + altoMapaSVG + 4 * escala;

        svgFinal.appendChild(crear("rect", {
            x: margen, y: yLeyenda,
            width: anchoTotal - margen * 2,
            height: altoTotal - yLeyenda - margen,
            rx: 0.8 * escala,
            fill: "#ffffff", stroke: "#374151",
            "stroke-width": 0.45 * escala
        }));

        svgFinal.appendChild(crear("text", {
            x: 10 * escala, y: yLeyenda + 6.5 * escala,
            "font-family": "Arial, sans-serif",
            "font-size": 5.2 * escala,
            "font-weight": "bold",
            fill: "#374151"
        }, "LEYENDA"));

        const anchoColumna = (anchoTotal - 20 * escala) / columnas;
        const inicioItemsY = yLeyenda + 12 * escala;

        items.forEach((item, indice) => {

            const col = indice % columnas;
            const fila = Math.floor(indice / columnas);

            const x = 10 * escala + col * anchoColumna;
            const y = inicioItemsY + fila * altoFila;

            dibujarSwatchLeyenda(svgFinal, item, x, y, escala);

            svgFinal.appendChild(crear("text", {
                x: x + 9 * escala,
                y: y + 3.8 * escala,
                "font-family": "Arial, sans-serif",
                "font-size": 4.2 * escala,
                fill: "#333333"
            }, item.texto));

        });

        // SVG -> PNG
        const xml = new XMLSerializer().serializeToString(svgFinal);
        const svgDataUrl = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(xml);

        const escalaExportacion = Math.max(3, Math.min(10, 4000 / anchoTotal));

        const imagen = new Image();

        imagen.onload = function () {

            const canvas = document.createElement("canvas");
            canvas.width = Math.round(anchoTotal * escalaExportacion);
            canvas.height = Math.round(altoTotal * escalaExportacion);

            const contexto = canvas.getContext("2d");
            contexto.fillStyle = "#ffffff";
            contexto.fillRect(0, 0, canvas.width, canvas.height);
            contexto.drawImage(imagen, 0, 0, canvas.width, canvas.height);

            const enlace = document.createElement("a");
            const fechaArchivo = new Date().toISOString().slice(0, 10);

            enlace.download = `mapa_fundo_papayo_${fechaArchivo}.png`;
            enlace.href = canvas.toDataURL("image/png");

            document.body.appendChild(enlace);
            enlace.click();
            document.body.removeChild(enlace);

            restaurarBoton();
        };

        imagen.onerror = function () {
            console.error("No se pudo generar la imagen del mapa.");
            alert("No se pudo generar la imagen. Intente nuevamente.");
            restaurarBoton();
        };

        imagen.src = svgDataUrl;

    } catch (error) {

        console.error(error);
        alert("Ocurrió un error al generar la imagen del mapa.");
        restaurarBoton();

    }
}


/* =========================================================
   LEER LA LEYENDA DEL HTML
========================================================= */

function leerLeyendaDelDOM() {

    const resultado = [];

    document.querySelectorAll(".leyenda > span").forEach(item => {

        const texto = item.textContent.trim();
        if (!texto) return;
        if (item.dataset.oculto === "1") return;

        const swatchColor = item.querySelector(".color");
        const swatchOvalo = item.querySelector(".ovalo-paradero");
        const swatchFlecha = item.querySelector(".flecha");
        const swatchFranja = item.querySelector(".franja-leyenda");

        let tipo = "ninguno";
        let color = "#999999";

        if (swatchFlecha) {

            if (swatchFlecha.classList.contains("flecha-roja")) {
                tipo = "flecha-izquierda";
                color = "#dc2626";
            } else {
                tipo = "flecha-derecha";
                color = "#16a34a";
            }

        } else if (swatchFranja) {

            tipo = "franja";
            color = "#b91c1c";

        } else if (swatchOvalo) {

            tipo = "ovalo";
            color = getComputedStyle(swatchOvalo).backgroundColor;

        } else if (swatchColor) {

            tipo = "cuadro";
            color = getComputedStyle(swatchColor).backgroundColor;

        }

        resultado.push({ texto: texto, tipo: tipo, color: color });

    });

    return resultado;
}


/* =========================================================
   DIBUJAR SÍMBOLOS DE LA LEYENDA
========================================================= */

function dibujarSwatchLeyenda(svgFinal, item, x, y, escala) {

    const tamano = 5.5 * escala;

    if (item.tipo === "ninguno") return;

    if (item.tipo === "flecha-derecha" || item.tipo === "flecha-izquierda") {

        svgFinal.appendChild(crear("text", {
            x: x,
            y: y + tamano * 0.85,
            "font-size": tamano * 1.1,
            "font-weight": "bold",
            fill: item.color
        }, item.tipo === "flecha-derecha" ? "→" : "←"));

        return;
    }

    if (item.tipo === "franja") {

        svgFinal.appendChild(crear("rect", {
            x: x, y: y, width: tamano, height: tamano,
            fill: "none", stroke: "#b91c1c",
            "stroke-width": 1.2 * escala
        }));

        return;
    }

    if (item.tipo === "ovalo") {

        svgFinal.appendChild(crear("ellipse", {
            cx: x + tamano / 2, cy: y + tamano / 2,
            rx: tamano / 2, ry: tamano / 3.2,
            fill: item.color, stroke: "#1e3a8a",
            "stroke-width": 0.3 * escala
        }));

        return;
    }

    svgFinal.appendChild(crear("rect", {
        x: x, y: y, width: tamano, height: tamano,
        rx: 0.6 * escala,
        fill: item.color, stroke: "#999999",
        "stroke-width": 0.3 * escala
    }));
}