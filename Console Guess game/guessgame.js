// alert('We`re about to start simply "number guessing" console game');
// alert('I`ve chosen one number which is more than 0 and less than 11');
let roundNumber = 1;
let playerNumber = parseInt(prompt('Write below your "shot" from 1 to 20, and open console in DevTools'));

const randomGenerateNumber =  Math.ceil(Math.random()*10);
console.log(randomGenerateNumber);
console.log(`It's Yours ${roundNumber} of three chances.`)
console.log(`Your number is:  ${playerNumber}.`);
console.log(`Now im thinking... 🤔🤔🤔`)


const checkResult = (randNum, pickedNum, turn) =>{
    if(randNum === pickedNum){
        console.warn(`Congratulation. You WIN 🥇`);
    }else if (randNum > pickedNum){
        turn++;
        console.warn(`Your number is too small ⬇️`)
    }
}

setTimeout (checkResult(randomGenerateNumber, playerNumber,), 5000);

