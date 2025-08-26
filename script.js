const curricula = {
  DERECHO: [
    // ---- SEMESTRE 1 ----
    { nombre: "Introducción al Derecho", semestre: 1, prereq: [] },
    { nombre: "Historia Constitucional de Chile", semestre: 1, prereq: [] },
    { nombre: "Instituciones Políticas", semestre: 1, prereq: [] },
    { nombre: "Fundamentos Filosóficos del Derecho", semestre: 1, prereq: [] },
    { nombre: "Estrategias para el Aprendizaje", semestre: 1, prereq: [] },

    // ---- SEMESTRE 2 ----
    { nombre: "Teoría de la Ley y Las Personas", semestre: 2, prereq: [] },
    { nombre: "Derechos Fundamentales", semestre: 2, prereq: [] },
    { nombre: "Fundamentos de la Economía", semestre: 2, prereq: [] },
    { nombre: "Fundamentos de la Investigación Jurídica", semestre: 2, prereq: [] },
    { nombre: "Filosofía del Derecho", semestre: 2, prereq: [] },
    { nombre: "Antropología", semestre: 2, prereq: [] },

    // ---- SEMESTRE 3 ----
    { nombre: "Acto Jurídico", semestre: 3, prereq: [] },
    { nombre: "Derecho Constitucional Orgánico", semestre: 3, prereq: [] },
    { nombre: "Derecho Individual del Trabajo", semestre: 3, prereq: [] },
    { nombre: "Derecho Procesal Orgánico", semestre: 3, prereq: [] },
    { nombre: "Ética", semestre: 3, prereq: [] },

    // ---- SEMESTRE 4 ----
    { nombre: "Bienes", semestre: 4, prereq: [] },
    { nombre: "Derecho Administrativo", semestre: 4, prereq: [] },
    { nombre: "Derecho Colectivo del Trabajo y de la Seguridad Social", semestre: 4, prereq: [] },
    { nombre: "Reglas Comunes a Todo Procedimiento", semestre: 4, prereq: [] },
    { nombre: "Argumentación y Expresión Oral", semestre: 4, prereq: [] },
    { nombre: "Electivo de Formación Integral 1", semestre: 4, prereq: [] },

    // ---- SEMESTRE 5 ----
    { nombre: "Obligaciones y Contratos", semestre: 5, prereq: [] },
    { nombre: "Teoría del Delito y de la Pena", semestre: 5, prereq: [] },
    { nombre: "Actos de Comercio", semestre: 5, prereq: [] },
    { nombre: "Procedimientos Declarativos", semestre: 5, prereq: [] },
    { nombre: "Métodos Colaborativos de Resolución de Conflictos", semestre: 5, prereq: [] },
    { nombre: "Electivo de Formación Integral 2", semestre: 5, prereq: [] },

    // ---- SEMESTRE 6 ----
    { nombre: "Responsabilidad Civil", semestre: 6, prereq: [] },
    { nombre: "Formas de Aparición del Delito", semestre: 6, prereq: [] },
    { nombre: "Derecho Societario", semestre: 6, prereq: [] },
    { nombre: "Recursos y Juicio Ejecutivo", semestre: 6, prereq: [] },
    { nombre: "Mediación, Negociación, Conciliación Judicial y Arbitraje", semestre: 6, prereq: [] },
    { nombre: "Electivo de Formación Integral 3", semestre: 6, prereq: [] },

    // ---- SEMESTRE 7 ----
    { nombre: "Derecho de Familia y Sucesorio", semestre: 7, prereq: [] },
    { nombre: "Derecho Penal Especial", semestre: 7, prereq: [] },
    { nombre: "Insolvencia y Derecho Concursal", semestre: 7, prereq: [] },
    { nombre: "Procedimientos Especiales", semestre: 7, prereq: [] },
    { nombre: "Redacción Legal", semestre: 7, prereq: [] },
    { nombre: "Electivo de Formación Integral 4", semestre: 7, prereq: [] },

    // ---- SEMESTRE 8 ----
    { nombre: "Ética y Responsabilidad Profesional", semestre: 8, prereq: [] },
    { nombre: "Derecho Penal Económico y Compliance", semestre: 8, prereq: [] },
    { nombre: "Derecho Tributario", semestre: 8, prereq: [] },
    { nombre: "Derecho Procesal Penal", semestre: 8, prereq: [] },
    { nombre: "Derecho Económico Regulatorio", semestre: 8, prereq: [] },
    { nombre: "Destrezas de Litigación Oral", semestre: 8, prereq: [] },

    // ---- SEMESTRE 9 ----
    { nombre: "Clínica Jurídica 1", semestre: 9, prereq: [] },
    { nombre: "Seminario de Investigación", semestre: 9, prereq: [] },
    { nombre: "Electivo de Profundización 1", semestre: 9, prereq: [] },
    { nombre: "Electivo de Profundización 2", semestre: 9, prereq: [] },
    { nombre: "Electivo 1", semestre: 9, prereq: [] },

    // ---- SEMESTRE 10 ----
    { nombre: "Clínica Jurídica 2", semestre: 10, prereq: [] },
    { nombre: "Electivo de Profundización 3", semestre: 10, prereq: [] },
    { nombre: "Electivo 2", semestre: 10, prereq: [] },
    { nombre: "Seminario de Integración Jurídica", semestre: 10, prereq: [] }
  ],

const previaturas = {
  DERECHO: [
    { nombre: "Introducción al Derecho", prereq: [] },
    { nombre: "Teoría de la Ley de las Personas", prereq: ["Introducción al Derecho"] }, // ejemplo solicitado
    { nombre: "Instituciones Políticas", prereq: [] },
    { nombre: "Derechos Fundamentales", prereq: ["Instituciones Políticas"] },
    { nombre: "Fundamentos Filosóficos del Derecho", prereq: [] },
    { nombre: "Filosofía del Derecho", prereq: ["Fundamentos Filosóficos del Derecho"] },
    { nombre: "Acto Jurídico", prereq: ["Teoría de la Ley de las Personas"] },
    { nombre: "Derecho Constitucional Orgánico", prereq: ["Derechos Fundamentales"] },
    { nombre: "Fundamentos de la Economía", prereq: [] },
    { nombre: "Derecho Individual del Trabajo", prereq: ["Fundamentos de la Economía"] },
    { nombre: "Derecho Procesal Orgánico", prereq: ["Derechos Fundamentales"] },
    { nombre: "Antropología", prereq: [] },
    { nombre: "Ética", prereq: ["Antropología"] },
    { nombre: "Bienes", prereq: ["Acto Jurídico"] },
    { nombre: "Derecho Administrativo", prereq: ["Derecho Constitucional Orgánico"] },
    { nombre: "Derecho Colectivo del Trabajo y de la Seguridad Social", prereq: ["Derecho Individual del Trabajo"] },
    { nombre: "Reglas Comunes a Todo Procedimiento", prereq: ["Derecho Procesal Orgánico"] },
    { nombre: "Electivo de Formación Integral 1", prereq: ["Ética"] },
    { nombre: "Obligaciones y Contratos", prereq: ["Bienes"] },
    { nombre: "Teoría del Delito y de la Pena", prereq: ["Derechos Fundamentales"] },
    { nombre: "Actos de Comercio", prereq: ["Acto Jurídico"] },
    { nombre: "Procedimientos Declarativos", prereq: ["Reglas Comunes a Todo Procedimiento"] },
    { nombre: "Argumentación y Expresión Oral", prereq: [] },
    { nombre: "Métodos Colaborativos de Resolución de Conflictos", prereq: ["Argumentación y Expresión Oral"] },
    { nombre: "Responsabilidad Civil", prereq: ["Obligaciones y Contratos"] },
    { nombre: "Formas de Aparición del Delito", prereq: ["Teoría del Delito y de la Pena"] },
    { nombre: "Derecho Societario", prereq: ["Actos de Comercio"] },
    { nombre: "Recursos y Juicio Ejecutivo", prereq: ["Procedimientos Declarativos"] },
    { nombre: "Mediación, Negociación, Conciliación Judicial y Arbitraje", prereq: ["Métodos Colaborativos de Resolución de Conflictos"] },
    { nombre: "Derecho de Familia y Sucesorio", prereq: ["Responsabilidad Civil"] },
    { nombre: "Derecho Penal Especial", prereq: ["Formas de Aparición del Delito"] },
    { nombre: "Insolvencia y Derecho Concursal", prereq: ["Derecho Societario"] },
    { nombre: "Procedimientos Especiales", prereq: ["Procedimientos Declarativos"] },
    { nombre: "Redacción Legal", prereq: ["Mediación, Negociación, Conciliación Judicial y Arbitraje"] },
    { nombre: "Ética y Responsabilidad Profesional", prereq: ["Filosofía del Derecho"] },
    { nombre: "Derecho Penal Económico y Compliance", prereq: ["Derecho Penal Especial"] },
    { nombre: "Derecho Tributario", prereq: ["Obligaciones y Contratos"] },
    { nombre: "Derecho Procesal Penal", prereq: ["Derecho Penal Especial"] },
    { nombre: "Derecho Económico Regulatorio", prereq: ["Derecho Administrativo"] },
    { nombre: "Destrezas de Litigación Oral", prereq: ["Procedimientos Especiales"] },
    { nombre: "Clínica Jurídica 1", prereq: ["Procedimientos Especiales"] },
    { nombre: "Fundamentos de la Investigación Jurídica", prereq: [] },
    { nombre: "Seminario de Investigación", prereq: ["Fundamentos de la Investigación Jurídica"] },
    { nombre: "Clínica Jurídica 2", prereq: ["Clínica Jurídica 1"] },
    { nombre: "Seminario de Integración Jurídica", prereq: ["Todo aprobado hasta el noveno semestre"] }
  ],
/* =========================
   2) Utilidades y estado
   ========================= */

const $ = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

const STORAGE_KEY = (plan) => `malla:${plan}:aprobados`;

function cargarAprobados(plan){
  try{
    const raw = localStorage.getItem(STORAGE_KEY(plan));
    return raw ? JSON.parse(raw) : [];
  }catch{ return []; }
}
function guardarAprobados(plan, aprobados){
  localStorage.setItem(STORAGE_KEY(plan), JSON.stringify(aprobados));
}

function normalizar(str){ return str.normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase(); }

/* Previaturas especiales, p.ej. "todo hasta X semestre" */
function cumpleEspecial(asig, plan, aprobados){
  if(!asig.prereqEspecial) return true;
  const { tipo, semestreMax } = asig.prereqEspecial;
  if(tipo === "todoHastaSemestre"){
    const todasHasta = curricula[plan].filter(a => a.semestre <= semestreMax).map(a => a.nombre);
    return todasHasta.every(n => aprobados.includes(n));
  }
  return true;
}

/* Disponible si: (todas sus prereq aprobadas) y (reglas especiales OK) */
function disponible(asig, plan, aprobados){
  const basicas = (asig.prereq||[]).every(p => aprobados.includes(p));
  const especial = cumpleEspecial(asig, plan, aprobados);
  return basicas && especial;
}


/* =========================
   3) Render (grid continuo)
   ========================= */

const lista = $("#lista");
const planSelect = $("#planSelect");
const buscador = $("#buscador");
const btnMarcarTodos = $("#btnMarcarTodos");
const btnLimpiar = $("#btnLimpiar");

function crearCard(asig, plan, aprobados){
  const card = document.createElement("article");
  card.className = "card";

  const done = aprobados.includes(asig.nombre);
  const isDisponible = disponible(asig, plan, aprobados) || done;
  if(done) card.classList.add("done");
  if(!isDisponible && !done) card.classList.add("locked");

  const pill = document.createElement("span");
  pill.className = "state-pill " + (done ? "pill-done" : isDisponible ? "pill-enabled" : "pill-locked");
  pill.textContent = done ? "Aprobada" : isDisponible ? "Disponible" : "Bloqueada";
  card.appendChild(pill);

  const header = document.createElement("div");
  header.className = "card-header";

  const badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = plan;

  const title = document.createElement("h3");
  title.className = "card-title";
  title.textContent = asig.nombre;

  header.appendChild(badge);
  header.appendChild(title);
  card.appendChild(header);

  const prereq = document.createElement("p");
  prereq.className = "card-prereq";

  const faltantes = (asig.prereq||[]).filter(p => !aprobados.includes(p));
  const extra = asig.prereqEspecial
    ? (asig.prereqEspecial.tipo === "todoHastaSemestre"
        ? ` • Requiere todo hasta el semestre ${asig.prereqEspecial.semestreMax}`
        : "")
    : "";

  if((asig.prereq||[]).length === 0 && !asig.prereqEspecial){
    prereq.textContent = "Sin previaturas.";
  }else{
    const base = (asig.prereq||[]).length ? `Previaturas: ${asig.prereq.join(" • ")}` : "Previaturas: —";
    const falt = faltantes.length ? `<br><strong>Faltantes:</strong> ${faltantes.join(" • ")}` : "";
    prereq.innerHTML = `${base}${extra}${falt}`;
  }
  card.appendChild(prereq);

  const label = document.createElement("label");
  label.className = "checkbox";
  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = done;
  input.ariaLabel = `Marcar ${asig.nombre} como aprobada`;

  input.addEventListener("change", () => {
    const aprob = new Set(cargarAprobados(plan));
    if(input.checked){
      aprob.add(asig.nombre);
    }else{
      aprob.delete(asig.nombre);
    }
    const arr = Array.from(aprob);
    guardarAprobados(plan, arr);
    render();
  });

  if(card.classList.contains("locked")){
    input.disabled = true;
    label.title = "Bloqueada por previaturas pendientes.";
  }

  label.appendChild(input);
  label.appendChild(document.createTextNode("Aprobada"));
  card.appendChild(label);

  return card;
}

function render(){
  const plan = planSelect.value;
  const query = normalizar(buscador.value || "");
  const aprobados = cargarAprobados(plan);
  lista.innerHTML = "";

  const items = curricula[plan].filter(a =>
    normalizar(a.nombre).includes(query) ||
    (a.prereq||[]).some(p => normalizar(p).includes(query))
  );

  // Semestres presentes en los items filtrados, en orden
  const semestres = [...new Set(items.map(i => i.semestre))].sort((a,b)=>a-b);

  semestres.forEach(sem => {
    const delSem = items.filter(i => i.semestre === sem);
    if(delSem.length === 0) return;

    const header = document.createElement("h2");
    header.className = "sem-header";
    header.textContent = `Semestre ${sem}`;
    lista.appendChild(header);

    delSem.forEach(asig => {
      const card = crearCard(asig, plan, aprobados);
      lista.appendChild(card);
    });
  });
}


/* =========================
   4) Eventos / Inicio
   ========================= */

planSelect.addEventListener("change", render);
buscador.addEventListener("input", render);

btnMarcarTodos.addEventListener("click", () => {
  const plan = planSelect.value;
  const todos = curricula[plan].map(a => a.nombre);
  guardarAprobados(plan, todos);
  render();
});

btnLimpiar.addEventListener("click", () => {
  const plan = planSelect.value;
  guardarAprobados(plan, []);
  render();
});

document.addEventListener("DOMContentLoaded", render);
