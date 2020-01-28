let turn = document.querySelectorAll('.row > div');
turn = document.getElementsByClassName('.row > div');
turn.addEventListener('click', makePlay, false);

  
function makePlay(){
    turn.textContent = 'X';
    };
console.log(turn);
  

 