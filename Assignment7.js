/*

Model and program a simple restaurant seating system. 
The restaurant should have multiple
tables each of a different size. 
Parties (i.e. customers) should arrive at the restaurant and
should be seated at the smallest available table. 
If no tables are available the customer goes
away angry (i.e. don’t model waiting). 
Once a party has been seated they will occupy the table
for a specific period of time and will then leave it. 
Have your simulation run over a few simulated
hours and a few simulated parties and observe (i.e. console.log) 
how the system evolves.
The tables, parties, and usage times can be hard-coded 
into your program or you can
randomize any of these if you wish.

*/

function main() {
    // Initialize tables 
    let table1 = { size: 2, occupied: false };
    let table2 = { size: 4, occupied: false };
    let table3 = { size: 6, occupied: false };

    // List of party sizes
    let parties = [2, 4, 1, 5];

    for (let i = 0; i < parties.length; i++) {
        console.log(`Time: ${i + 1}`);
        seatParty(parties[i], table1, table2, table3);
        logState(table1, table2, table3);
    }
}

function seatParty(partySize, table1, table2, table3) {
    
    if (table1.occupied === false && table1.size >= partySize) {
        table1.occupied = true;
        console.log(`Party of ${partySize} seated at table for 2`);

    } else if (table2.occupied === false && table2.size >= partySize) {
        table2.occupied = true;
        console.log(`Party of ${partySize} seated at table for 4`);

    } else if (table3.occupied === false && table3.size >= partySize) {
        table3.occupied = true;
        console.log(`Party of ${partySize} seated at table for 6`);

    } else {
        console.log(`Party of ${partySize} leaves cuz (no table available).`);

    }
}


function logState(table1, table2, table3) {
    console.log(`Table 1: Size ${table1.size}, Occupied: ${table1.occupied}`);
    console.log(`Table 2: Size ${table2.size}, Occupied: ${table2.occupied}`);
    console.log(`Table 3: Size ${table3.size}, Occupied: ${table3.occupied}`);
}

main();
