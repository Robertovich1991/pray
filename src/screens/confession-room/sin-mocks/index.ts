import { graveAgaintGod } from './grave-against-god';
import { againstGodSins } from './light-against-god';
import { lightAgainstTruthSins } from './light-against-truth';
import { lightAgainstYourselfSins } from './light-against-yourself';
import { mediumAgainstTruthSins } from './medium-against-truth';
import { mediumAgainstGodSins } from './medium-against-god'
import { mediumAgainstNeighboorSins } from './medium-against-neighboor';

export const sinElements = [
  ...againstGodSins,
  ...graveAgaintGod,
  ...lightAgainstYourselfSins,
  ...mediumAgainstTruthSins,
  ///
  ...lightAgainstTruthSins,
  ...mediumAgainstGodSins,
  ...mediumAgainstNeighboorSins
];
