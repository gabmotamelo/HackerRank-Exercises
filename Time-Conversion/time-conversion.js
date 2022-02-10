'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function timeConversion(s) {
    let amPm = s.charAt(8);
    let militaryHour = '' ;
    if (amPm == 'A'){
        if(s.substring(0,2) == '12'){
            militaryHour = '00';
        }
        else { 
        militaryHour = s.substring(0,2);
        }
    } 
    else { // p
        if (s.substring(0,2) == '12') {
            militaryHour = s.substring(0,2);
        }
        else {
            militaryHour = parseInt(s.substring(0,2), 10) + 12;
        }
    }
    return militaryHour + s.substring(2,8);
}

//1.) 12 AM -> 00
//2.) 1 AM TO 12 PM -> do nothing
//3.)1 PM to 11 PM -> take hour, add 12

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
