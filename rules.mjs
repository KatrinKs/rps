import Table from 'cli-table3';

export class Available_moves {
    static display(names) {
        console.log("Available moves: ");
        let table = new Table();
        for (let i = 0; i < names.length; ++i){
            table.push({ [i + 1] : [names[i]] })};
            table.push({'0' : 'exit'});
            table.push({'?' : 'help'});
        console.log(table.toString());};
}