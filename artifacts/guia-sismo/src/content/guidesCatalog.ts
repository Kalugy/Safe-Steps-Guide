export type CatalogGuide = {
  id: string;
  title: string;
  description: string;
  icon: string;
  path?: string;
  comingSoon?: boolean;
};

export const guidesCatalogContent = {
  title: 'Guías',
  subtitle: 'Elige una guía para saber qué hacer antes, durante y después.',
};

/** Add more guides here as they are ready. */
export const guidesCatalog: CatalogGuide[] = [
  {
    id: 'sismos',
    title: 'Sismos',
    description: 'Qué hacer antes, durante y después de un terremoto.',
    icon: 'AlertTriangle',
    path: '/durante',
  },
  {
    id: 'proximamente',
    title: 'Más guías',
    description: 'Estamos preparando nuevos contenidos. Vuelve pronto.',
    icon: 'Sparkles',
    comingSoon: true,
  },
];
