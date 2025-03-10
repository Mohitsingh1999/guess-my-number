'use strict'

let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highScore=0;


document.querySelector('.check').addEventListener('click',()=>{
    const guess=document.querySelector('.guess').value;
    if(!guess){
        document.querySelector('.message').textContent='📛 No Number';
        console.log(guess,secretNumber);
    }
   
    else if(guess<secretNumber){
        if(score>1){
         document.querySelector('.message').textContent = '📉 To low';
         score--;
         document.querySelector('.score').textContent = score;
      
    }else{
        document.querySelector('.message').textContent = '😲 You lost the game';
        document.querySelector('.score').textContent = 0;

    }
    }
    else if(guess>secretNumber){
        if(score>1){
        document.querySelector('.message').textContent = '📈 To High';
        score--;
        document.querySelector('.score').textContent = score;
        
        }else{
            document.querySelector('.message').textContent = '😲 You lost the game';
        document.querySelector('.score').textContent = 0;
        }
   } 
   else{
    document.querySelector('.number').textContent=secretNumber;
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //console.log(score);
    if(score>highScore){
        highScore=score;
        document.querySelector(".highscore").textContent=highScore;
    }
    
}

document.querySelector('.again').addEventListener('click',()=>{
    score=20;
    secretNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('body').style.backgroundColor='#222' ;
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.number').textContent='?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value='';

});


  
  
});