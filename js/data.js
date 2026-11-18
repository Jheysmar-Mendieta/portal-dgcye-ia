/**
 * Base de Datos en Memoria de Normativas Oficiales DGCyE (Provincia de Buenos Aires)
 * Diseñado para manipulación dinámica del DOM, filtros en memoria y contexto NLP (Hugging Face).
 */

const NORMATIVAS_DGCYE = [
  {
    id: 1,
    codigo: "RESOC-2026-1480-GDEBA-DGCYE",
    titulo: "Pautas y Reglamento General para Ferias de Educación, Artes, Ciencias y Tecnología (ACTJ)",
    categoria: "Ferias y Actividades Científicas",
    nivel: "Todos los Niveles",
    fecha: "15/03/2026",
    region: "Todas las Regiones PBA / GBA",
    resumen: "Establece los lineamientos pedagógicos, etapas de participación (Escolar, Distrital, Regional y Provincial), criterios de valoración e inscripción de proyectos de indagación escolar en Ferias de Ciencias.",
    puntosClave: [
      "Instancias obligatorias: Feria Escolar (en cada establecimiento), Feria Distrital, Feria Regional (25 regiones educativas) y Feria Provincial.",
      "Documentación requerida por proyecto: Carpeta de Campo original, Informe Técnico/Pedagógico (máx. 15 páginas), Registro Pedagógico del docente orientador y autorización de imagen.",
      "Equipos expositores: Representados por hasta 2 (dos) estudiantes expositores y 1 (un) docente orientador o asesor científico en las instancias Regional y Provincial.",
      "Ejes temáticos: Ciencias Naturales, Ciencias Sociales, Matemática, Educación Ambiental Integral, Tecnología, Robótica y Programación / Desarrollo de Software.",
      "Valoración por Comisiones de Evaluación: Se prioriza la construcción colectiva del problema, el método de indagación en el aula y el impacto comunitario en el territorio bonaerense."
    ],
    keywords: ["ferias de ciencias", "pautas", "feria", "ciencias", "tecnologia", "actj", "proyectos", "carpeta de campo", "informe", "regional"]
  },
  {
    id: 2,
    codigo: "RESOC-2024-1650-GDEBA-DGCYE",
    titulo: "Actualización del Régimen Académico para la Educación Secundaria Bonaerense",
    categoria: "Régimen Académico",
    nivel: "Nivel Secundario",
    fecha: "10/06/2024",
    region: "Regiones 1 a 25 (GBA e Interior)",
    resumen: "Define la organización cuatrimestral del ciclo lectivo, la acreditación por materia con calificación numérica de 7 a 10, los períodos de intensificación de la enseñanza y el acompañamiento a las trayectorias.",
    puntosClave: [
      "Organización en 2 (dos) cuatrimestres con valoración preliminar a mitad de cada período y calificación numérica al cierre.",
      "Acreditación directa de la materia cuando el estudiante obtiene 7 (siete) o más puntos en ambos cuatrimestres.",
      "Períodos de Intensificación de la Enseñanza y el Estudio (diciembre, febrero/marzo y bloques intracuatrimestrales) sin suspensión de clases.",
      "Asistencia contabilizada por materia y por jornada institucional (mínimo 75% de asistencia con abordaje pedagógico ante inasistencias reiteradas).",
      "Creación del Equipo de Definición de las Trayectorias Educativas (EDTE) para acompañar a estudiantes con materias pendientes."
    ],
    keywords: ["regimen academico", "secundaria", "evaluacion", "calificacion", "cuatrimestre", "intensificacion", "acreditacion", "asistencia"]
  },
  {
    id: 3,
    codigo: "COPRET-2025-2343-GDEBA-DGCYE",
    titulo: "Lineamientos de Prácticas Profesionalizantes para 7° Año de Educación Secundaria Técnica",
    categoria: "Educación Técnico Profesional",
    nivel: "Secundaria Técnica",
    fecha: "20/02/2025",
    region: "GBA Norte (Región 6 Vicente López / San Isidro)",
    resumen: "Regula las 200 horas mínimas de Prácticas Profesionalizantes obligatorias para la titulación de Técnicos en Programación, Informática, Electromecánica y especialidades de EEST.",
    puntosClave: [
      "Carga horaria obligatoria: Mínimo de 200 horas reloj desarrolladas durante el 7° año de la Educación Secundaria Técnica.",
      "Formatos válidos: Pasantías en empresas/organismos públicos, Proyectos Tecnológicos Productivos o de Servicios comunitarios, y Empresas Simuladas.",
      "Cobertura y Seguro: Todos los estudiantes deben estar registrados en el sistema provincial con cobertura de seguro de responsabilidad civil y accidentes personales.",
      "Articulación con casos reales: Desarrollo de soluciones tecnológicas para organismos estatales (como portales web dinámicos, despliegue Cloud e IA para la DGCyE).",
      "Evaluación final mediante defensa técnica (Pitch Final y Expo Técnica) ante docentes e inspectores de Educación Técnico Profesional."
    ],
    keywords: ["practicas profesionalizantes", "7 año", "septimo", "tecnica", "eest", "200 horas", "copret", "programacion", "expo tecnica"]
  },
  {
    id: 4,
    codigo: "RESOC-2024-498-GDEBA-DGCYE",
    titulo: "Reglamento General de Salidas Educativas y de Representación Institucional",
    categoria: "Salidas y Experiencias Educativas",
    nivel: "Todos los Niveles",
    fecha: "04/04/2024",
    region: "Todas las Regiones PBA / GBA",
    resumen: "Normativa integral sobre plazos, autorizaciones familiares, relación docente-alumnos, habilitación de transporte y aprobación de Jefatura Distrital para salidas educativas.",
    puntosClave: [
      "Clasificación: Salidas dentro del radio escolar (aprobación de Dirección), dentro del distrito o distritos limítrofes de GBA, y fuera del distrito o con pernocte (requiere aval del Inspector/a).",
      "Plazos de presentación: 5 días hábiles para salidas en el distrito; 15 días hábiles ante Inspección para salidas fuera del distrito sin pernocte; 25 días con pernocte.",
      "Relación docente acompañante por estudiantes: Nivel Inicial (1 cada 6), Nivel Primario (1 cada 12), Nivel Secundario y Técnico (1 cada 15 estudiantes).",
      "Documentación obligatoria: Proyecto pedagógico, Anexo de Autorización firmada por adultos responsables, planilla de salud y verificación técnica vehicular (VTV / CNRT) del micro.",
      "Salidas de Representación Institucional: Aplica para participación en Ferias de Ciencias Regionales/Provinciales y Olimpíadas Técnicas."
    ],
    keywords: ["salidas educativas", "representacion institucional", "viajes", "autorizacion", "transporte", "inspectores", "plazos", "acompaniantes"]
  },
  {
    id: 5,
    codigo: "LEY-10579-ESTATUTO-DGCYE",
    titulo: "Estatuto del Docente Bonaerense (Ley 10.579) y Régimen de Licencias (Decreto 688/93)",
    categoria: "Estatuto y Licencias Docentes",
    nivel: "Todos los Niveles",
    fecha: "Vigente 2026",
    region: "Provincia de Buenos Aires",
    resumen: "Compendio de derechos, obligaciones, ingreso a la docencia, calificación anual (SET 4), licencias médicas (SUNI/ Portal ABC) y cobertura de suplencias mediante Acto Público Digital (APD).",
    puntosClave: [
      "Solicitud de Licencias Médicas: Se gestiona digitalmente a través de la app o Portal ABC (Sistema Único de Novedades de Agentes) antes del inicio del turno escolar.",
      "Artículos frecuentes del Decreto 688/93: Art. 114 inc. a (Enfermedad o accidente), Art. 114 inc. d (Atención de familiar enfermo), Art. 114 inc. ll (Examen / perfeccionamiento docente), Art. 115 (Causas particulares).",
      "Cobertura de cargos y módulos: Toda licencia de 3 (tres) o más días habilita la solicitud de suplente mediante el sistema de Acto Público Digital (APD) en la SAD del distrito.",
      "Calificación Docente Anual (SET 4): Notificación obligatoria al cierre del ciclo lectivo evaluando desempeño pedagógico, asistencia y compromiso institucional."
    ],
    keywords: ["estatuto del docente", "licencias", "articulo 114", "decreto 688", "apd", "acto publico digital", "suplencias", "set 4", "ley 10579"]
  },
  {
    id: 6,
    codigo: "RESOC-2026-0112-GDEBA-DGCYE",
    titulo: "Calendario Escolar y Calendario de Actividades Docentes Ciclo Lectivo 2026",
    categoria: "Calendario y Gestión Escolar",
    nivel: "Todos los Niveles",
    fecha: "02/02/2026",
    region: "Todas las Regiones PBA / GBA",
    resumen: "Cronograma oficial de inicio y cierre de cuatrimestres, jornadas institucionales, receso escolar de invierno, ferias de ciencias y cierre administrativo anual.",
    puntosClave: [
      "Garantía de 190 días de clases efectivos en todos los establecimientos educativos de la Provincia de Buenos Aires.",
      "Jornadas Institucionales Regionalizadas para formación situada y evaluación del Proyecto Institucional (PI).",
      "Muestras anuales de Educación Técnico Profesional (Expo Técnica) y cierre de proyectos integradores durante noviembre.",
      "Conmemoraciones y efemérides obligatorias integradas transversalmente al diseño curricular."
    ],
    keywords: ["calendario escolar", "2026", "jornadas institucionales", "receso", "ciclo lectivo", "expo tecnica", "noviembre"]
  },
  {
    id: 7,
    codigo: "DISP-2025-089-GDEBA-DPETP",
    titulo: "Diseño Curricular y Entornos Formativos de la Tecnicatura en Programación",
    categoria: "Educación Técnico Profesional",
    nivel: "Secundaria Técnica",
    fecha: "12/08/2025",
    region: "Escuelas Técnicas PBA",
    resumen: "Estándares de equipamiento, laboratorios de software, desarrollo de sitios web dinámicos, arquitecturas Cloud y uso ético de Inteligencia Artificial en el Ciclo Superior Técnico.",
    puntosClave: [
      "Materia Proyecto de Implementación de Sitios Web Dinámicos (7° Año): Integración de frontend moderno, manipulación del DOM, consumo de APIs REST mediante Fetch y despliegue en la nube (Vercel/Render).",
      "Incorporación de modelos de Inteligencia Artificial y Procesamiento de Lenguaje Natural (Hugging Face) en prototipos con impacto público y educativo.",
      "Control de versiones obligatorio con Git y repositorios estructurados en GitHub en la rama main.",
      "Documentación técnica, manuales de usuario y defensa oral del producto (Pitch Final)."
    ],
    keywords: ["programacion", "sitios web dinamicos", "pwd", "cloud", "vercel", "hugging face", "inteligencia artificial", "github", "7 año"]
  },
  {
    id: 8,
    codigo: "COM-CONJUNTA-2025-04-DGCYE",
    titulo: "Guía Provincial de Orientación para la Intervención en Situaciones de Conflicto en el Ámbito Escolar",
    categoria: "Calendario y Gestión Escolar",
    nivel: "Todos los Niveles",
    fecha: "18/05/2025",
    region: "Regiones 1 a 25",
    resumen: "Protocolo de actuación conjunta entre Equipos Directivos, Equipos de Orientación Escolar (EOE) e Inspectores de Enseñanza ante situaciones de vulneración de derechos o conflictos de convivencia.",
    puntosClave: [
      "Corresponsabilidad entre la escuela, los Equipos de Orientación Escolar (EOE), la Inspección Areal y los Servicios Locales de Promoción y Protección de Derechos.",
      "Prioridad absoluta al cuidado, escucha activa y resguardo de la privacidad de niños, niñas, adolescentes y jóvenes.",
      "Articulación de los Acuerdos Institucionales de Convivencia (AIC) con participación de los Centros de Estudiantes.",
      "Registro formal en actas institucionales e informe inmediato a la Jefatura Distrital."
    ],
    keywords: ["convivencia", "protocolo", "conflicto", "eoe", "inspectores", "aic", "derechos"]
  },
  {
    id: 9,
    codigo: "RESOC-2025-3120-GDEBA-DGCYE",
    titulo: "Lineamientos de Ciudadanía Digital, Ciberseguridad e Inteligencia Artificial en las Aulas",
    categoria: "Ferias y Actividades Científicas",
    nivel: "Todos los Niveles",
    fecha: "22/09/2025",
    region: "Todas las Regiones PBA / GBA",
    resumen: "Marco pedagógico para la alfabetización algorítmica, uso responsable de modelos generativos (LLMs / Hugging Face) y protección de datos personales en proyectos escolares.",
    puntosClave: [
      "Promoción del uso crítico y transparente de modelos de lenguaje (NLP) como asistentes de investigación y síntesis documental.",
      "Protección de datos personales de estudiantes y docentes: Prohibición de enviar datos sensibles o confidenciales a APIs externas sin anonimizar.",
      "Fomento del software libre, modelos abiertos (Open Source en Hugging Face) y soberanía tecnológica en los proyectos de escuelas técnicas.",
      "Validación humana obligatoria: Todo resumen generado por IA debe contrastarse con el texto oficial de la resolución publicada en el Portal ABC."
    ],
    keywords: ["inteligencia artificial", "ia", "hugging face", "ciudadania digital", "nlp", "datos personales", "modelos"]
  },
  {
    id: 10,
    codigo: "RESOC-2024-2299-GDEBA-DGCYE",
    titulo: "Reglamento General de las Instituciones Educativas de la Provincia de Buenos Aires (Decreto 2299/11)",
    categoria: "Calendario y Gestión Escolar",
    nivel: "Todos los Niveles",
    fecha: "Vigente 2026",
    region: "Provincia de Buenos Aires",
    resumen: "Marco normativo matriz que regula la organización institucional, el Proyecto Institucional (PI), el Plan de Continuidad Pedagógica, los estados administrativos y la supervisión.",
    puntosClave: [
      "Plan de Continuidad Pedagógica obligatoria ante contingencias climáticas, edilicias o actividades virtuales asincrónicas.",
      "Definición de roles del Equipo de Conducción (Director, Vicedirector, Secretario, Jefe de Área en Escuelas Técnicas).",
      "Responsabilidad civil, cuidado de los alumnos y organización de turnos, recreos y talleres.",
      "Estados administrativos digitales y resguardo documental institucional."
    ],
    keywords: ["decreto 2299", "reglamento general", "continuidad pedagogica", "contingencia", "proyecto institucional", "direccion"]
  },
  {
    id: 11,
    codigo: "DISP-2026-031-GDEBA-DGCYE",
    titulo: "Olimpíadas Nacionales y Provinciales de Programación, Informática y Electrónica (INET / DGCyE)",
    categoria: "Ferias y Actividades Científicas",
    nivel: "Secundaria Técnica",
    fecha: "14/04/2026",
    region: "Escuelas Técnicas PBA / GBA",
    resumen: "Convocatoria y reglamento para la participación de estudiantes del Ciclo Superior de Escuelas Técnicas en desafíos de desarrollo de software, bases de datos y sistemas embebidos.",
    puntosClave: [
      "Participación en duplas o equipos integradores de 6° y 7° año de las tecnicaturas en Programación e Informática.",
      "Evaluación de arquitectura de software, accesibilidad web, consumo de APIs en la nube y resolución de problemáticas reales.",
      "Reconocimiento institucional y puntaje para antecedentes pedagógicos de los docentes asesores."
    ],
    keywords: ["olimpiadas", "inet", "programacion", "informatica", "desafios", "tecnica"]
  },
  {
    id: 12,
    codigo: "RESOC-2025-1904-GDEBA-DGCYE",
    titulo: "Régimen Académico Marco para los Institutos Superiores de Formación Docente y Técnica",
    categoria: "Régimen Académico",
    nivel: "Nivel Superior",
    fecha: "05/07/2025",
    region: "Regiones 1 a 25",
    resumen: "Actualiza las condiciones de cursada, promoción directa, articulación con escuelas secundarias técnicas y validación de trayectos formativos en Nivel Superior.",
    puntosClave: [
      "Articulación directa entre Escuelas Secundarias Técnicas (EEST) e Institutos Superiores Técnicos (ISFT) para reconocimiento de saberes.",
      "Modalidades combinadas presenciales y virtuales asincrónicas en unidades curriculares seleccionadas.",
      "Prácticas profesionalizantes superiores vinculadas al desarrollo productivo regional."
    ],
    keywords: ["nivel superior", "isft", "isfd", "articulacion", "promocion", "tecnicaturas"]
  }
];
