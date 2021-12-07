function computerPlay(){
    let x = getRndInteger(1,3);
    var result;
    if (x == 1){
        result = 'Rock';
    } else if (x == 2){
        result = 'Paper';
    } else {
        result = 'Scissors';
    }
    return result;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function playSingleRound(playerSelection, computerSelection){
    let p = playerSelection.toString().toLowerCase();
    let c = computerSelection.toString().toLowerCase();
    if (p == 'rock'){
        if (c == 'paper'){
            return "You Lose! Paper beats Rock";
        } else if (c == 'scissors'){
            return "You win! Rock beats Scissors";
        } else{
            return 'tie';
        }
    } else if (p == 'paper'){
        if (c == 'paper'){
            return "tie";
        } else if (c == 'scissors'){
            return "You Lose! Scissors beats Paper";
        } else{
            return 'You win! Paper beats Rock';
        }
    } else {
        if (c == 'paper'){
            return "You win! Scissors beats Paper";
        } else if (c == 'scissors'){
            return "tie";
        } else{
            return 'You lose! Rock beats Scissors';
        }
    }
}

function game(){
    let pScore = 0;
    let cScore = 0;
    var p;
    var c;
    for (let i = 0;i < 5; i++){
        p = prompt("Rock paper or Scissors?");
        c = computerPlay();
        console.log(playSingleRound(p,c));
    }
}

const buttons = document.querySelectorAll(('#playbutton'));
const result = document.querySelector('#result');
const pscore = document.querySelector('#playerScore');
const cscore = document.querySelector('#computerScore');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let x = playSingleRound(button.textContent,computerPlay());
        result.textContent = x;
        if (x.charAt(4).toLowerCase() == 'w'){
            pscore.textContent = (parseInt(pscore.textContent)+1).toString();
        } else if (x.charAt(4).toLowerCase() == 'l'){
            cscore.textContent = (parseInt(cscore.textContent)+1).toString();
        }
    });
});