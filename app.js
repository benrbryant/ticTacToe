// Selects all squares from document
let cells = document.querySelectorAll('.row>div');

// Variable for amount of clicks, odd are 'X', even are 'O'
let count=0;

// Adds event listener to each square
cells.forEach(function(div) {
    div.addEventListener('click', makePlay);    
});

// function for each play
function makePlay(e) {
   if(e.target.textContent=='' && !(count % 2)){
    e.target.textContent = 'X';
    count++;
    console.log(count);
    }
    else if(e.target.textContent=='' && count % 2) {
    e.target.textContent = 'O';
    count++;
    console.log(count); 
    } 
};


  

 