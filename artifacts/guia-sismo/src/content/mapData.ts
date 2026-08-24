export type MapLayerId = 'mountains' | 'earthquakes' | 'volcanoes' | 'floods';

export type MapPoint = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  year?: number;
  magnitude?: number;
  summary: string;
  source: string;
};

export type MapRegion = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  radiusKm: number;
  summary: string;
  source: string;
};

export type MountainRange = {
  id: string;
  name: string;
  path: [number, number][];
  summary: string;
};

/** Educational sample based on public historical records (SGC / UNGRD / IDEAM). Not a live feed. */
export const mapContent = {
  title: 'Mapa de Colombia',
  subtitle:
    'Explora montañas, sismos históricos, volcanes y zonas con riesgo climático. Usa los botones para encender o apagar cada capa.',
  note: 'Datos educativos de referencia (no en tiempo real). Para información oficial consulta el SGC, la UNGRD y el IDEAM.',
  layers: [
    {
      id: 'mountains' as const,
      label: 'Montañas',
      hint: 'Cordilleras',
      color: '#5c6b4a',
    },
    {
      id: 'earthquakes' as const,
      label: 'Sismos',
      hint: 'Epicentros',
      color: '#c45c26',
    },
    {
      id: 'volcanoes' as const,
      label: 'Volcanes',
      hint: 'Activos',
      color: '#9b2d2d',
    },
    {
      id: 'floods' as const,
      label: 'Clima',
      hint: 'Inundaciones',
      color: '#2f6f8f',
    },
  ],
};

export const mountainRanges: MountainRange[] = [
  {
    id: 'occidental',
    name: 'Cordillera Occidental',
    summary: 'Cadena oeste de los Andes colombianos. Alta amenaza sísmica y de deslizamientos en laderas.',
    path: [
      [1.2, -77.6],
      [2.5, -77.0],
      [3.8, -76.7],
      [5.0, -76.2],
      [6.2, -76.0],
      [7.5, -75.8],
    ],
  },
  {
    id: 'central',
    name: 'Cordillera Central',
    summary: 'Cordillera volcánica principal. Aquí se concentran varios volcanes activos y sismos históricos.',
    path: [
      [1.5, -76.9],
      [2.9, -76.2],
      [4.5, -75.5],
      [5.5, -75.3],
      [6.8, -75.4],
      [8.0, -75.2],
    ],
  },
  {
    id: 'oriental',
    name: 'Cordillera Oriental',
    summary: 'Cadena este de los Andes. Piedemonte con sismicidad y zonas expuestas a lluvias intensas.',
    path: [
      [1.8, -75.8],
      [3.5, -74.5],
      [4.7, -74.0],
      [6.0, -73.2],
      [7.2, -72.8],
      [8.5, -73.0],
    ],
  },
];

