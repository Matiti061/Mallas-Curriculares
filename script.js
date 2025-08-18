const curricula = {
  DERECHO: [
    // ---- SEMESTRE 1 ----
    { nombre: "Introducción al Derecho", semestre: 1, prereq: [] },
    { nombre: "Instituciones Políticas", semestre: 1, prereq: [] },
    { nombre: "Fundamentos Filosóficos del Derecho", semestre: 1, prereq: [] },
    { nombre: "Antropología", semestre: 1, prereq: [] },
    { nombre: "Fundamentos de la Economía", semestre: 1, prereq: [] },

    // ---- SEMESTRE 2 ----
    { nombre: "Teoría de la Ley de las Personas", semestre: 2, prereq: ["Introducción al Derecho"] },
    { nombre: "Derechos Fundamentales", semestre: 2, prereq: ["Instituciones Políticas"] },
    { nombre: "Ética", semestre: 2, prereq: ["Antropología"] },
    { nombre: "Derecho Individual del Trabajo", semestre: 2, prereq: ["Fundamentos de la Economía"] },

    // ---- SEMESTRE 3 ----
    { nombre: "Acto Jurídico", semestre: 3, prereq: ["Teoría de la Ley de las Personas"] },
    { nombre: "Derecho Constitucional Orgánico", semestre: 3, prereq: ["Derechos Fundamentales"] },
    { nombre: "Derecho Procesal Orgánico", semestre: 3, prereq: ["Derechos Fundamentales"] },
    { nombre: "Filosofía del Derecho", semestre: 3, prereq: ["Fundamentos Filosóficos del Derecho"] },

    // ---- SEMESTRE 4 ----
    { nombre: "Bienes", semestre: 4, prereq: ["Acto Jurídico"] },
    { nombre: "Derecho Administrativo", semestre: 4, prereq: ["Derecho Constitucional Orgánico"] },
    { nombre: "Derecho Colectivo del Trabajo y de la Seguridad Social", semestre: 4, prereq: ["Derecho Individual del Trabajo"] },
    { nombre: "Reglas Comunes a Todo Procedimiento", semestre: 4, prereq: ["Derecho Procesal Orgánico"] },
    { nombre: "Electivo de Formación Integral 1", semestre: 4, prereq: ["Ética"] },

    // ---- SEMESTRE 5 ----
    { nombre: "Obligaciones y Contratos", semestre: 5, prereq: ["Bienes"] },
    { nombre: "Teoría del Delito y de la Pena", semestre: 5, prereq: ["Derechos Fundamentales"] },
    { nombre: "Actos de Comercio", semestre: 5, prereq: ["Acto Jurídico"] },
    { nombre: "Procedimientos Declarativos", semestre: 5, prereq: ["Reglas Comunes a Todo Procedimiento"] },
    { nombre: "Argumentación y Expresión Oral", semestre: 5, prereq: [] },

    // ---- SEMESTRE 6 ----
    { nombre: "Métodos Colaborativos de Resolución de Conflictos", semestre: 6, prereq: ["Argumentación y Expresión Oral"] },
    { nombre: "Responsabilidad Civil", semestre: 6, prereq: ["Obligaciones y Contratos"] },
    { nombre: "Formas de Aparición del Delito", semestre: 6, prereq: ["Teoría del Delito y de la Pena"] },
    { nombre: "Derecho Societario", semestre: 6, prereq: ["Actos de Comercio"] },
    { nombre: "Recursos y Juicio Ejecutivo", semestre: 6, prereq: ["Procedimientos Declarativos"] },

    // ---- SEMESTRE 7 ----
    { nombre: "Mediación, Negociación, Conciliación Judicial y Arbitraje", semestre: 7, prereq: ["Métodos Colaborativos de Resolución de Conflictos"] },
    { nombre: "Derecho de Familia y Sucesorio", semestre: 7, prereq: ["Responsabilidad Civil"] },
    { nombre: "Derecho Penal Especial", semestre: 7, prereq: ["Formas de Aparición del Delito"] },
    { nombre: "Insolvencia y Derecho Concursal", semestre: 7, prereq: ["Derecho Societario"] },
    { nombre: "Procedimientos Especiales", semestre: 7, prereq: ["Procedimientos Declarativos"] },

    // ---- SEMESTRE 8 ----
    { nombre: "Redacción Legal", semestre: 8, prereq: ["Mediación, Negociación, Conciliación Judicial y Arbitraje"] },
    { nombre: "Ética y Responsabilidad Profesional", semestre: 8, prereq: ["Filosofía del Derecho"] },
    { nombre: "Derecho Penal Económico y Compliance", semestre: 8, prereq: ["Derecho Penal Especial"] },
    { nombre: "Derecho Tributario", semestre: 8, prereq: ["Obligaciones y Contratos"] },
    { nombre: "Derecho Procesal Penal", semestre: 8, prereq: ["Derecho Penal Especial"] },
    { nombre: "Derecho Económico Regulatorio", semestre: 8, prereq: ["Derecho Administrativo"] },

    // ---- SEMESTRE 9 ----
    { nombre: "Destrezas de Litigación Oral", semestre: 9, prereq: ["Procedimientos Especiales"] },
    { nombre: "Clínica Jurídica 1", semestre: 9, prereq: ["Procedimientos Especiales"] },
    { nombre: "Fundamentos de la Investigación Jurídica", semestre: 9, prereq: [] },
    { nombre: "Seminario de Investigación", semestre: 9, prereq: ["Fundamentos de la Investigación Jurídica"] },

    // ---- SEMESTRE 10 ----
    { nombre: "Clínica Jurídica 2", semestre: 10, prereq: ["Clínica Jurídica 1"] },
    { nombre: "Seminario de Integración Jurídica", semestre: 10, prereq: ["Clínica Jurídica 2","Seminario de Investigación"] }
  ],

  ICINF: [ /* aquí vendrá la malla de ICINF completa */ ]
};

