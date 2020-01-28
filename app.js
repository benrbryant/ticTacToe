// Selects all squares from document
let cells = document.querySelectorAll('.row>div');

cells.forEach(function(cells) {
    addEventListener('click', makePlay);
});

function makePlay(e) {
   e.target.textContent = 'X';
};
  
console.log(cells); 
  

 