export const actingProjects = [
  {
    id: 'naufragos',
    year: '2016',
    images: [
      '/images/escena/actuacion/naufragos/01.webp',
      '/images/escena/actuacion/naufragos/02.webp',
      '/images/escena/actuacion/naufragos/03.webp',
    ],
  },
  {
    id: 'okanjore',
    year: '2016—2020',
    images: [
      '/images/escena/actuacion/okanjore/01.webp',
      '/images/escena/actuacion/okanjore/02.webp',
      '/images/escena/actuacion/okanjore/03.webp',
    ],
  },
  {
    id: 'teatroForum',
    year: '2012—2019',
    images: [
      '/images/escena/actuacion/forum/01.webp',
      '/images/escena/actuacion/forum/02.webp',
      '/images/escena/actuacion/forum/03.webp',
    ],
  },
  {
    id: 'raiz',
    year: '2017',
    images: [
      '/images/escena/actuacion/raiz/01.webp',
      '/images/escena/actuacion/raiz/02.webp',
      '/images/escena/actuacion/raiz/03.webp',
    ],
  },
] as const;

export const screenProjects = [
  {
    id: 'rachasRotas',
    year: '2017',
    type: 'film',
  },
  {
    id: 'casaFlores',
    year: '2018',
    type: 'series',
  },
  {
    id: 'bronco',
    year: '2019',
    type: 'series',
  },
  {
    id: 'territorio',
    year: '2019',
    type: 'film',
  },
  {
    id: 'laif',
    year: '',
    type: 'series',
  },
] as const;

export const directingProjects = [
  {
    id: 'esLoQueNosToca',
    year: '2025-2026',
    images: [
      '/images/escena/direccion/foro/01.webp',
      '/images/escena/direccion/foro/02.webp',
      '/images/escena/direccion/foro/03.webp',
    ],
  },
  {
    id: 'inestables',
    year: '2026',
    images: [
      '/images/escena/direccion/inestables/01.webp',
      '/images/escena/direccion/inestables/02.webp',
      '/images/escena/direccion/inestables/03.webp',
    ],
  },
  {
    id: 'vacio',
    year: '2024',
    images: [
      '/images/escena/direccion/vacio/01.webp',
      '/images/escena/direccion/vacio/02.webp',
      '/images/escena/direccion/vacio/03.webp',
    ],
  },
  {
    id: 'tlaloques',
    year: '2022',
    images: [
      '/images/escena/direccion/tlaloques/01.webp',
      '/images/escena/direccion/tlaloques/02.webp',
      '/images/escena/direccion/tlaloques/03.webp',
    ],
  },
] as const;
export const dramaturgyProjects = [
  {
    id: 'tlaloques',
    year: '2022',
  },
  {
    id: 'fractura',
    year: '2025',
  },
  {
    id: 'dondeAunSeSirveElPan',
    year: '2025',
  },
  {
    id: 'gordoXtreaming',
    year: '2026',
  },
] as const;

export type DramaturgyProjectId =
  (typeof dramaturgyProjects)[number]['id'];