export const earthquakePoints: MapPoint[] = [
  {
    id: 'chocó-2026',
    name: 'San José del Palmar (Chocó)',
    lat: 4.9,
    lng: -76.25,
    year: 2026,
    magnitude: 7.4,
    summary:
      'Sismo del 10 de agosto de 2026. Epicentro cerca de San José del Palmar. Fue sentido en varias regiones del país.',
    source: 'SGC / cobertura institucional 2026',
  },
  {
    id: 'armenia-1999',
    name: 'Eje Cafetero (Armenia)',
    lat: 4.46,
    lng: -75.68,
    year: 1999,
    magnitude: 6.2,
    summary: '25 de enero de 1999. Uno de los desastres sísmicos más recordados del país; afectó Quindío y Risaralda.',
    source: 'SGC / registros históricos',
  },
  {
    id: 'popayan-1983',
    name: 'Popayán (Cauca)',
    lat: 2.44,
    lng: -76.61,
    year: 1983,
    magnitude: 5.5,
    summary: '31 de marzo de 1983. Impulsó normas de construcción sismo resistente en Colombia.',
    source: 'SGC / registros históricos',
  },
  {
    id: 'tumaco-1979',
    name: 'Costa Pacífica (Tumaco)',
    lat: 1.6,
    lng: -79.35,
    year: 1979,
    magnitude: 8.1,
    summary: '12 de diciembre de 1979. Sismo de subducción en el Pacífico; asociado a tsunami en la costa.',
    source: 'SGC / UNGRD',
  },
  {
    id: 'murindo-1992',
    name: 'Murindó (Antioquia)',
    lat: 6.8,
    lng: -76.4,
    year: 1992,
    magnitude: 7.1,
    summary: '18 de octubre de 1992. Fuerte sismo en el noroeste del país.',
    source: 'SGC / registros históricos',
  },
  {
    id: 'bucaramanga-nest',
    name: 'Nido sísmico de Bucaramanga',
    lat: 6.92,
    lng: -73.05,
    year: undefined,
    magnitude: undefined,
    summary:
      'Zona con alta concentración de sismos (Mesa de Los Santos, Santander). Muchos son profundos; la actividad es frecuente.',
    source: 'SGC',
  },
  {
    id: 'paez-1994',
    name: 'Páez (Cauca / Huila)',
    lat: 2.75,
    lng: -76.0,
    year: 1994,
    magnitude: 6.4,
    summary: '6 de junio de 1994. Sismo seguido de avalanchas y deslizamientos en la cuenca del río Páez.',
    source: 'SGC / registros históricos',
  },
];

export const volcanoPoints: MapPoint[] = [
  {
    id: 'ruiz',
    name: 'Nevado del Ruiz',
    lat: 4.892,
    lng: -75.324,
    summary: 'Volcán activo en la Cordillera Central. Erupción de 1985 asociada a la tragedia de Armero.',
    source: 'SGC',
  },
  {
    id: 'galeras',
    name: 'Galeras',
    lat: 1.222,
    lng: -77.359,
    summary: 'Uno de los volcanes más activos de Colombia, cerca de Pasto (Nariño).',
    source: 'SGC',
  },
  {
    id: 'purace',
    name: 'Puracé',
    lat: 2.314,
    lng: -76.396,
    summary: 'Volcán activo en Cauca. Monitoreado por el SGC; puede cambiar de nivel de alerta.',
    source: 'SGC',
  },
  {
    id: 'huila',
    name: 'Nevado del Huila',
    lat: 2.93,
    lng: -76.03,
    summary: 'Volcán activo entre Cauca, Huila y Tolima. Ha presentado erupciones en décadas recientes.',
    source: 'SGC',
  },
  {
    id: 'machin',
    name: 'Cerro Machín',
    lat: 4.48,
    lng: -75.39,
    summary: 'Volcán en Tolima con potencial explosivo. Incluido en el monitoreo nacional.',
    source: 'SGC',
  },
  {
    id: 'cumbal',
    name: 'Cumbal',
    lat: 0.95,
    lng: -77.79,
    summary: 'Volcán en Nariño, cerca de la frontera con Ecuador.',
    source: 'SGC',
  },
];

