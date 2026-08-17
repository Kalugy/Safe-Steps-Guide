export const homeContent = {
  title: "Acabas de pasar por un sismo.",
  subtitle: "Respira. No tienes que resolverlo todo ahora. Vamos paso a paso.",
  routes: [
    { id: 'que-hacer', title: 'No sé qué hacer', icon: 'Compass', path: '/guia/que-hacer' },
    { id: 'panico', title: 'Estoy sintiendo pánico', icon: 'Brain', path: '/guia/panico' },
    { id: 'ser-querido', title: 'Perdí a un ser querido', icon: 'Heart', path: '/guia/ser-querido' },
    { id: 'mascota', title: 'Perdí a mi mascota', icon: 'Dog', path: '/guia/mascota' },
    { id: 'vivienda', title: 'Perdí mi vivienda', icon: 'Home', path: '/guia/vivienda' },
    { id: 'necesito-algo', title: 'Necesito algo', icon: 'Package', path: '/guia/necesito-algo' },
    { id: 'buscando', title: 'Estoy buscando a alguien', icon: 'Users', path: '/guia/buscando' },
    { id: 'acompanado', title: 'Necesito sentirme acompañado', icon: 'HeartHandshake', path: '/guia/acompanado' },
  ],
  later: {
    heading: "Qué hacer luego del sismo",
    text: "No hay un calendario exacto. Cada persona avanza a su ritmo. Elige el momento que estás viviendo.",
    routes: [
      { id: 'primeras-horas', title: 'Encuentra y estabiliza', icon: 'Users', path: '/guia/primeras-horas', period: 'Primeras horas' },
      { id: 'primeros-dias', title: 'Evalúa daños y pide ayuda', icon: 'Home', path: '/guia/primeros-dias', period: 'Primeros días' },
      { id: 'primera-semana', title: 'Recupera y reconstruye', icon: 'Hammer', path: '/guia/primera-semana', period: 'Primera semana' },
      { id: 'mas-adelante', title: 'Cuida tu bienestar', icon: 'HeartHandshake', path: '/guia/mas-adelante', period: 'Más adelante' },
      { id: 'entender', title: 'Entender lo que pasó', icon: 'Info', path: '/guia/entender', period: 'Cuando puedas' },
    ],
  },
};

export const beforeContent = {
  title: "Prepárate antes de un sismo.",
  subtitle: "Hay pasos que puedes dar ahora para estar más seguro si vuelve a temblar.",
  routes: [
    { id: 'sitios-seguros', title: 'Identifica sitios seguros', icon: 'MapPin', path: '/antes/sitios-seguros' },
    { id: 'kit', title: 'Arma un kit de emergencia', icon: 'Backpack', path: '/antes/kit' },
    { id: 'plan-familiar', title: 'Haz un plan familiar', icon: 'Users', path: '/antes/plan-familiar' },
    { id: 'vivienda', title: 'Prepara tu vivienda', icon: 'Home', path: '/antes/vivienda' },
    { id: 'documentos', title: 'Guarda documentos e información', icon: 'FolderOpen', path: '/antes/documentos' },
    { id: 'mascotas', title: 'Prepara a tus mascotas', icon: 'Dog', path: '/antes/mascotas' },
    { id: 'comunidad', title: 'Conoce tu comunidad', icon: 'Globe', path: '/antes/comunidad' }
  ],
  later: {
    heading: "Por qué prepararme",
    text: "Colombia es un país sísmico y también climático: el riesgo no es igual en todas partes. Conocer tu región ayuda a prepararte mejor.",
    routes: [
      { id: 'por-que', title: 'Por qué vale la pena prepararte', icon: 'Info', path: '/antes/por-que', period: 'El país' },
      { id: 'por-region', title: 'Según tu región', icon: 'MapPin', path: '/antes/por-region', period: 'Tu sector' },
      { id: 'clima', title: 'Clima, lluvias y deslizamientos', icon: 'CloudRain', path: '/antes/clima', period: 'Datos climáticos' },
    ],
  },
};

export const duringContent = {
  title: "Está temblando.",
  subtitle: "No corras. Agáchate, cúbrete y agárrate.",
  routes: [
    { id: 'cubrete', title: 'Agáchate, cúbrete y agárrate', icon: 'Shield', path: '/durante/cubrete' },
    { id: 'casa', title: 'Estoy en casa', icon: 'Home', path: '/durante/casa' },
    { id: 'edificio', title: 'Estoy en un edificio', icon: 'Building2', path: '/durante/edificio' },
    { id: 'calle', title: 'Estoy en la calle', icon: 'MapPin', path: '/durante/calle' },
    { id: 'vehiculo', title: 'Voy en un vehículo', icon: 'Car', path: '/durante/vehiculo' },
    { id: 'cama', title: 'Estoy en la cama', icon: 'Bed', path: '/durante/cama' },
    { id: 'termino', title: 'Cuando pare el movimiento', icon: 'Clock', path: '/durante/termino' },
    { id: 'peligro', title: 'Hay gas, fuego o daños', icon: 'AlertTriangle', path: '/durante/peligro' }
  ]
};

export const emergencyContacts = {
  title: "Números de emergencia en Colombia",
  note: "Usa solo líneas oficiales. Si 123 no responde en tu municipio, llama a Cruz Roja, Defensa Civil o Bomberos de tu zona.",
  numbers: [
    { number: "123", label: "Línea única de emergencias", tel: "123" },
    { number: "132", label: "Cruz Roja Colombiana", tel: "132" },
    { number: "144", label: "Defensa Civil", tel: "144" },
    { number: "119", label: "Bomberos", tel: "119" },
    { number: "125", label: "Ambulancias", tel: "125" },
  ],
  familyReunification: {
    title: "Buscar a un familiar",
    organization: "Cruz Roja Colombiana",
    whatsapp: "3212139525",
    whatsappDisplay: "321 213 9525",
    whatsappHref: "https://wa.me/573212139525",
    email: "rcf@cruzrojacolombiana.org",
  },
};

export const shareContent = {
  title: "Guía después de un sismo",
  text: "Esta guía gratuita puede ayudar a alguien que acaba de pasar por un sismo.",
  buttonLabel: "Compartir",
  heading: "Compártelo con alguien que lo necesite",
  description: "Si conoces a una persona que acaba de vivir un sismo, comparte esta guía. Es gratuita y puede acompañarle paso a paso.",
  copied: "Enlace copiado",
  whatsappLabel: "WhatsApp",
  copyLabel: "Copiar enlace",
};

