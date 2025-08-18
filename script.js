const malla = [
  {
    nombre: "Semestre 1",
    ramos: [
      "Introducción al Derecho",
      "Historia Constitucional de Chile",
      "Instituciones Políticas",
      "Fundamentos Filosóficos del Derecho",
      "Estrategias para el Aprendizaje"
    ]
  },
  {
    nombre: "Semestre 2",
    ramos: [
      "Teoría de la Ley y Las Personas",
      "Derechos Fundamentales",
      "Fundamentos de la Economía",
      "Fundamentos de la Investigación Jurídica",
      "Filosofía del Derecho",
      "Antropología"
    ]
  },
  {
    nombre: "Semestre 3",
    ramos: [
      "Acto Jurídico",
      "Derecho Constitucional Orgánico",
      "Derecho individual del Trabajo",
      "Derecho Procesal Orgánico",
      "Ética"
    ]
  },
  {
    nombre: "Semestre 4",
    ramos: [
      "Bienes",
      "Derecho Administrativo",
      "Derecho Colectivo del Trabajo y de la Seguridad Social",
      "Reglas Comunes a Todo Procedimiento",
      "Argumentación y Expresión Oral",
      "Electivo de Formación Integral 1"
    ]
  },
  {
    nombre: "Semestre 5",
    ramos: [
      "Obligaciones y Contratos",
      "Teoría del Delito y de la Pena",
      "Actos de Comercio",
      "Procedimientos Declarativos",
      "Métodos Colaborativos de Resolución de Conflictos",
      "Electivo de Formación Integral 2"
    ]
  },
  {
    nombre: "Semestre 6",
    ramos: [
      "Responsabilidad Civil",
      "Formas de Aparición del Delito",
      "Derecho Societario",
      "Recursos y Juicio Ejecutivo",
      "Mediación, Negociación, Conciliación Judicial y Arbitraje",
      "Electivo de Formación Integral 3"
    ]
  },
  {
    nombre: "Semestre 7",
    ramos: [
      "Derecho de Familia y Sucesorio",
      "Derecho Penal Especial",
      "Insolvencia y Derecho Concursal",
      "Procedimientos Especiales",
      "Redacción Legal",
      "Electivo de Formación Integral 4"
    ]
  },
  {
    nombre: "Semestre 8",
    ramos: [
      "Ética y Responsabilidad Profesional",
      "Derecho Penal Económico y Compliance",
      "Derecho Tributario",
      "Derecho Procesal Penal",
      "Derecho Económico Regulatorio",
      "Destrezas de Litigación Oral"
    ]
  },
  {
    nombre: "Semestre 9",
    ramos: [
      "Clínica Jurídica 1",
      "Seminario de Investigación",
      "Electivo de Profundización 1",
      "Electivo de Profundización 2",
      "Electivo 1"
    ]
  },
  {
    nombre: "Semestre 10",
    ramos: [
      "Clínica Jurídica 2",
      "Electivo de Profundización 3",
      "Electivo 2",
      "Seminario de Integración Jurídica"
    ]
  }
];

