alert('We`re about to start simply "number guessing" console game');
alert('I`ve chosen one number which is more than 0 and less than 11');
let roundNumber = 1;
const randomGenerateNumber =  Math.ceil(Math.random()*10);
let playerNumber = 0;
let timer1 = ''; 
let timer2 = ''; 
let timer3 = ''; 

const checkResult = () =>{
    if (randomGenerateNumber === playerNumber){
        setTimeout(()=>{console.warn(`Congratulation. You WIN!🥇`)}, 2000);
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
    }else if(roundNumber === 3){
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        setTimeout(()=>{console.warn("You lose! 😥")},2000);  
    }else if (randomGenerateNumber > playerNumber){
        console.log("Bad Shot!📦");
        console.warn('Your number is "too small"⬇️');
        roundNumber++;
        startRound(roundNumber);
        timer1 = setTimeout(checkResult, 2000);
    }else if (randomGenerateNumber < playerNumber){
        console.log("Bad Shot!📦");
        console.warn('Your number is "too big"⬆️');
        roundNumber++;
        startRound(roundNumber);
        timer2 = setTimeout(checkResult, 2000);
    }
}

let startRound = (turn) =>{
    playerNumber = parseInt(prompt('Write below your "shot":'));
    console.log(randomGenerateNumber);
    console.log(`It's Yours ${turn} of three chances.`)
    console.log(`Your number is:  ${playerNumber}.`);
    console.log(`Now im thinking... 🤔🤔🤔`);
    timer3 = setTimeout(checkResult, 2000);
}

startRound(roundNumber);