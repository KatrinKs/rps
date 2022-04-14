import {Available_moves} from './rules.mjs';
import {Rps} from './rps.mjs';
import {Generation} from './generathion.mjs';
import randomNumber from 'random-number-csprng';
import readlineSync from 'readline-sync';
import Promise from 'bluebird';
import {exit} from 'process';

const names = process.argv.slice(2);

if (names.length < 3 || names.length % 2 == 0) 
{
  console.log('Wrong string.');
  exit();
}

Promise.resolve().then(function() {
	return randomNumber(1, 10000);
}).then(function(key) {
  do 
{
  let comp_value = Math.ceil(Math.random() * names.length);
  console.log(Generation.create_hmac(comp_value, key));
  Available_moves.display(names);
  var player_move = readlineSync.question("Enter your move:");
  while (player_move > names.length || player_move < 0) {
      console.log('Wrong move. Try again.\n')
      Available_moves.display(names);
      player_move = readlineSync.question("Enter your move:");
  }
  Rps.move(player_move, names);
  if (player_move != '?'){
    console.log(`Computer move: ${comp_value}`);
    console.log(Generation.solve(player_move, comp_value, names.length));
    console.log(Generation.create_hmac_key(key) + '\n');
  }
}
while(player_move != '0')
}).catch(function(err) {
	console.log("Something went wrong: " + err.code);
});