const previaturas = {
  "Teoría de la Ley y Las Personas": ["Introducción al Derecho"],
  "Derechos Fundamentales": ["Instituciones Políticas"],
  "Filosofía del Derecho": ["Fundamentos Filosóficos del Derecho"],
  "Acto Jurídico": ["Teoría de la Ley y Las Personas"],
  "Derecho Constitucional Orgánico": ["Derechos Fundamentales"],
  "Derecho individual del Trabajo": ["Fundamentos de la Economía"],
  "Derecho Procesal Orgánico": ["Derechos Fundamentales"],
  "Ética": ["Antropología"],
  "Bienes": ["Acto Jurídico"],
  "Derecho Administrativo": ["Derecho Constitucional Orgánico"],
  "Derecho Colectivo del Trabajo y de la Seguridad Social": ["Derecho individual del Trabajo"],
  "Reglas Comunes a Todo Procedimiento": ["Derecho Procesal Orgánico"],
  "Electivo de Formación Integral 1": ["Ética"],
  "Obligaciones y Contratos": ["Bienes"],
  "Teoría del Delito y de la Pena": ["Derechos Fundamentales"],
  "Actos de Comercio": ["Acto Jurídico"],
  "Procedimientos Declarativos": ["Reglas Comunes a Todo Procedimiento"],
  "Métodos Colaborativos de Resolución de Conflictos": ["Argumentación y Expresión Oral"],
  "Responsabilidad Civil": ["Obligaciones y Contratos"],
  "Formas de Aparición del Delito": ["Teoría del Delito y de la Pena"],
  "Derecho Societario": ["Actos de Comercio"],
  "Recursos y Juicio Ejecutivo": ["Procedimientos Declarativos"],
  "Mediación, Negociación, Conciliación Judicial y Arbitraje": ["Métodos Colaborativos de Resolución de Conflictos"],
  "Derecho de Familia y Sucesorio": ["Responsabilidad Civil"],
  "Derecho Penal Especial": ["Formas de Aparición del Delito"],
  "Insolvencia y Derecho Concursal": ["Derecho Societario"],
  "Procedimientos Especiales": ["Procedimientos Declarativos"],
  "Redacción Legal": ["Mediación, Negociación, Conciliación Judicial y Arbitraje"],
  "Ética y Responsabilidad Profesional": ["Filosofía del Derecho"],
  "Derecho Penal Económico y Compliance": ["Derecho Penal Especial"],
  "Derecho Tributario": ["Obligaciones y Contratos"],
  "Derecho Procesal Penal": ["Derecho Penal Especial"],
  "Derecho Económico Regulatorio": ["Derecho Administrativo"],
  "Destrezas de Litigación Oral": ["Procedimientos Especiales"],
  "Clínica Jurídica 1": ["Procedimientos Especiales"],
  "Seminario de Investigación": ["Fundamentos de la Investigación Jurídica"],
  "Clínica Jurídica 2": ["Clínica Jurídica 1"],
  "Seminario de Integración Jurídica": ["TODO"]
};

const contenedor = document.getElementById("malla");

// Renderizar la malla
malla.forEach(semestre => {
  const divSemestre = document.createElement("div");
  divSemestre.className = "semestre";

  const titulo = document.createElement("h2");
  titulo.textContent = semestre.nombre;
  divSemestre.appendChild(titulo);

  semestre.ramos.forEach(asignatura => {
    const divAsig = document.createElement("div");
    divAsig.className = "asignatura";
    divAsig.textContent = asignatura;

    divAsig.addEventListener("click", () => {
      // Toggle tachado
      divAsig.classList.toggle("aprobada");

      // Quitar resaltado anterior
      document.querySelectorAll(".resaltada").forEach(el => el.classList.remove("resaltada"));

      // Resaltar previaturas
      if (previaturas[asignatura]) {
        document.querySelectorAll(".asignatura").forEach(el => {
          if (previaturas[asignatura].includes(el.textContent)) {
            el.classList.add("resaltada");
          }
        });
      }

      // Guardar estado
      const aprobadas = [];
      document.querySelectorAll(".asignatura.aprobada").forEach(el => aprobadas.push(el.textContent));
      localStorage.setItem("aprobadas", JSON.stringify(aprobadas));
    });

    divSemestre.appendChild(divAsig);
  });

  contenedor.appendChild(divSemestre);
});

// Cargar estado guardado al inicio
window.addEventListener("DOMContentLoaded", () => {
  const aprobadasGuardadas = JSON.parse(localStorage.getItem("aprobadas") || "[]");
  document.querySelectorAll(".asignatura").forEach(divAsig => {
    if (aprobadasGuardadas.includes(divAsig.textContent)) {
      divAsig.classList.add("aprobada");
    }
  });
});
