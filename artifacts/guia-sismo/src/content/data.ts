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
    { id: 'pasos-siguientes', title: 'Pasos siguientes', icon: 'Route', path: '/guia/pasos-siguientes' }
  ]
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
  | { type: 'timeline'; phases: { period?: string; icon: string; title: string; text?: string; list?: string[] }[] }
  | { type: 'next-link'; path: string; label: string };

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
      {
        type: "next-link",
        path: "/guia/pasos-siguientes",
        label: "Pasos siguientes"
      }
    ]
  },
  "pasos-siguientes": {
    title: "¿Qué hacer luego del sismo?",
    sections: [
      {
        type: "text",
        text: "Cuando pasan las primeras horas, es normal preguntarse qué sigue. No hay un calendario exacto: cada persona y cada situación avanza a su propio ritmo. Estos son consejos generales, paso a paso."
      },
      {
        type: "step",
        title: "¿Puede ocurrir otro sismo?",
        text: "Sí, pueden presentarse réplicas. Y también puede que no ocurran. Lo importante es mantener la calma y respirar hondo. Antes de pensar en todo lo demás, enfoca tu mente en tu alrededor y en tu seguridad."
      },
      {
        type: "timeline",
        phases: [
          {
            icon: "Users",
            title: "Encontrar y estabilizar",
            list: [
              "Confirma que tú y los tuyos estén a salvo y juntos en lo posible.",
              "Mantén la calma: si sientes una réplica, respira hondo y aléjate de estructuras dañadas.",
              "Asegura lo básico: agua, alimento, abrigo y un lugar seguro donde descansar.",
              "Mantente informado solo por canales oficiales."
            ]
          },
          {
            icon: "Home",
            title: "Evaluar daños y conseguir ayuda",
            list: [
              "No entres a tu vivienda sin una evaluación si tiene daños visibles.",
              "Documenta los daños con fotos cuando sea seguro hacerlo.",
              "Acude a los puntos de asistencia y registros de ayuda habilitados por las autoridades.",
              "Pregunta por apoyo para necesidades médicas, documentos y refugio temporal."
            ]
          },
          {
            icon: "Hammer",
            title: "Recuperar y reconstruir",
            list: [
              "Retoma poco a poco tus rutinas: dormir, comer y descansar también es recuperarse.",
              "Gestiona trámites de vivienda, documentos y apoyos con calma, paso a paso.",
              "Apóyate en tu comunidad: pedir y ofrecer ayuda hace la carga más ligera.",
              "Si el miedo o la tristeza no ceden, buscar apoyo emocional es un acto de cuidado."
            ]
          },
          {
            icon: "Sprout",
            title: "Mirar hacia adelante con más calma",
            list: [
              "Prepara un plan familiar: puntos de encuentro y contactos de emergencia.",
              "Reactivación económica: retoma poco a poco tu trabajo, oficio o fuente de ingresos, un paso a la vez.",
              "Reconéctate con tu comunidad: las redes de apoyo hacen todo más llevadero.",
              "Celebra cada avance, por pequeño que sea: cada día que pasa estás saliendo adelante."
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
        text: "Para encontrar a un familiar o persona cercana de manera segura:"
      },
      {
        type: "list",
        list: [
          "Contacta primero a familiares y personas cercanas.",
          "Utiliza únicamente canales oficiales de búsqueda y registro.",
          "Evita compartir datos personales sensibles (como direcciones, teléfonos) públicamente en redes sociales.",
          "Verifica la información antes de difundirla para no generar confusión.",
          "No confíes ciegamente en publicaciones no verificadas o rumores."
        ]
      },
      {
        type: "message",
        emphasis: "Tu privacidad y la de tus seres queridos debe ser una prioridad durante la búsqueda."
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
        type: "message",
        emphasis: "Hoy no necesitas reconstruir tu vida.\nSolo necesitas atravesar este momento."
      }
    ]
  }
};