export const floodRegions: MapRegion[] = [
  {
    id: 'mojana',
    name: 'La Mojana / Bajo Magdalena',
    lat: 8.5,
    lng: -74.6,
    radiusKm: 90,
    summary: 'Zona histórica de inundaciones por desbordes del Magdalena, Cauca y San Jorge, agravadas en temporadas de lluvias y La Niña.',
    source: 'IDEAM / UNGRD',
  },
  {
    id: 'atrato',
    name: 'Cuenca del Atrato (Chocó)',
    lat: 6.2,
    lng: -76.7,
    radiusKm: 70,
    summary: 'Alta precipitación del Pacífico. Recurrentes inundaciones y aislamiento por lluvias intensas.',
    source: 'IDEAM / UNGRD',
  },
  {
    id: 'sabana-bogota',
    name: 'Sabana de Bogotá',
    lat: 4.7,
    lng: -74.15,
    radiusKm: 45,
    summary: 'Inundaciones urbanas y desbordes en épocas de lluvia intensa; vulnerabilidad por ocupación de rondas.',
    source: 'IDEAM / autoridades locales',
  },
  {
    id: 'valle-cauca',
    name: 'Valle del río Cauca',
    lat: 3.45,
    lng: -76.52,
    radiusKm: 55,
    summary: 'Inundaciones y crecientes en el valle interandino; se combina con amenaza sísmica intermedia-alta.',
    source: 'IDEAM / UNGRD',
  },
  {
    id: 'antioquia-laderas',
    name: 'Laderas de Antioquia',
    lat: 6.25,
    lng: -75.6,
    radiusKm: 50,
    summary: 'Alta exposición a movimientos en masa detonados por lluvias. Históricamente entre las zonas más afectadas.',
    source: 'UNGRD / análisis regionales',
  },
  {
    id: 'orinoquia',
    name: 'Orinoquía (llanos)',
    lat: 5.0,
    lng: -71.5,
    radiusKm: 110,
    summary: 'Inundaciones estacionales extensas. Menor amenaza sísmica relativa, pero alto impacto climático.',
    source: 'IDEAM',
  },
];

export const COLOMBIA_CENTER: [number, number] = [4.5, -73.0];
export const COLOMBIA_BOUNDS: [[number, number], [number, number]] = [
  [-0.5, -79.5],
  [13.5, -66.5],
];

export type HistoryKind = 'earthquake' | 'volcano' | 'flood' | 'landslide';

export type HistoryEvent = {
  id: string;
  kind: HistoryKind;
  layer: Exclude<MapLayerId, 'mountains'>;
  dateLabel: string;
  year: number;
  title: string;
  place: string;
  lat: number;
  lng: number;
  zoom: number;
  magnitude?: number;
  summary: string;
  source: string;
};

const kindMeta: Record<
  HistoryKind,
  { label: string; color: string }
> = {
  earthquake: { label: 'Sismo', color: '#c45c26' },
  volcano: { label: 'Volcán', color: '#9b2d2d' },
  flood: { label: 'Clima', color: '#2f6f8f' },
  landslide: { label: 'Deslizamiento', color: '#8a6d3b' },
};

export function getHistoryKindMeta(kind: HistoryKind) {
  return kindMeta[kind];
}

