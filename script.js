/* =========
   UTILIDADES
   ========= */
const $ = (sel, ctx=document)=>ctx.querySelector(sel);
const STORAGE_KEY = (plan)=>`malla:${plan}:aprobados`;

function cargarAprobados(plan){
  try{ return JSON.parse(localStorage.getItem(STORAGE_KEY(plan)))||[] }catch{return [];}
}
function guardarAprobados(plan,aprobados){localStorage.setItem(STORAGE_KEY(plan),JSON.stringify(aprobados));}
function normalizar(s){return s.normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase();}

/* =========
   CURRICULA
   =========
   Nota: Aquí solo te muestro DERECHO, pero igual se debe cargar ICINF con el mismo formato.
   Cada ramo tiene "semestre" y "prereq" (desde PREVIATURAS_DERECHO.pdf e ICINF.pdf).
*/
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
    {nombre:"Fundamentos de la Economía",semestre:2,prereq:[]},
    {nombre:"Fundamentos de la Investigación Jurídica",semestre:2,prereq:[]},
    {nombre:"Filosofía del Derecho",semestre:2,prereq:["Fundamentos Filosóficos del Derecho"]},
    {nombre:"Antropología",semestre:2,prereq:[]},
    // ... y así seguir con todos los semestres de Derecho (según tu lista + PDF previaturas)
  ],
  ICINF:[
    // aquí vendrían los ramos de ICINF con semestre y prereq del PDF PREVIATURAS_MALLA_ICINF
  ]
};

/* =========
   LÓGICA
   ========= */
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
  pill.textContent=done?"Aprobada":libre?"Disponible":"Bloqueada";
  card.appendChild(pill);

  const h=document.createElement("h3");h.className="card-title";h.textContent=asig.nombre;
  card.appendChild(h);

  const chk=document.createElement("input");chk.type="checkbox";chk.checked=done;
  chk.disabled=!libre&&!done;
  chk.onchange=()=>{
    let aprob=new Set(cargarAprobados(plan));
    if(chk.checked) aprob.add(asig.nombre); else aprob.delete(asig.nombre);
    guardarAprobados(plan,[...aprob]); render();
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