/* ------------------ UTILIDADES ------------------ */

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

function disponible(asig, aprobados){
  return (asig.prereq||[]).every(p => aprobados.includes(p));
}

/* ------------------ RENDER ------------------ */

const lista = $("#lista");
const planSelect = $("#planSelect");
const buscador = $("#buscador");
const btnMarcarTodos = $("#btnMarcarTodos");
const btnLimpiar = $("#btnLimpiar");

function crearCard(asig, plan, aprobados){
  const card = document.createElement("article");
  card.className = "card";

  const done = aprobados.includes(asig.nombre);
  const isDisponible = disponible(asig, aprobados) || done;
  if(done) card.classList.add("done");
  if(!isDisponible && !done) card.classList.add("locked");

  const pill = document.createElement("span");
  pill.className = "state-pill " + (done ? "pill-done" : isDisponible ? "pill-enabled" : "pill-locked");
  pill.textContent = done ? "Aprobada" : isDisponible ? "Disponible" : "Bloqueada";

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

  const prereq = document.createElement("p");
  prereq.className = "card-prereq";
  const faltantes = (asig.prereq||[]).filter(p => !aprobados.includes(p));
  if((asig.prereq||[]).length === 0){
    prereq.textContent = "Sin previaturas.";
  }else if(faltantes.length === 0){
    prereq.textContent = "Previaturas completas.";
  }else{
    prereq.innerHTML = `Previaturas: ${asig.prereq.join(" • ")}<br><strong>Faltantes:</strong> ${faltantes.join(" • ")}`;
  }

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

  label.appendChild(input);
  label.appendChild(document.createTextNode("Aprobada"));

  card.appendChild(pill);
  card.appendChild(header);
  card.appendChild(prereq);
  card.appendChild(label);

  if(card.classList.contains("locked")){
    input.disabled = true;
    label.title = "Bloqueada por previaturas pendientes.";
  }

  return card;
}

function render(){
  const plan = planSelect.value;
  const query = normalizar(buscador.value || "");
  const aprobados = cargarAprobados(plan);
  lista.innerHTML = "";

  const items = curricula[plan]
    .filter(a => normalizar(a.nombre).includes(query) || (a.prereq||[]).some(p => normalizar(p).includes(query)));

  const semestres = [...new Set(items.map(i => i.semestre))].sort((a,b)=>a-b);

  semestres.forEach(sem => {
    const bloque = document.createElement("div");
    bloque.className = "semestre-block";
    const h2 = document.createElement("h2");
    h2.textContent = `Semestre ${sem}`;
    bloque.appendChild(h2);

    const grid = document.createElement("div");
    grid.className = "grid";

    items.filter(i => i.semestre === sem).forEach(asig => {
      const card = crearCard(asig, plan, aprobados);
      grid.appendChild(card);
    });

    bloque.appendChild(grid);
    lista.appendChild(bloque);
  });
}

/* ------------------ EVENTOS ------------------ */
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

/* ------------------ INICIO ------------------ */
document.addEventListener("DOMContentLoaded", () => {
  render();
});
