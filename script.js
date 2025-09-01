const $ = (sel, ctx=document)=>ctx.querySelector(sel);
const STORAGE_KEY = (plan)=>`malla:${plan}:aprobados`;

function cargarAprobados(plan){
  try{ return JSON.parse(localStorage.getItem(STORAGE_KEY(plan)))||[] }catch{return [];}
}
function guardarAprobados(plan,aprobados){localStorage.setItem(STORAGE_KEY(plan),JSON.stringify(aprobados));}
function normalizar(s){return s.normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase();}

const curricula={
  DERECHO:[
    // Semestre 1
    {nombre:"Introducción al Derecho",semestre:1,prereq:[]},
    {nombre:"Historia Constitucional de Chile",semestre:1,prereq:[]},
    {nombre:"Instituciones Políticas",semestre:1,prereq:[]},
    {nombre:"Fundamentos Filosóficos del Derecho",semestre:1,prereq:[]},
    {nombre:"Estrategias para el Aprendizaje",semestre:1,prereq:[]},
    // Semestre 2
    {nombre:"Teoría de la Ley y Las Personas",semestre:2,prereq:["Introducción al Derecho"]},
    {nombre:"Derechos Fundamentales",semestre:2,prereq:["Instituciones Políticas"]},
    {nombre:"Fundamentos de la Economia",semestre:2,prereq:[]},
    {nombre:"Fundamentos de la Investigación Jurídica",semestre:2,prereq:[]},
    {nombre:"Filosofía del Derecho",semestre:2,prereq:["Fundamentos Filosóficos del Derecho"]},
    {nombre:"Antropología",semestre:2,prereq:[]},
    // Semestre 3
    {nombre:"Acto Jurídico",semestre:3,prereq:[]},
    {nombre:"Derecho Constitucional Organico",semestre:3,prereq:["Derechos Fundamentales"]},
    {nombre:"Derecho Individual del Trabajo",semestre:3,prereq:["Fundamentos de la Economia"]},
    {nombre:"Derecho Procesal Organico",semestre:3,prereq:["Derechos Fundamentales"]},
    {nombre:"Etica",semestre:3,prereq:["Antropologia"]},
    // Semestre 4
    {nombre:"Bienes",semestre:4,prereq:["Acto Juridico"]},
    {nombre:"Derecho Administrativo",semestre:4,prereq:["Derecho Constitucional Organico"]},
    {nombre:"Derecho Colectivo del Trabajo y de la Seguridad Social",semestre:4,prereq:["Derecho Individual del Trabajo"]},
    {nombre:"Reglas Comunes a Todo Procedimiento",semestre:4,prereq:["Derecho Procesal Organico"]},
    {nombre:"Argumentacion y Expresion Oral",semestre:4,prereq:[]},
    {nombre:"Electivo de Formacion Integral 1",semestre:4,prereq:["Etica"]},
    // Semestre 5
    {nombre:"Obligaciones Y Contratos",semestre:5,prereq:["Bienes"]},
    {nombre:"Teoria del Delito y de la Pena",semestre:5,prereq:["Derechos Fundamentales"]},
    {nombre:"Actos de Comercio",semestre:5,prereq:["Acto Juridico"]},
    {nombre:"Procedimientos Declarativos",semestre:5,prereq:["Reglas Comunes a Todo Procedimiento"]},
    {nombre:"Metodos Colaborativos de Resolucion de Conflictos",semestre:5,prereq:["Argumentacion y Expresion Oral"]},
    {nombre:"Electivo de Formacion Integral 2",semestre:5,prereq:[]},
    // Semestre 6
    {nombre:"Responsabilidad Civil",semestre:6,prereq:["Obligaciones y Contratos"]},
    {nombre:"Formas de Aparicion del Delito",semestre:6,prereq:["Teoria del Delito y de la Pena"]},
    {nombre:"Derecho Societario",semestre:6,prereq:["Actos de Comercio"]},
    {nombre:"Recursos y Juicio Ejecutivo",semestre:6,prereq:["Procedimientos Declarativos"]},
    {nombre:"Mediacion, Negociacion, Conciliacion Judicial y Arbitraje",semestre:6,prereq:["Metodos Colaborativos de Resolucion de Conflictos"]},
    {nombre:"Electivo de Formacion Integral 3",semestre:6,prereq:[]},
    // Semestre 7 
    {nombre:"Derecho de Familia y Sucesorio",semestre:7,prereq:["Responsabilidad Civil"]},
    {nombre:"Derecho Penal Especial",semestre:7,prereq:["Formas de Aparicion del Delito"]},
    {nombre:"Insolvencia y Derecho Concursal",semestre:7,prereq:["Derecho Societario"]},
    {nombre:"Procedimientos Especiales",semestre:7,prereq:["Procedimientos Declarativos"]},
    {nombre:"Redaccion legal",semestre:7,prereq:["Mediacion, Negociacion, Conciliacion Judicial y Arbitraje"]},
    {nombre:"Electivo de Formacion Integral 4",semestre:7,prereq:[]},
    // Semestre 8
    {nombre:"Etica y Responsabilidad Profesional",semestre:8,prereq:["Filosofia del Derecho"]},
    {nombre:"Derecho Penal Economico y Compliance",semestre:8,prereq:["Derecho Penal Especial"]},
    {nombre:"Derecho Tributario",semestre:8,prereq:["Obligaciones y Contratos"]},
    {nombre:"Derecho Procesal Penal",semestre:8,prereq:["Derecho Penal Especial"]},
    {nombre:"Derecho Economico Regulatorio",semestre:8,prereq:["Derecho Administrativo"]},
    {nombre:"Destrezas de Litigacion Oral",semestre:8,prereq:["Procedimientos Especiales"]},
    // Semestre 9
    {nombre:"Clinica Juridica 1",semestre:9,prereq:["Procedimientos Especiales"]},
    {nombre:"Seminario de Investigacion",semestre:9,prereq:["Fundamentos de la Investigacion Juridica"]},
    {nombre:"Electivo de Profundizacion 1",semestre:9,prereq:[]},
    {nombre:"Electivo de Profundizacion 2",semestre:9,prereq:[]},
    {nombre:"Electivo 1",semestre:9,prereq:[]},
    // Semestre 10
    {nombre:"Clinica Juridica 2",semestre:10,prereq:["Clinica Juridica 1"]},
    {nombre:"Seminario de Integracion Juridica",semestre:10,prereq:["Seminario de Investigacion"]},
    {nombre:"Electivo de Profundizacion 3",semestre:10,prereq:[]},
    {nombre:"Electivo 2",semestre:10,prereq:[]},
  ],
  ICINF:[
    // Semestre 1
    
  ]
};