/** Chronological educational timeline (newest first). Click an event to focus it on the map. */
export const disasterHistory: HistoryEvent[] = [
  {
    id: 'hist-choco-2026',
    kind: 'earthquake',
    layer: 'earthquakes',
    dateLabel: '10 de agosto de 2026',
    year: 2026,
    title: 'Sismo de magnitud 7.4',
    place: 'San José del Palmar, Chocó',
    lat: 4.9,
    lng: -76.25,
    zoom: 8,
    magnitude: 7.4,
    summary:
      'Epicentro cerca de San José del Palmar. Fue sentido en varias regiones de Colombia y países vecinos. Sirve como referencia reciente de un sismo fuerte en el occidente del país.',
    source: 'SGC / cobertura institucional 2026',
  },
  {
    id: 'hist-nina-2010',
    kind: 'flood',
    layer: 'floods',
    dateLabel: '2010 – 2011',
    year: 2011,
    title: 'Temporada de La Niña',
    place: 'Varias regiones (Magdalena / costa)',
    lat: 8.2,
    lng: -74.5,
    zoom: 6,
    summary:
      'Una de las temporadas de lluvias más impactantes de las últimas décadas: inundaciones y deslizamientos en muchas zonas. Muestra cómo el clima también define la vulnerabilidad del país.',
    source: 'IDEAM / UNGRD',
  },
  {
    id: 'hist-armenia-1999',
    kind: 'earthquake',
    layer: 'earthquakes',
    dateLabel: '25 de enero de 1999',
    year: 1999,
    title: 'Sismo del Eje Cafetero',
    place: 'Armenia, Quindío',
    lat: 4.46,
    lng: -75.68,
    zoom: 9,
    magnitude: 6.2,
    summary:
      'Uno de los sismos más recordados del país. Armenia y municipios vecinos sufrieron daños graves. Impulsó mejoras en preparación y construcción.',
    source: 'SGC / UNGRD',
  },
  {
    id: 'hist-paez-1994',
    kind: 'earthquake',
    layer: 'earthquakes',
    dateLabel: '6 de junio de 1994',
    year: 1994,
    title: 'Sismo de Páez',
    place: 'Cauca / Huila',
    lat: 2.75,
    lng: -76.0,
    zoom: 8,
    magnitude: 6.4,
    summary:
      'El sismo desencadenó avalanchas y deslizamientos en la cuenca del río Páez. Ejemplo de cómo un temblor y las laderas pueden combinarse.',
    source: 'SGC / registros históricos',
  },
  {
    id: 'hist-murindo-1992',
    kind: 'earthquake',
    layer: 'earthquakes',
    dateLabel: '18 de octubre de 1992',
    year: 1992,
    title: 'Sismo de Murindó',
    place: 'Murindó, Antioquia',
    lat: 6.8,
    lng: -76.4,
    zoom: 8,
    magnitude: 7.1,
    summary:
      'Fuerte sismo en el noroeste colombiano. Forma parte de la sismicidad asociada a la zona de subducción y fallas del Pacífico–Andes.',
    source: 'SGC / registros históricos',
  },
  {
    id: 'hist-armero-1985',
    kind: 'volcano',
    layer: 'volcanoes',
    dateLabel: '13 de noviembre de 1985',
    year: 1985,
    title: 'Erupción del Nevado del Ruiz',
    place: 'Armero, Tolima',
    lat: 4.97,
    lng: -74.85,
    zoom: 9,
    summary:
      'La erupción generó lahares que arrasaron Armero. No fue solo lava: el agua, el hielo y el lodo marcaron la tragedia. Hoy el volcán sigue bajo monitoreo del SGC.',
    source: 'SGC / UNGRD',
  },
  {
    id: 'hist-popayan-1983',
    kind: 'earthquake',
    layer: 'earthquakes',
    dateLabel: '31 de marzo de 1983',
    year: 1983,
    title: 'Sismo de Popayán',
    place: 'Popayán, Cauca',
    lat: 2.44,
    lng: -76.61,
    zoom: 9,
    magnitude: 5.5,
    summary:
      'Destruyó gran parte del centro histórico y aceleró la adopción de normas de construcción sismo resistente en Colombia.',
    source: 'SGC / registros históricos',
  },
  {
    id: 'hist-tumaco-1979',
    kind: 'earthquake',
    layer: 'earthquakes',
    dateLabel: '12 de diciembre de 1979',
    year: 1979,
    title: 'Sismo y tsunami del Pacífico',
    place: 'Tumaco / costa Pacífica',
    lat: 1.6,
    lng: -79.35,
    zoom: 7,
    magnitude: 8.1,
    summary:
      'Sismo de subducción en el Pacífico, seguido de tsunami que afectó municipios costeros como Tumaco y Guapi. Muestra el riesgo de costa + sismo.',
    source: 'SGC / UNGRD',
  },
  {
    id: 'hist-pacifico-1906',
    kind: 'earthquake',
    layer: 'earthquakes',
    dateLabel: '31 de enero de 1906',
    year: 1906,
    title: 'Gran sismo del Pacífico',
    place: 'Costa Pacífica',
    lat: 1.0,
    lng: -79.5,
    zoom: 6,
    magnitude: 8.8,
    summary:
      'Uno de los sismos más grandes registrados en la historia del Pacífico colombiano–ecuatoriano. Referencia de amenaza de subducción a largo plazo.',
    source: 'SGC / catálogos históricos',
  },
];

export const historyYears = Array.from(
  new Set(disasterHistory.map((event) => event.year)),
).sort((a, b) => b - a);
