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
        console.log(e.target);
    }
    else if(e.target.textContent=='' && count % 2) {
        e.target.textContent = 'O';
        count++;
        console.log(count); 
        console.log(e.target);
    } 
    if(count>=5){
        // Conditions to check game result
        let test = Array.from(cells);
        
        // Horizontal Wins for X
        if(test[0].textContent == "X" && test[1].textContent == "X" && test[2].textContent == "X") {
            alert('X Wins!');
        } 
        else if(test[3].textContent == "X" && test[4].textContent == "X" && test[5].textContent == "X") {
            alert('X Wins!');
        } 
        else if(test[6].textContent == "X" && test[7].textContent == "X" && test[8].textContent == "X") {
            alert('X Wins!');
        } 

        // Horizontal Wins for O
        if(test[0].textContent == "O" && test[1].textContent == "O" && test[2].textContent == "O") {
            alert('O Wins!');
        } 
        else if(test[3].textContent == "O" && test[4].textContent == "O" && test[5].textContent == "O") {
            alert('O Wins!');
        } 
        else if(test[6].textContent == "O" && test[7].textContent == "O" && test[8].textContent == "O") {
            alert('O Wins!');
        }

        // Vertical Wins for X
        if(test[0].textContent == "X" && test[3].textContent == "X" && test[6].textContent == "X") {
            alert('X Wins!');
        } 
        else if(test[1].textContent == "X" && test[4].textContent == "X" && test[7].textContent == "X") {
            alert('X Wins!');
        } 
        else if(test[2].textContent == "X" && test[5].textContent == "X" && test[8].textContent == "X") {
            alert('X Wins!');
        }

        // Vertical Wins for O
        if(test[0].textContent == "O" && test[3].textContent == "O" && test[6].textContent == "O") {
            alert('O Wins!');
        } 
        else if(test[1].textContent == "O" && test[4].textContent == "O" && test[7].textContent == "O") {
            alert('O Wins!');
        } 
        else if(test[2].textContent == "O" && test[5].textContent == "O" && test[8].textContent == "O") {
            alert('O Wins!');
        }

        // Diagonal Wins for X
        if(test[0].textContent == "X" && test[4].textContent == "X" && test[8].textContent == "X") {
            alert('X Wins!');
        } 
        else if(test[6].textContent == "X" && test[4].textContent == "X" && test[2].textContent == "X") {
            alert('X Wins!');
        } 
        
        // Diagonal Wins for O
        if(test[0].textContent == "O" && test[4].textContent == "O" && test[8].textContent == "O") {
            alert('O Wins!');
        } 
        else if(test[6].textContent == "O" && test[4].textContent == "O" && test[2].textContent == "O") {
            alert('O Wins!');
        }
    }
};
