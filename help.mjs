import { Generation } from './generathion.mjs';
import Table from 'cli-table3';

export class Rps_help {
  static display (names) {    
    let table = new Table();
    table.push({ 'Player \ Computer' : names })
    for (let i = 0; i < names.length; ++i){
      let mlist = []
      for (let j = 0; j < names.length; ++j) {mlist.push(Generation.solve(i, j, names.length));}
      table.push({ [names[i]] : mlist })}   
    console.log(table.toString());
  }
}