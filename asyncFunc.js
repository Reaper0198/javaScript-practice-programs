import fs from 'fs';

function displayContent(err, data){
    if(!err){
        console.log(data);
    }
}

console.log('hi this is the beginning of the program')

// Here displayContent is the callback function which is executed when the I/O operation of reading 
// the intro.txt is complete and call stack is empty.
const fileContent = fs.readFile('intro.txt', 'utf-8', displayContent);

for(let i=1;i<10;i++){
    console.log(i);
}