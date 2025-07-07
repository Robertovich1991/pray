import { graveAgaintGod } from './grave-against-god';
import { againstGodSins } from './light-against-god';
import { lightAgainstTruthSins } from './light-against-truth';
import { lightAgainstYourselfSins } from './light-against-yourself';
import { mediumAgainstTruthSins } from './medium-against-truth';
import { mediumAgainstGodSins } from './medium-against-god'
import { mediumAgainstNeighboorSins } from './medium-against-neighboor';
import { mediumAgainstYourselfSins } from './medium-against-yourself';
import { graveAgainstNeighboorSins } from './grave-against-neighboor';
import { graveAgainstYourselfSins } from './grave-against-yourself';

export const sinElements = [
  ...againstGodSins,
  ...graveAgaintGod,
  ...lightAgainstYourselfSins,
  ...mediumAgainstTruthSins,
  ///
  ...lightAgainstTruthSins,
  ...mediumAgainstGodSins,
  ...mediumAgainstNeighboorSins,
  ...mediumAgainstYourselfSins,
  ...graveAgainstNeighboorSins,
  ...graveAgainstYourselfSins
];
