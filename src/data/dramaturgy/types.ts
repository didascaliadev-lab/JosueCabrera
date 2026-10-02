import type { DramaturgyProjectId } from '../sceneProjects';

export type DramaturgyBlock =
  | {
      type: 'scene';
      text: string;
    }
  | {
      type: 'character';
      text: string;
    }
  | {
      type: 'dialogue';
      text: string;
    }
  | {
      type: 'stageDirection';
      text: string;
    }
  | {
      type: 'text';
      text: string;
    };

export interface DramaturgyFragment {
  id: DramaturgyProjectId;
  blocks: DramaturgyBlock[];
}