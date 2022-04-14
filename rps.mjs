import {Available_moves} from './rules.mjs';
import {Rps_help} from './help.mjs';
import {exit} from 'process';

export class Rps{
  static move(player_move, names){
    if (names[player_move - 1]) {
      console.log(`Your move ${player_move}`);}
    else if (player_move == '?') {
      return Rps_help.display(names);}
    else if (player_move == 0) {
      exit()}
    else {
      console.log('You put wrong argv. Try again.');
      Available_moves.display(names);
      
    };
  }
};