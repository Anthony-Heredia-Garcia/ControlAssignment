const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const myArray = [8, 6, 7, 5, 3, 0, 9];
const newRandomNumber = Math.random();


// if (randomNumber > 0.7) {
//     alert("Big Number Generated");
//     console.log(randomNumber);
// }

if ((randomNumber > 0.7 && newRandomNumber > 0.7) || (randomNumber < 0.2 || newRandomNumber < 0.2)) {
    alert("Something Happened");
    console.log(randomNumber, newRandomNumber);
}

function regLoop(array) {
    for (let i = (array.length-1); i >= 0; i--) {
        console.log(array[i]);
    }
}

function notRegLoop() {
    for (const num of myArray){
        console.log(num);
    }
}

regLoop(myArray);
notRegLoop();