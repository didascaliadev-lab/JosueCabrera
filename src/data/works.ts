export interface SelectedWork {
  id: string;
  title: string;
  discipline: string;
  disciplineEs: string;
  disciplineEn: string;
  year: string;
  slug?: string;
  descriptionEs?: string;
  descriptionEn?: string;
  image?: string;
  link?: string;
}

export const SELECTED_WORKS: SelectedWork[] = [
  {
    id: 'inestables',
    title: 'INESTABLES',
    discipline: 'Dirección / Dramaturgia',
    disciplineEs: 'Dirección / Dramaturgia',
    disciplineEn: 'Directing / Playwriting',
    year: '2024',
    slug: 'inestables',
    descriptionEs: 'Pieza escénica contemporánea sobre la fragilidad y el ritmo de la vida moderna.',
    descriptionEn: 'Contemporary stage piece addressing fragility and the cadence of modern life.'
  },
  {
    id: 'proyecto-escenico',
    title: 'PROYECTO ESCÉNICO',
    discipline: 'Actor',
    disciplineEs: 'Actor / Interpretación',
    disciplineEn: 'Acting / Performance',
    year: '2023',
    slug: 'proyecto-escenico',
    descriptionEs: 'Producción teatral con énfasis en el lenguaje corporal y la improvisación.',
    descriptionEn: 'Theater production emphasizing movement language and improvisation.'
  },
  {
    id: 'taller-creacion',
    title: 'TALLER DE CREACIÓN',
    discipline: 'Pedagogía',
    disciplineEs: 'Pedagogía teatral',
    disciplineEn: 'Theater Pedagogy',
    year: '2025',
    slug: 'taller-creacion',
    descriptionEs: 'Laboratorio formativo para actores y creadores escénicos emergentes.',
    descriptionEn: 'Training laboratory for actors and emerging stage creators.'
  }
];
