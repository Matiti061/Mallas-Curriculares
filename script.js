/* 
  Datos de previaturas cargados desde los PDFs provistos por el usuario.
  Referencias:
  - Derecho: :contentReference[oaicite:0]{index=0}
  - ICINF:  :contentReference[oaicite:1]{index=1}
*/

const curricula = {
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

  ICINF: [
    { nombre: "Introduccion a la matematica", prereq: [] },
    { nombre: "Introduccion al calculo", prereq: ["Introduccion a la matematica"] },
    { nombre: "Programacion", prereq: [] },
    { nombre: "Programacion Orientada a Objetos", prereq: ["Programacion"] },
    { nombre: "Calculo Diferencial e Integral", prereq: ["Introduccion al calculo"] },
    { nombre: "Algebra", prereq: [] },
    { nombre: "Algebra superior", prereq: ["Algebra"] },
    { nombre: "Introduccion a la fisica", prereq: [] },
    { nombre: "Fisica Newtoniana", prereq: ["Introduccion al calculo","Introduccion a la fisica"] },
    { nombre: "Estructura de Datos", prereq: ["Programacion"] },
    { nombre: "Taller de Programacion Aplicada", prereq: ["Programacion Orientada a Objetos"] },
    { nombre: "Calculo Multivariable", prereq: ["Calculo Diferencial e Integral"] },
    { nombre: "Estructuras Discretas", prereq: ["Algebra"] },
    { nombre: "Electromagnetismo", prereq: ["Fisica Newtoniana","Calculo Diferencial e Integral"] },
    { nombre: "Ingles 1", prereq: [] },
    { nombre: "Ingles 2", prereq: ["Ingles 1"] },
    { nombre: "Ecuaciones Diferenciales", prereq: ["Calculo Multivariable"] },
    { nombre: "Modelamiento y Paradigmas de Programacion", prereq: [] },
    { nombre: "Base de Datos", prereq: ["Modelamiento y Paradigmas de Programacion"] },
    { nombre: "Ingles 3", prereq: ["Ingles 2"] },
    { nombre: "Calculo Numerico", prereq: ["Calculo Multivariable"] },
    { nombre: "Taller de Diseño Digital", prereq: ["Electromagnetismo"] },
    { nombre: "Base de datos avanzada", prereq: ["Base de Datos"] },
    { nombre: "Ingles 4", prereq: ["Ingles 3"] },
    { nombre: "Ingenieria de sistemas", prereq: [] },
    { nombre: "Sistemas de Informacion", prereq: ["Ingenieria de sistemas"] },
    { nombre: "Tecnologias Web Y moviles", prereq: [] },
    { nombre: "Taller de Ingenieria Informatica", prereq: ["Tecnologias Web Y moviles"] },
    { nombre: "Ingles para Informaticos 1", prereq: ["Ingles 4"] },
    { nombre: "Practica Intermedia", prereq: ["Base de Datos"] },
    { nombre: "Inevstigacion Operativa", prereq: ["Algebra superior"] },
    { nombre: "Arquitectura de Computadores", prereq: [] },
    { nombre: "Sistemas Operativos", prereq: ["Arquitectura de Computadores"] },
    { nombre: "Ingenieria de Software", prereq: ["Modelamiento y Paradigmas de Programacion"] },
    { nombre: "Ingles para informaticos 2", prereq: ["Ingles para informaticos 1"] },
    { nombre: "Automatas y Lenguajes Formales", prereq: [] },
    { nombre: "Inteligencia Artificial", prereq: ["Automatas y Lenguajes Formales"] },
    { nombre: "Taller de Ingenieria de Software", prereq: ["Ingenieria de Software"] },
    { nombre: "Redes y comunicaciones", prereq: [] },
    { nombre: "Sistemas Distribuidos", prereq: ["Redes y comunicaciones"] },
    { nombre: "Seguridad Informatica", prereq: ["Taller de Ingenieria Informatica"] },
    { nombre: "Taller de Integracion Tecnologica", prereq: ["Taller de Ingenieria de Software"] },
    { nombre: "Anteproyecto de Titulo", prereq: ["Todas las asignaturas hasta el noveno semestre"] },
    { nombre: "Proyecto de Titulo", prereq: ["Anteproyecto de Titulo"] },
    { nombre: "Practica Profesional", prereq: ["Todas las asignaturas hasta el octavo semestre"] }
  ]
};

/* ------------------ Utilidades ------------------ */

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

/* Determina si una asignatura está disponible (todas sus previaturas aprobadas) */
function disponible(asig, aprobados){
  return (asig.prereq||[]).every(p => aprobados.includes(p));
}

/* ------------------ Render ------------------ */

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
      // Al desmarcar, no forzamos desmarcar dependientes: el usuario puede controlar manualmente.
      // (Si prefieres "propagar" y desmarcar dependientes, se puede añadir lógica extra aquí.)
    }
    const arr = Array.from(aprob);
    guardarAprobados(plan, arr);
    render(); // recalc disponibilidad
  });

  label.appendChild(input);
  label.appendChild(document.createTextNode("Aprobada"));

  card.appendChild(pill);
  card.appendChild(header);
  card.appendChild(prereq);
  card.appendChild(label);

  // A11y: bloqueamos el checkbox sólo si está bloqueada y no está marcada
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
    .slice()
    .sort((a,b)=> a.nombre.localeCompare(b.nombre, "es"))
    .filter(a => normalizar(a.nombre).includes(query) || (a.prereq||[]).some(p => normalizar(p).includes(query)));

  items.forEach(asig => {
    const card = crearCard(asig, plan, aprobados);
    lista.appendChild(card);
  });
}

/* ------------------ Eventos ------------------ */

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

/* ------------------ Inicio ------------------ */
document.addEventListener("DOMContentLoaded", () => {
  render();
});