function disponible(asig,plan,aprobados){
  return (asig.prereq||[]).every(p=>aprobados.includes(p));
}
function crearCard(asig,plan,aprobados){
  const card=document.createElement("div");
  card.className="card";
  const done=aprobados.includes(asig.nombre);
  const libre=disponible(asig,plan,aprobados)||done;
  if(done) card.classList.add("done");
  else if(!libre) card.classList.add("locked");

  const pill=document.createElement("span");
  pill.className="state-pill "+(done?"pill-done":libre?"pill-enabled":"pill-locked");
  pill.textContent=done?"":libre?"":"";
  card.appendChild(pill);

  const h=document.createElement("h3");h.className="card-title";h.textContent=asig.nombre;
  card.appendChild(h);

  // Agrega prerrequisitos debajo del título
  const prereqDiv = document.createElement("div");
  prereqDiv.className = "card-prereq";
  prereqDiv.textContent = done
    ? "Aprobado"
    : (asig.prereq && asig.prereq.length > 0
        ? "Prerrequisito: " + asig.prereq.join(", ")
        : "Sin prerrequisitos");
  card.appendChild(prereqDiv);

  const chk=document.createElement("input");chk.type="checkbox";chk.checked=done;
  chk.disabled=!libre&&!done;
  chk.onchange=()=>{
    let aprob=new Set(cargarAprobados(plan));
    if(chk.checked) aprob.add(asig.nombre); else aprob.delete(asig.nombre);
    guardarAprobados(plan,[...aprob]);
    // Actualiza el texto de prerrequisito al marcar/desmarcar
    prereqDiv.textContent = chk.checked
      ? "Aprobado"
      : (asig.prereq && asig.prereq.length > 0
          ? "Prerrequisito: " + asig.prereq.join(", ")
          : "Sin prerrequisitos");
    render();
  }
  card.appendChild(chk);

  return card;
}
function render(){
  const plan=$("#planSelect").value;
  const query=normalizar($("#buscador").value);
  const aprobados=cargarAprobados(plan);
  const lista=$("#lista"); lista.innerHTML="";

  const semestres=[...new Set(curricula[plan].map(r=>r.semestre))].sort((a,b)=>a-b);
  semestres.forEach(sem=>{
    const header=document.createElement("div");header.className="sem-header";header.textContent="Semestre "+sem;
    lista.appendChild(header);
    curricula[plan].filter(r=>r.semestre===sem && normalizar(r.nombre).includes(query)).forEach(asig=>{
      lista.appendChild(crearCard(asig,plan,aprobados));
    });
  });
}
$("#planSelect").onchange=render;
$("#buscador").oninput=render;
$("#btnMarcarTodos").onclick=()=>{const plan=$("#planSelect").value;guardarAprobados(plan,curricula[plan].map(r=>r.nombre));render();};
$("#btnLimpiar").onclick=()=>{guardarAprobados($("#planSelect").value,[]);render();};
document.addEventListener("DOMContentLoaded",render);
