let score=JSON.parse(localStorage.getItem('score')) ||  {
  win:0,
  lose:0,
  tie:0
};

updateScoreElement();

/*
if (!score){
  score = {
    win:0,
    lose:0,
    tie:0
  }
}
*/

function playGame(playerMove){
const computerMove=pickcomputerMove();

let result='';
if (playerMove==='scissors'){
  if(computerMove==='rock'){
    result='you lose.';
  }
  else if(computerMove==='paper'){
    result='you win.';
  }
  else if(computerMove==='scissors'){
    result='Tie.';
  }
}


else if(playerMove==='rock'){
  if(computerMove==='rock'){
    result='Tie.';
  }   

  else if(computerMove==='paper'){
    result='you lose.';
  }
  else if(computerMove==='scissors'){
    result='you win.';
  }
}
else if(playerMove==='paper'){
  if(computerMove==='rock'){
    result='you win.';
  }
  else if(computerMove==='paper'){
    result='Tie.';
  }
  else if(computerMove==='scissors'){
    result='you lose.';
  }
}

if (result === 'you win.'){
  score.win+=1;
}
else if(result === 'you lose.'){
  score.lose+=1;
}
else if(result==='Tie.'){
  score.tie+=1;
}

localStorage.setItem('score', JSON.stringify(score));
updateScoreElement();
document.querySelector('.js-result').innerHTML = result;
document.querySelector('.js-choice').innerHTML = `you <img src="${playerMove}-emoji.png" class="image-css"> <img src="${computerMove}-emoji.png" class="image-css"> computer`
}

function updateScoreElement(){
document.querySelector('.js-score').innerHTML = `wins: ${score.win}, loses: ${score.lose}, ties: ${score.tie}`;
}



function pickcomputerMove(){
const randomNumber=Math.random();
let computerMove='';
if(randomNumber>0 && randomNumber<1/3){
  computerMove='rock';
}
else if (randomNumber>=1/3 && randomNumber<2/3){
  computerMove='paper';
}
else if (randomNumber>=2/3 && randomNumber<1){
  computerMove='scissors';
}
return computerMove;
}
