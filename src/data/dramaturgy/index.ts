import { dondeAunSeSirveElPan } from './dondeAunSeSirve';
import { fractura } from './fractura';
import { gordoXtreaming } from './gordoXtreaming';
import { tlaloques } from './tlaloques';

import type {
  DramaturgyBlock,
  DramaturgyFragment,
} from './types';

import type { DramaturgyProjectId } from '../sceneProjects';

export const dramaturgyFragments: Record<
  DramaturgyProjectId,
  DramaturgyFragment
> = {
  tlaloques,
  fractura,
  dondeAunSeSirveElPan,
  gordoXtreaming,
};

export type {
  DramaturgyBlock,
  DramaturgyFragment,
};