export type SectionData = 
  | { type: 'text'; text: string }
  | { type: 'message'; emphasis: string }
  | { type: 'warning'; text: string }
  | { type: 'step'; title: string; text?: string; list?: string[] }
  | { type: 'list'; list: string[] }
  | { type: 'grid-list'; list: string[] }
  | { type: 'quotes'; list: string[] }
  | { type: 'grounding'; title: string; text: string; list: { count: string; text: string }[] }
  | { type: 'categories'; items: { icon: string; title: string; text: string }[] }
  | { type: 'next-link'; path: string; label: string }
  | { type: 'modules'; modules: { icon: string; title: string; summary: string; blocks: { heading?: string; text?: string; list?: string[] }[] }[] };

export interface GuideData {
  title: string;
  sections: SectionData[];
}

export const guidesData: Record<string, GuideData> = {
  "que-hacer": {
    title: "¿Qué hago después del sismo?",
    sections: [
      {
        type: "step",
        title: "Paso 1 — Ponte a salvo",
        list: [
          "Aléjate de estructuras dañadas.",
          "No regreses a edificios afectados sin autorización.",
          "Sigue las instrucciones de las autoridades.",
          "Revisa si tú o alguien cercano necesita atención médica."
        ]
      },
      {
        type: "step",
        title: "Paso 2 — Busca a alguien",
        text: "Después de una situación traumática, no es necesario enfrentar todo solo. Intenta contactar a:",
        list: [
          "Un familiar",
          "Un amigo",
          "Un vecino",
          "Una persona de confianza",
          "Una autoridad o equipo de emergencia"
        ]
      },
      {
        type: "step",
        title: "Paso 3 — Atiende lo urgente",
        text: "Prioriza en este orden:",
        list: [
          "1. Seguridad",
          "2. Lesiones",
          "3. Agua",
          "4. Refugio",
          "5. Comunicación",
          "6. Medicamentos",
          "7. Alimentación"
        ]
      },
      {
        type: "message",
        emphasis: "No necesitas solucionar todo hoy. Concéntrate en el siguiente paso."
      },
    ]
  },
  "pasos-siguientes": {
    title: "¿Qué hacer luego del sismo?",
    sections: [
      {
        type: "text",
        text: "Cuando pasan las primeras horas, es normal preguntarse qué sigue. No hay un calendario exacto: cada persona y cada situación avanza a su propio ritmo. Recorre estos módulos a tu ritmo, uno a la vez."
      },
      {
        type: "modules",
        modules: [
          {
            icon: "Info",
            title: "Entender lo que pasó",
            summary: "Réplicas, contexto y por qué no es tu culpa.",
            blocks: [
              {
                heading: "¿Puede ocurrir otro sismo?",
                text: "Sí, pueden presentarse réplicas. Y también puede que no ocurran. Lo importante es mantener la calma y respirar hondo. Antes de pensar en todo lo demás, enfoca tu mente en tu alrededor y en tu seguridad."
              },
              {
                heading: "Un poco de contexto",
                list: [
                  "El sismo de magnitud 7,4 del 10 de agosto de 2026 fue el cuarto de mayor magnitud registrado en el mundo durante 2026 hasta esa fecha. Su epicentro estuvo cerca de San José del Palmar, Chocó.",
                  "En 2026 también se han registrado sismos importantes en distintas partes del mundo, como uno de magnitud 7,5 cerca de Tonga y dos en Venezuela de 7,5 y 7,2.",
                  "Cada año ocurren miles de sismos en el mundo. La mayoría son pequeños y pasan sin causar daños.",
                  "La Tierra está formada por grandes placas que se mueven muy lentamente. Cuando liberan energía acumulada, sentimos un sismo. Es un proceso natural del planeta."
                ]
              },
              {
                heading: "El sismo en cifras",
                text: "Estas son las cifras del último balance humanitario disponible, con corte del 12 de agosto de 2026 a las 6:30 p. m. Las cifras pueden cambiar mientras continúan las evaluaciones y la atención.",
                list: [
                  "Más de 49.214 personas afectadas y 30.324 familias impactadas.",
                  "3.771 personas heridas y 241 personas fallecidas.",
                  "Más de 54.900 viviendas destruidas o dañadas.",
                  "Se reportaron afectaciones en 13 departamentos.",
                  "Las ciudades con mayores afectaciones reportadas incluyen Cali, Pereira, Quibdó, Manizales, Armenia y Popayán."
                ]
              },
              {
                heading: "No te culpes",
                text: "Los desastres naturales son impredecibles: nadie puede anticiparlos, ni siquiera los expertos. Nada de lo que hiciste o dejaste de hacer causó el sismo. Lo que sientes es una reacción normal ante algo fuera de tu control. Sé amable contigo."
              }
            ]
          },
          {
            icon: "Users",
            title: "Encontrar y estabilizar",
            summary: "Lo primero: que tú y los tuyos estén bien.",
            blocks: [
              {
                text: "Lo primero es asegurarte de que tú y los tuyos estén bien. Nada más es urgente todavía."
              },
              {
                list: [
                  "Confirma que tú y los tuyos estén a salvo y juntos en lo posible.",
                  "Mantén la calma: si sientes una réplica, respira hondo y aléjate de estructuras dañadas.",
                  "Asegura lo básico: agua, alimento, abrigo y un lugar seguro donde descansar.",
                  "Mantente comunicado con las personas a tu alrededor y con tus redes de apoyo."
                ]
              }
            ]
          },
          {
            icon: "Home",
            title: "Evaluar daños y conseguir ayuda",
            summary: "Revisa con calma y busca apoyo oficial.",
            blocks: [
              {
                text: "Cuando lo esencial esté cubierto, llega el momento de revisar con calma cómo quedaron las cosas y buscar apoyo."
              },
              {
                list: [
                  "No entres a tu vivienda sin una evaluación si tiene daños visibles.",
                  "Documenta los daños con fotos cuando sea seguro hacerlo.",
                  "Acude a los puntos de asistencia y registros de ayuda habilitados por las autoridades.",
                  "Pregunta por apoyo para necesidades médicas, documentos y refugio temporal."
                ]
              }
            ]
          },
          {
            icon: "Hammer",
            title: "Recuperar y reconstruir",
            summary: "Rutinas, trámites y comunidad, paso a paso.",
            blocks: [
              {
                text: "La recuperación no es solo material: tu descanso y tu bienestar también cuentan."
              },
              {
                list: [
                  "Retoma poco a poco tus rutinas: dormir, comer y descansar también es recuperarse.",
                  "Gestiona trámites de vivienda, documentos y apoyos con calma, paso a paso.",
                  "Apóyate en tu comunidad: pedir y ofrecer ayuda hace la carga más ligera.",
                  "Si el miedo o la tristeza no ceden, buscar apoyo emocional es un acto de cuidado."
                ]
              }
            ]
          },
          {
            icon: "HeartHandshake",
            title: "Cuidar tu bienestar emocional",
            summary: "Tus emociones también necesitan atención.",
            blocks: [
              {
                text: "Después de un sismo, las emociones también necesitan atención. No hay una forma «correcta» de sentirse."
              },
              {
                list: [
                  "Habla de lo que viviste con personas de confianza: ponerlo en palabras ayuda.",
                  "Permítete descansar sin culpa: el cuerpo y la mente necesitan recuperarse.",
                  "Limita el tiempo que pasas viendo noticias o redes si te generan angustia.",
                  "Si notas que el miedo, el insomnio o la tristeza persisten, busca apoyo profesional. Pedir ayuda es un acto de valentía."
                ]
              }
            ]
          },
          {
            icon: "Sprout",
            title: "Mirar hacia adelante con más calma",
            summary: "Pequeños pasos para volver a empezar.",
            blocks: [
              {
                text: "Poco a poco, la vida vuelve a tomar forma. Cada pequeño paso cuenta."
              },
              {
                list: [
                  "Prepara un plan familiar: puntos de encuentro y contactos de emergencia.",
                  "Reactivación económica: retoma poco a poco tu trabajo, oficio o fuente de ingresos, un paso a la vez.",
                  "Reconéctate con tu comunidad: las redes de apoyo hacen todo más llevadero.",
                  "Celebra cada avance, por pequeño que sea: cada día que pasa estás saliendo adelante."
                ]
              }
            ]
          }
        ]
      },
      {
        type: "message",
        emphasis: "Cada etapa llegará a su tiempo. Hoy solo necesitas dar el paso que te toca."
      }
    ]
  },
  "primeras-horas": {
    title: "Primeras horas",
    sections: [
      {
        type: "text",
        text: "Lo primero es que tú y los tuyos estén bien. Nada más es urgente todavía."
      },
      {
        type: "step",
        title: "Encuentra y estabiliza",
        list: [
          "Confirma que tú y los tuyos estén a salvo y juntos en lo posible.",
          "Mantén la calma: si sientes una réplica, respira hondo y aléjate de estructuras dañadas.",
          "Asegura lo básico: agua, alimento, abrigo y un lugar seguro donde descansar.",
          "Mantente comunicado con las personas a tu alrededor y con tus redes de apoyo.",
          "Usa mensajes de texto si puedes: las llamadas saturan la red."
        ]
      },
      {
        type: "message",
        emphasis: "Hoy no tienes que resolver la vivienda, los trámites ni el futuro. Solo estar a salvo."
      }
    ]
  },
  "primeros-dias": {
    title: "Los primeros días",
    sections: [
      {
        type: "text",
        text: "Cuando lo esencial esté cubierto, llega el momento de revisar con calma cómo quedaron las cosas y buscar apoyo."
      },
      {
        type: "step",
        title: "Evalúa daños y pide ayuda",
        list: [
          "No entres a tu vivienda sin una evaluación si tiene daños visibles.",
          "Documenta los daños con fotos cuando sea seguro hacerlo.",
          "Acude a los puntos de asistencia y registros de ayuda habilitados por las autoridades.",
          "Pregunta por apoyo para necesidades médicas, documentos y refugio temporal.",
          "Sigue solo canales oficiales. Desconfía de rumores y cadenas."
        ]
      },
      {
        type: "message",
        emphasis: "Un paso al día basta. Pedir ayuda no te atrasa: te sostiene."
      }
    ]
  },
  "primera-semana": {
    title: "La primera semana",
    sections: [
      {
        type: "text",
        text: "La recuperación no es solo material: tu descanso y tu bienestar también cuentan."
      },
      {
        type: "step",
        title: "Recupera y reconstruye",
        list: [
          "Retoma poco a poco tus rutinas: dormir, comer y descansar también es recuperarse.",
          "Gestiona trámites de vivienda, documentos y apoyos con calma, paso a paso.",
          "Apóyate en tu comunidad: pedir y ofrecer ayuda hace la carga más ligera.",
          "Si el miedo o la tristeza no ceden, buscar apoyo emocional es un acto de cuidado."
        ]
      },
      {
        type: "message",
        emphasis: "Reconstruir no es volver a ayer. Es avanzar un poco cada día."
      }
    ]
  },
  "mas-adelante": {
    title: "Más adelante",
    sections: [
      {
        type: "text",
        text: "Después de un sismo, las emociones también necesitan atención. No hay una forma «correcta» de sentirse. Poco a poco, la vida vuelve a tomar forma."
      },
      {
        type: "step",
        title: "Cuida tu bienestar",
        list: [
          "Habla de lo que viviste con personas de confianza: ponerlo en palabras ayuda.",
          "Permítete descansar sin culpa: el cuerpo y la mente necesitan recuperarse.",
          "Limita el tiempo que pasas viendo noticias o redes si te generan angustia.",
          "Si notas que el miedo, el insomnio o la tristeza persisten, busca apoyo profesional."
        ]
      },
      {
        type: "step",
        title: "Mirar hacia adelante",
        list: [
          "Prepara un plan familiar: puntos de encuentro y contactos de emergencia.",
          "Retoma poco a poco tu trabajo, oficio o fuente de ingresos, un paso a la vez.",
          "Reconéctate con tu comunidad: las redes de apoyo hacen todo más llevadero.",
          "Celebra cada avance, por pequeño que sea: cada día que pasa estás saliendo adelante."
        ]
      },
      {
        type: "message",
        emphasis: "Pedir ayuda es un acto de valentía. Cada pequeño paso cuenta."
      }
    ]
  },
  "entender": {
    title: "Entender lo que pasó",
    sections: [
      {
        type: "step",
        title: "¿Puede ocurrir otro sismo?",
        text: "Sí, pueden presentarse réplicas. Y también puede que no ocurran. Lo importante es mantener la calma y respirar hondo. Antes de pensar en todo lo demás, enfoca tu mente en tu alrededor y en tu seguridad."
      },
      {
        type: "step",
        title: "Un poco de contexto",
        list: [
          "El sismo de magnitud 7,4 del 10 de agosto de 2026 fue el cuarto de mayor magnitud registrado en el mundo durante 2026 hasta esa fecha. Su epicentro estuvo cerca de San José del Palmar, Chocó.",
          "En 2026 también se han registrado sismos importantes en distintas partes del mundo, como uno de magnitud 7,5 cerca de Tonga y dos en Venezuela de 7,5 y 7,2.",
          "Cada año ocurren miles de sismos en el mundo. La mayoría son pequeños y pasan sin causar daños.",
          "La Tierra está formada por grandes placas que se mueven muy lentamente. Cuando liberan energía acumulada, sentimos un sismo. Es un proceso natural del planeta."
        ]
      },
      {
        type: "step",
        title: "El sismo en cifras",
        text: "Estas son las cifras del último balance humanitario disponible, con corte del 12 de agosto de 2026 a las 6:30 p. m. Las cifras pueden cambiar mientras continúan las evaluaciones y la atención.",
        list: [
          "Más de 49.214 personas afectadas y 30.324 familias impactadas.",
          "3.771 personas heridas y 241 personas fallecidas.",
          "Más de 54.900 viviendas destruidas o dañadas.",
          "Se reportaron afectaciones en 13 departamentos.",
          "Las ciudades con mayores afectaciones reportadas incluyen Cali, Pereira, Quibdó, Manizales, Armenia y Popayán."
        ]
      },
      {
        type: "message",
        emphasis: "Nada de lo que hiciste o dejaste de hacer causó el sismo. Lo que sientes es una reacción normal. Sé amable contigo."
      }
    ]
  },
  "panico": {
    title: "Estoy sintiendo pánico",
    sections: [
      {
        type: "text",
        text: "Es normal sentir que tu cuerpo reacciona intensamente después de una experiencia aterradora. Puedes sentir:"
      },
      {
        type: "grid-list",
        list: [
          "Corazón acelerado",
          "Temblores",
          "Respiración rápida",
          "Miedo intenso",
          "Dificultad para pensar",
          "Sensación de peligro",
          "Confusión",
          "Necesidad de llorar"
        ]
      },
      {
        type: "text",
        text: "Estas pueden ser reacciones al estrés extremo. Si sientes que estás en peligro inmediato, tienes síntomas físicos graves o necesitas atención profesional, busca ayuda de emergencia."
      },
      {
        type: "grounding",
        title: "Un ejercicio para anclarte al presente",
        text: "Mira a tu alrededor, respira lento y busca:",
        list: [
          { count: "5", text: "cosas que puedes ver" },
          { count: "4", text: "cosas que puedes tocar" },
          { count: "3", text: "cosas que puedes escuchar" },
          { count: "2", text: "cosas que puedes oler" },
          { count: "1", text: "cosa que puedes saborear" }
        ]
      },
      {
        type: "message",
        emphasis: "Busca a alguien y dile cómo te estás sintiendo. No tienes que pasar por esto completamente solo."
      }
    ]
  },
  "ser-querido": {
    title: "Perdí a un ser querido",
    sections: [
      {
        type: "message",
        emphasis: "Lo siento. No tienes que ser fuerte en este momento."
      },
      {
        type: "step",
        title: "Si todavía no sabes dónde está",
        list: [
          "Intenta mantener la calma en lo posible.",
          "Contacta a otros familiares.",
          "Consulta los canales oficiales.",
          "Contacta a organismos de emergencia.",
          "Evita difundir información no confirmada."
        ]
      },
      {
        type: "step",
        title: "Si confirmaste la pérdida",
        text: "No tienes que tomar todas las decisiones hoy. Apóyate en personas cercanas y en profesionales.",
        list: [
          "Busca acompañamiento de familiares o amigos.",
          "Sigue las indicaciones de las autoridades locales sobre los trámites necesarios.",
          "Acude a recursos de apoyo emocional cuando estén disponibles en tu zona."
        ]
      }
    ]
  },
  "mascota": {
    title: "Perdí a mi mascota",
    sections: [
      {
        type: "text",
        text: "Sigue estos pasos para buscarla de forma segura:"
      },
      {
        type: "list",
        list: [
          "No entres en edificios peligrosos o dañados para buscarla.",
          "Prepara una foto reciente de tu mascota.",
          "Registra su nombre, características particulares y última ubicación conocida.",
          "Contacta a refugios, veterinarios y organizaciones locales de protección animal.",
          "Comparte su información en redes sociales de manera segura."
        ]
      },
      {
        type: "message",
        emphasis: "Tu mascota importa. Es normal sentir miedo, angustia o tristeza por no saber dónde está."
      }
    ]
  },
  "vivienda": {
    title: "Perdí mi vivienda",
    sections: [
      {
        type: "warning",
        text: "Si una estructura está dañada, no regreses únicamente para recuperar pertenencias si existe riesgo."
      },
      {
        type: "step",
        title: "Necesito un lugar donde dormir",
        text: "Busca refugios temporales y centros de acopio habilitados por las autoridades oficiales en tu localidad."
      },
      {
        type: "step",
        title: "Necesito cosas básicas",
        text: "Acércate a los puntos de asistencia para conseguir:",
        list: [
          "Agua potable",
          "Comida",
          "Ropa limpia",
          "Medicamentos",
          "Artículos de higiene",
          "Cargador o acceso a electricidad"
        ]
      },
      {
        type: "step",
        title: "Perdí documentos importantes",
        text: "Mantén copias digitales si las tienes. Las autoridades suelen habilitar procesos especiales para recuperar identificaciones después de una emergencia."
      },
      {
        type: "step",
        title: "Mi vivienda está dañada pero todavía está en pie",
        text: "No asumas que es segura únicamente porque sigue en pie. Solicita una evaluación estructural y sigue las indicaciones de las autoridades competentes antes de ingresar."
      }
    ]
  },
  "necesito-algo": {
    title: "Necesito algo",
    sections: [
      {
        type: "text",
        text: "Identifica qué necesitas y busca ayuda en los canales oficiales y autoridades locales."
      },
      {
        type: "categories",
        items: [
          { icon: 'Droplet', title: "Agua", text: "Busca puntos de distribución oficiales. Bebe solo agua embotellada o purificada si el suministro local está dañado." },
          { icon: 'Utensils', title: "Comida", text: "Acude a refugios o comedores comunitarios gestionados por autoridades." },
          { icon: 'Tent', title: "Refugio", text: "No duermas en la calle si hay riesgo. Ubica el albergue temporal más cercano." },
          { icon: 'Pill', title: "Medicamentos", text: "Informa en los centros de salud si dependes de algún medicamento vital." },
          { icon: 'Stethoscope', title: "Atención médica", text: "Dirígete a carpas de primeros auxilios u hospitales habilitados." },
          { icon: 'Smartphone', title: "Comunicación", text: "Usa mensajes de texto en lugar de llamadas para no saturar las líneas." },
          { icon: 'Battery', title: "Electricidad", text: "Mantén tu teléfono en modo ahorro de energía. Busca centros de carga en refugios." },
          { icon: 'Shirt', title: "Ropa", text: "Los centros de acopio suelen tener ropa donada para quienes lo perdieron todo." },
          { icon: 'Sparkles', title: "Higiene", text: "Solicita kits de higiene personal en los puntos de asistencia." },
          { icon: 'Dog', title: "Ayuda para mascota", text: "Pregunta por alimento y atención veterinaria de emergencia en refugios." }
        ]
      }
    ]
  },
  "buscando": {
    title: "Estoy buscando a alguien",
    sections: [
      {
        type: "text",
        text: "Mantén la calma y avanza paso a paso. Si estás buscando a un familiar o persona cercana, empieza por reunir la información que pueda ayudar a encontrarla:"
      },
      {
        type: "list",
        list: [
          "Anota su nombre completo, edad, fotografía reciente, lugar donde fue vista por última vez y la ropa que llevaba.",
          "Llama y envía mensajes de texto o WhatsApp. Si no responde, puede que no tenga señal, batería o conexión.",
          "Pregunta a familiares, vecinos, amistades y personas que hayan estado con ella.",
          "Revisa hospitales, refugios y puntos de encuentro habilitados en la zona.",
          "Publica la información de búsqueda en tus redes y grupos de la comunidad para ampliar las posibilidades de encontrarla.",
          "Si recibes una noticia o una pista, compártela con la familia y con los equipos que estén ayudando en la búsqueda."
        ]
      },
      {
        type: "message",
        emphasis: "Respira, pide ayuda y no dejes de buscar. Muchas personas están tratando de reencontrarse."
      }
    ]
  },
  "acompanado": {
    title: "No estás solo",
    sections: [
      {
        type: "text",
        text: "A veces, las palabras adecuadas pueden ser un pequeño refugio."
      },
      {
        type: "quotes",
        list: [
          "Es normal sentir miedo después de algo así.",
          "Pedir ayuda no te hace débil.",
          "No tienes que entender todo lo que estás sintiendo ahora.",
          "Puedes concentrarte solamente en el siguiente paso."
        ]
      },
      {
        type: "text",
        text: "Si te sientes solo, busca compañía y apoyo. No tienes que atravesar este momento sin ayuda:"
      },
      {
        type: "list",
        list: [
          "Busca un punto de ayuda, refugio, centro comunitario o lugar de atención cercano.",
          "Pregunta allí dónde puedes conseguir apoyo psicológico o acompañamiento emocional.",
          "Acércate a una persona de confianza y dile cómo te sientes, aunque no sepas exactamente qué necesitas.",
          "Si sientes que estás en peligro o no puedes mantenerte a salvo, pide ayuda inmediata a los servicios de emergencia de tu zona."
        ]
      },
      {
        type: "message",
        emphasis: "Si llegaste hasta aquí, ya diste un paso importante.\nNo tienes que pasar por esto a solas."
      }
    ]
  }
};

