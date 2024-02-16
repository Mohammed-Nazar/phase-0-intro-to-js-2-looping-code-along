// Code your solutions in this file

function wrapGifts(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`Wrapped ${array[0]} and added a bow!`);
        
    }
}



function writeCards(array, event){
    let newaraay = [];
    for (let i = 0; i < array.length; i++) {
        newaraay.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return newaraay;
}

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"))




function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}

// countDown(10);