// alert('We`re about to start simply "number guessing" console game');
// alert('I`ve chosen one number which is more than 0 and less than 11');
let roundNumber = 1;
const randomGenerateNumber =  Math.ceil(Math.random()*10);
let playerNumber = 0;

const checkResult = () =>{
    if (roundNumber === 3){
        console.warn("You lose! 😥");
    
        // return 0;
    }
    else if(randomGenerateNumber === playerNumber){
        console.warn(`Congratulation. You WIN 🥇`);

    }else if (randomGenerateNumber > playerNumber){
        console.warn('Your number is "too small"⬇️');
        roundNumber++;
        startRound(roundNumber);
        setTimeout(checkResult, 2000);
    }else if (randomGenerateNumber < playerNumber){
        console.warn('Your number is "too big"⬆️');
        roundNumber++;
        startRound(roundNumber);
        setTimeout(checkResult, 2000);
    }
}

let startRound = (turn) =>{
    playerNumber = parseInt(prompt('Write below your "shot":'));
    console.log(randomGenerateNumber);
    console.log(`It's Yours ${roundNumber} of three chances.`)
    console.log(`Your number is:  ${playerNumber}.`);
    console.log(`Now im thinking... 🤔🤔🤔`);
    timer2 = setTimeout(checkResult, 2000);
    
}

startRound(roundNumber);