export const beforeGuidesData: Record<string, GuideData> = {
  "por-que": {
    title: "Por qué vale la pena prepararte",
    sections: [
      {
        type: "text",
        text: "Prepararte no es vivir con miedo. Es saber qué harías, porque en Colombia el sismo no llega solo: también hay lluvias, laderas y, en algunas costas, tsunami."
      },
      {
        type: "step",
        title: "Datos del país",
        text: "Según la Unidad Nacional para la Gestión del Riesgo de Desastres (UNGRD), con base en el censo DANE 2018:",
        list: [
          "Cerca del 87% de la población está expuesta a amenaza sísmica alta o intermedia.",
          "Más del 82% está expuesta a amenaza alta por movimientos en masa (deslizamientos).",
          "Alrededor del 14,5% está expuesta a amenaza por tsunami.",
          "Hay más de 23 volcanes activos, sobre todo en la Cordillera Central."
        ]
      },
      {
        type: "step",
        title: "Por qué importa ahora",
        list: [
          "Colombia está en el Cinturón de Fuego del Pacífico, donde convergen las placas Suramericana, Nazca y Caribe.",
          "Un kit, un punto de encuentro y saber dónde cubrirse no evitan el sismo, pero sí reducen el caos de los primeros minutos.",
          "La preparación es distinta según el sector del país: no es lo mismo el Pacífico, la región Andina o el Caribe."
        ]
      },
      {
        type: "message",
        emphasis: "El riesgo no desaparece si no lo miras. Prepararte es una forma de cuidarte y de cuidar a los tuyos."
      }
    ]
  },
  "por-region": {
    title: "Según tu región",
    sections: [
      {
        type: "text",
        text: "El Servicio Geológico Colombiano concentra la mayor sismicidad en la región Andina, el piedemonte de la Cordillera Oriental y el Pacífico. En el Caribe hay sismos, pero con menor frecuencia. Prepararte cambia según donde vives."
      },
      {
        type: "categories",
        items: [
          { icon: 'Droplet', title: "Pacífico", text: "Alta amenaza sísmica por la subducción de la placa de Nazca. También hay amenaza de tsunami. Prioriza: sitio seguro, ruta a zona alta, kit y un plan si hay que evacuar la costa." },
          { icon: 'Mountain', title: "Andina (cordilleras y Eje Cafetero)", text: "Alta sismicidad y muchas laderas. Un sismo puede detonar deslizamientos, sobre todo con lluvias. Prioriza: asegurar la vivienda, no construir en taludes inestables y un plan por si se cierra la vía." },
          { icon: 'MapPin', title: "Santander y nororiente", text: "El nido sísmico de Bucaramanga es una de las zonas con más sismos en el país. Aunque muchos son profundos, conviene tener plan familiar y kit: la repetición también desgasta." },
          { icon: 'Globe', title: "Caribe", text: "Menor frecuencia de sismos fuertes que en el Pacífico, pero sí ocurren. Hay amenaza de tsunami (menor que en el Pacífico) y un clima de lluvias e inundaciones. El plan debe incluir sismo y temporada de lluvias." },
          { icon: 'Sprout', title: "Amazonia y Orinoquía", text: "En general menor amenaza sísmica que en la zona andina y pacífica, pero hay lluvias intensas e inundaciones. Un kit y contactos siguen sirviendo: el aislamiento por vías también es un riesgo." }
        ]
      },
      {
        type: "warning",
        text: "Estos son rasgos generales. La amenaza exacta de tu municipio la definen el SGC, tu alcaldía y el consejo local de gestión del riesgo. Pregunta allí tu zonificación."
      },
      {
        type: "message",
        emphasis: "No te prepares para un país genérico. Prepárate para el lugar donde duermes, trabajas y estudian tus hijos."
      }
    ]
  },
  "clima": {
    title: "Clima, lluvias y deslizamientos",
    sections: [
      {
        type: "text",
        text: "En Colombia el sismo y el clima se cruzan. Las lluvias intensas son el principal detonante de deslizamientos. Si tiembla en temporada de lluvias, el suelo ya puede estar saturado."
      },
      {
        type: "step",
        title: "Qué dice el clima del país",
        list: [
          "Colombia está cerca de la línea ecuatorial: las lluvias cambian mucho según el mes, la región y fenómenos como El Niño y La Niña.",
          "Los Andes desvían vientos y lluvias: dos laderas a pocos kilómetros pueden tener climas distintos.",
          "El Caribe, el Pacífico, la Amazonía y la Orinoquía aportan humedad de formas diferentes. Por eso no hay un solo «invierno» nacional.",
          "El cambio climático, según la UNGRD, hace que estos fenómenos sean más intensos, frecuentes e impredecibles."
        ]
      },
      {
        type: "step",
        title: "Cifras de desastres (1998–2021)",
        text: "Un análisis del Banco de la República con datos de la UNGRD muestra que, entre 1998 y 2021:",
        list: [
          "Se registraron 21,5 millones de personas afectadas por desastres naturales, 3.690 fallecidos y 6.173 heridos.",
          "Los deslizamientos cobraron 1.928 vidas y las inundaciones 1.253: más que muchos sismos individuales.",
          "La mitad de los eventos se concentró en ocho departamentos, casi todos andinos o del Pacífico: Cundinamarca, Antioquia, Cauca, Santander, Tolima, Nariño, Valle del Cauca y Risaralda."
        ]
      },
      {
        type: "step",
        title: "Cómo prepararte con el clima en mente",
        list: [
          "Si vives en ladera, no esperes al sismo: revisa grietas, drenajes y avisos de tu municipio en temporada de lluvias.",
          "Guarda el kit en un lugar que no se inunde y que puedas alcanzar si hay que salir rápido.",
          "En La Niña suele llover más: refuerza el plan de deslizamiento. En El Niño hay sequía e incendios: el kit de agua sigue siendo esencial.",
          "Consulta al IDEAM y a tu consejo municipal de gestión del riesgo: ellos informan temporadas y alertas locales."
        ]
      },
      {
        type: "message",
        emphasis: "Prepararte por sismo también es prepararte por lluvia. En muchas laderas de Colombia, las dos amenazas llegan juntas."
      }
    ]
  },
  "sitios-seguros": {
    title: "Identifica sitios seguros",
    sections: [
      {
        type: "text",
        text: "Antes de que tiemble, recorre tu casa, tu trabajo y los lugares donde pasas más tiempo. Saber dónde protegerte ahorra segundos cuando más los necesitas."
      },
      {
        type: "step",
        title: "Dentro de cada espacio",
        list: [
          "Busca un lugar lejos de ventanas, espejos, lámparas y objetos que puedan caer.",
          "Identifica una mesa o escritorio resistente bajo el cual puedas agacharte, cubrirte y agarrarte.",
          "Si no hay mesa, ubícate junto a una columna o muro interior estructural, cubriendo cabeza y cuello.",
          "Evita cocinas, estanterías altas, cuadros pesados y zonas junto a vidrios."
        ]
      },
      {
        type: "step",
        title: "Fuera de la vivienda",
        list: [
          "Elige un punto de encuentro al aire libre, lejos de fachadas, postes, cables y árboles grandes.",
          "Acuerda ese punto con tu familia: un parque, un patio o una esquina despejada del barrio.",
          "En edificios, identifica las escaleras de evacuación. Nunca uses el ascensor durante un sismo."
        ]
      },
      {
        type: "message",
        emphasis: "Si cada persona de la casa ya sabe dónde cubrirse, el siguiente paso será más claro."
      }
    ]
  },
  "kit": {
    title: "Arma un kit de emergencia",
    sections: [
      {
        type: "text",
        text: "Un kit no tiene que ser perfecto. Lo importante es tener lo esencial reunido, fácil de llevar y revisado de vez en cuando."
      },
      {
        type: "categories",
        items: [
          { icon: 'Droplet', title: "Agua y comida", text: "Agua embotellada y alimentos no perecederos para al menos 72 horas, según las personas de tu hogar." },
          { icon: 'Pill', title: "Salud", text: "Botiquín, medicamentos de uso diario, tapabocas y copias de recetas médicas." },
          { icon: 'Smartphone', title: "Luz y comunicación", text: "Linterna, radio a pilas o de cuerda, pilas de reserva y un power bank cargado." },
          { icon: 'Shirt', title: "Abrigo e higiene", text: "Ropa de cambio, cobija, tapabotas si puedes, toallas húmedas y kit de higiene." },
          { icon: 'FolderOpen', title: "Documentos", text: "Copias de cédulas, carnés de salud y contactos de emergencia en una bolsa plástica." },
          { icon: 'Dog', title: "Si hay mascotas", text: "Alimento, agua, correa, tapete o bolsa, y una foto reciente de tu animal." }
        ]
      },
      {
        type: "warning",
        text: "Guarda el kit en un lugar accesible, no bajo llave ni en un cuarto que pueda quedar bloqueado. Revísalo cada seis meses: agua, comida, pilas y medicamentos vencen."
      },
      {
        type: "message",
        emphasis: "No necesitas comprarlo todo hoy. Empieza con agua, linterna, documentos y medicamentos."
      }
    ]
  },
  "plan-familiar": {
    title: "Haz un plan familiar",
    sections: [
      {
        type: "text",
        text: "En un sismo las llamadas pueden fallar y las personas pueden estar en lugares distintos. Un plan sencillo evita que nadie se quede sin saber qué hacer."
      },
      {
        type: "step",
        title: "Acuerdos básicos",
        list: [
          "Definan un punto de encuentro cerca de casa y otro fuera del barrio por si no pueden volver.",
          "Anoten un contacto de referencia que viva en otra zona, por si no se pueden comunicar entre ustedes.",
          "Acuerden quién busca a niños, personas mayores o con discapacidad, y por qué ruta.",
          "Enseñen a cada persona cómo apagar gas, agua y electricidad solo si es seguro hacerlo."
        ]
      },
      {
        type: "step",
        title: "Practiquen juntos",
        text: "Hablen el plan en voz alta. Un ensayo corto vale más que un documento guardado.",
        list: [
          "Hagan un simulacro: agáchense, cúbranse y agárrense donde ya identificaron el sitio seguro.",
          "Practiquen salir por las escaleras, sin correr y sin usar el ascensor.",
          "Revisen que todas las personas sepan el punto de encuentro."
        ]
      },
      {
        type: "message",
        emphasis: "Un plan no tiene que ser largo. Con puntos de encuentro y un contacto de referencia ya avanzaron mucho."
      }
    ]
  },
  "vivienda": {
    title: "Prepara tu vivienda",
    sections: [
      {
        type: "text",
        text: "Muchas lesiones ocurren por objetos que caen, no solo por el movimiento. Ordenar y asegurar el espacio reduce riesgos."
      },
      {
        type: "step",
        title: "Reduce lo que puede caer",
        list: [
          "Baja objetos pesados o de vidrio de estantes altos.",
          "Asegura libreros, televisores y muebles altos a la pared con anclajes adecuados.",
          "No cuelgues cuadros pesados sobre camas o sofás.",
          "Guarda productos tóxicos o inflamables donde no se volteen con facilidad."
        ]
      },
      {
        type: "step",
        title: "Conoce las llaves de tu casa",
        list: [
          "Ubica las llaves de gas, agua y el tablero eléctrico.",
          "Enséñale a más de una persona cómo cerrarlas, solo si es seguro después del sismo.",
          "Mantén despejadas las salidas y no uses el pasillo como bodega."
        ]
      },
      {
        type: "warning",
        text: "Si tu vivienda tiene grietas graves, inclinación o daños previos, consulta con las autoridades locales o con un profesional antes de un sismo. No improvises reparaciones estructurales."
      },
      {
        type: "message",
        emphasis: "Cada objeto que dejas de tener sobre la cama o junto a la puerta es un riesgo menos."
      }
    ]
  },
  "documentos": {
    title: "Guarda documentos e información",
    sections: [
      {
        type: "text",
        text: "Después de un sismo puede ser difícil encontrar papeles. Tener copias te ahorra trámites cuando ya tienes bastante encima."
      },
      {
        type: "list",
        list: [
          "Haz copias de cédulas, registros civiles, carnés de salud y, si aplica, escrituras o contratos de arriendo.",
          "Guarda fotos de esos documentos en el teléfono y, si puedes, en un correo o nube.",
          "Anota teléfonos de familiares, vecinos y la línea de emergencias 123 en papel, no solo en el celular.",
          "Incluye información médica importante: alergias, medicamentos y contacto de quien te cuida.",
          "Mete una copia en el kit de emergencia, dentro de una bolsa que resista el agua."
        ]
      },
      {
        type: "message",
        emphasis: "Si el teléfono se queda sin batería, un papel con contactos sigue sirviendo."
      }
    ]
  },
  "durante": {
    title: "Practica qué hacer durante",
    sections: [
      {
        type: "text",
        text: "Durante el movimiento, lo más seguro suele ser protegerte donde estás, no salir corriendo. Practícalo ahora, con calma."
      },
      {
        type: "step",
        title: "Agáchate, cúbrete y agárrate",
        list: [
          "Agáchate para no caerte.",
          "Cúbrete bajo una mesa resistente o junto a un elemento estructural, protegiendo cabeza y cuello.",
          "Agárrate hasta que el movimiento termine: la mesa puede desplazarse.",
          "Aléjate de ventanas y objetos que puedan caer."
        ]
      },
      {
        type: "step",
        title: "Si estás en otros lugares",
        list: [
          "En un edificio alto, no uses el ascensor. Espérate a que termine el sismo y baja por las escaleras si es seguro.",
          "En la calle, aléjate de fachadas, vidrios, postes y cables. Cubre tu cabeza.",
          "Si vas en un vehículo, detente en un lugar despejado, lejos de puentes y taludes, y permanece dentro hasta que pase."
        ]
      },
      {
        type: "warning",
        text: "Evacúa solo cuando el sismo haya terminado y si hay daño, olor a gas, incendio o una salida segura. Salir corriendo durante el movimiento aumenta el riesgo de lesionarte."
      },
      {
        type: "message",
        emphasis: "Practicarlo una vez en casa hace que el cuerpo recuerde qué hacer cuando hay miedo."
      }
    ]
  },
  "mascotas": {
    title: "Prepara a tus mascotas",
    sections: [
      {
        type: "text",
        text: "Tu mascota también necesita un plan. Unos datos y un kit pequeño pueden marcar la diferencia si se separan."
      },
      {
        type: "list",
        list: [
          "Ponle placa con tu nombre y un teléfono. Si puedes, tenla identificada con microchip.",
          "Guarda una foto reciente y anota señas particulares.",
          "Incluye en el kit alimento, agua, correa, tapete o bolsas, y un transportín si lo usas.",
          "Identifica con anticipación veterinarias, refugios o vecinos que podrían recibirle.",
          "Practica llevarla al punto de encuentro familiar sin entrar en pánico."
        ]
      },
      {
        type: "warning",
        text: "Nunca dejes a tu mascota amarrada ni encerrada en un lugar del que no pueda salir si hay que evacuar."
      },
      {
        type: "message",
        emphasis: "Prepararla ahora es también cuidarte a ti: en la emergencia habrá una preocupación menos."
      }
    ]
  },
  "comunidad": {
    title: "Conoce tu comunidad",
    sections: [
      {
        type: "text",
        text: "Después de un sismo, la ayuda más cercana suele estar en el barrio. Conocer el entorno antes te orienta cuando hay confusión."
      },
      {
        type: "step",
        title: "Ubica lo esencial",
        list: [
          "Identifica salidas, escaleras y puntos de encuentro de tu edificio o conjunto.",
          "Pregunta en tu alcaldía, consejo de gestión del riesgo o junta de acción comunal cuáles son los puntos de encuentro locales.",
          "Anota la línea de emergencias 123 y, si existen en tu municipio, Cruz Roja 132, Defensa Civil 144 y Bomberos 119.",
          "Conoce a vecinos cercanos, sobre todo si hay personas mayores o con movilidad reducida."
        ]
      },
      {
        type: "step",
        title: "Infórmate por canales oficiales",
        list: [
          "Sigue al Servicio Geológico Colombiano para información sísmica oficial.",
          "Consulta a la Unidad Nacional para la Gestión del Riesgo de Desastres y a tu alcaldía para orientaciones locales.",
          "Desconfía de cadenas y rumores. Contrasta siempre con fuentes institucionales."
        ]
      },
      {
        type: "message",
        emphasis: "Prepararte no es vivir con miedo. Es saber qué harías, para que el miedo no decida por ti."
      }
    ]
  }
};

export const duringGuidesData: Record<string, GuideData> = {
  "cubrete": {
    title: "Agáchate, cúbrete y agárrate",
    sections: [
      {
        type: "text",
        text: "Durante el movimiento, lo más seguro suele ser protegerte donde estás. Salir corriendo aumenta el riesgo de caerte o de que te caiga algo."
      },
      {
        type: "step",
        title: "Haz esto ahora",
        list: [
          "Agáchate para no caerte.",
          "Cúbrete bajo una mesa o escritorio resistente. Si no hay, júntate a una columna o muro interior y cubre cabeza y cuello con brazos o una almohada.",
          "Agárrate hasta que el movimiento termine: el refugio puede desplazarse.",
          "Aléjate de ventanas, espejos, lámparas y objetos que puedan caer."
        ]
      },
      {
        type: "warning",
        text: "No uses el ascensor. No te pares en el marco de la puerta salvo que sea un elemento estructural sólido. No corras hacia la calle mientras tiembla."
      },
      {
        type: "message",
        emphasis: "Quédate cubierto hasta que pare. Luego respira y mira si puedes salir con calma."
      }
    ]
  },
  "casa": {
    title: "Estoy en casa",
    sections: [
      {
        type: "step",
        title: "Mientras tiembla",
        list: [
          "Métete bajo una mesa resistente o junto a un muro interior.",
          "Aléjate de ventanas, cocina, estantes altos y cuadros.",
          "Si estás en la cocina, apártate de la estufa y de objetos de vidrio.",
          "No salgas corriendo ni uses las escaleras hasta que pare el movimiento."
        ]
      },
      {
        type: "step",
        title: "Si hay otras personas",
        list: [
          "Indica con voz calma: agáchense, cúbranse, agárrense.",
          "Protege sobre todo a niñas, niños y personas que no puedan moverse solas.",
          "No abras la puerta de un golpe: puede haber objetos del otro lado."
        ]
      },
      {
        type: "message",
        emphasis: "Tu casa puede moverse. Tú no tienes que moverte con ella: cúbrete y espera."
      }
    ]
  },
  "edificio": {
    title: "Estoy en un edificio",
    sections: [
      {
        type: "step",
        title: "Durante el sismo",
        list: [
          "No uses el ascensor.",
          "No bajes corriendo por las escaleras mientras el edificio se mueve.",
          "Agáchate, cúbrete y agárrate lejos de ventanas y fachadas de vidrio.",
          "En un piso alto, desplazarte durante el movimiento puede ser más peligroso que quedarte cubierto."
        ]
      },
      {
        type: "step",
        title: "Cuando pare",
        list: [
          "Sal por las escaleras solo si es seguro: no hay olor a gas, fuego ni daño evidente en la ruta.",
          "Lleva el kit si lo tienes a mano. No regreses por pertenencias si hay riesgo.",
          "Dirígete al punto de encuentro del edificio o a un lugar despejado afuera."
        ]
      },
      {
        type: "warning",
        text: "Si el edificio presenta daños, grietas graves u olor a gas, sal cuando el movimiento haya terminado y avisa a los servicios de emergencia."
      }
    ]
  },
  "calle": {
    title: "Estoy en la calle",
    sections: [
      {
        type: "step",
        title: "Busca un lugar despejado",
        list: [
          "Aléjate de fachadas, balcones, vidrios, postes y cables.",
          "Cubre tu cabeza y cuello con brazos, maleta o lo que tengas.",
          "No te refugies bajo aleros ni junto a edificios que puedan desprender material.",
          "Si hay un parque o una zona abierta, dirígete hacia allá sin correr sobre otras personas."
        ]
      },
      {
        type: "message",
        emphasis: "En la calle el peligro suele estar arriba: vidrios y fachadas. Aléjate y cúbrete la cabeza."
      }
    ]
  },
  "vehiculo": {
    title: "Voy en un vehículo",
    sections: [
      {
        type: "step",
        title: "Detente con calma",
        list: [
          "Reduce la velocidad y detente en un lugar despejado, lejos de puentes, túneles, taludes y postes.",
          "Permanece dentro del vehículo con el cinturón puesto hasta que pase el movimiento.",
          "No te detengas sobre un puente ni debajo de un paso elevado si puedes evitarlo.",
          "Cuando pare, continúa con precaución: puede haber escombros, semáforos dañados o personas en la vía."
        ]
      },
      {
        type: "warning",
        text: "Si hay cables caídos sobre el vehículo, quédate adentro y espera ayuda. No salgas hasta que te indiquen que es seguro."
      }
    ]
  },
  "cama": {
    title: "Estoy en la cama",
    sections: [
      {
        type: "step",
        title: "Quédate y protégete",
        list: [
          "Quédate en la cama. Darte la vuelta para salir puede hacerte caer o cortarte con vidrios.",
          "Cúbrete la cabeza y el cuello con la almohada.",
          "Aléjate del borde si hay una ventana, lámpara o cuadro cerca.",
          "Espera a que termine el movimiento antes de levantarte. Al bajar, ten cuidado con vidrios en el piso."
        ]
      },
      {
        type: "message",
        emphasis: "La cama ya te está sosteniendo. Cúbrete la cabeza y espera."
      }
    ]
  },
  "termino": {
    title: "Cuando pare el movimiento",
    sections: [
      {
        type: "text",
        text: "El sismo ya pasó. Ahora toca salir con calma y revisar lo urgente, sin correr."
      },
      {
        type: "step",
        title: "Primeros minutos",
        list: [
          "Respira. Mira si tú o alguien cerca está herido.",
          "Sal por las escaleras si es seguro. No uses el ascensor.",
          "Si huele a gas, no enciendas luces ni llamas. Abre si puedes y sal.",
          "Aléjate de edificios dañados. Puede haber réplicas.",
          "Usa mensajes de texto si necesitas comunicar: las llamadas saturan la red."
        ]
      },
      {
        type: "message",
        emphasis: "Cuando ya estés a salvo, pasa a la guía de después: ahí está el siguiente paso."
      },
      {
        type: "next-link",
        path: "/despues",
        label: "Qué hacer después del sismo"
      }
    ]
  },
  "peligro": {
    title: "Hay gas, fuego o daños",
    sections: [
      {
        type: "warning",
        text: "Si hay olor a gas, fuego, humo o una estructura a punto de caer, sal cuando el movimiento haya parado. No te quedes a recoger cosas."
      },
      {
        type: "step",
        title: "Gas",
        list: [
          "No enciendas fósforos, velas ni interruptores si huele a gas.",
          "Abre puertas y ventanas si es seguro y sal.",
          "Cierra la llave del gas solo si puedes hacerlo sin quedarte dentro."
        ]
      },
      {
        type: "step",
        title: "Fuego o personas atrapadas",
        list: [
          "Sal y llama a emergencias: en Colombia la línea única es 123.",
          "Si no responde, intenta Bomberos 119, Cruz Roja 132 o Defensa Civil 144.",
          "No entres de nuevo a un edificio dañado para rescatar a alguien si pones tu vida en riesgo: avisa a los organismos de socorro."
        ]
      },
      {
        type: "message",
        emphasis: "Tu prioridad es salir y pedir ayuda. Los equipos de emergencia están para el rescate."
      }
    ]
  }
};
