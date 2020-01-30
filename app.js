// Linked with button to initialize new game
function resetGame(e){
    window.location.reload(true); 

}
// Restart Button selector
let restart = document.querySelector('button');

// Selects all squares from document
let cells = document.querySelectorAll('.row>div');

// Variable for amount of clicks, odd are 'X', even are 'O'
let count=0;

let XturnBlob = document.querySelector('.Xturn');
let OturnBlob = document.querySelector('.Oturn');


let boardWin = document.querySelector('.panel');


// Object for Win condition
let win = {outcome: false, winner: ''};

// Adds event listener to each square
cells.forEach(function(div) {
    div.addEventListener('click', makePlay);    
    
});

restart.addEventListener('click', resetGame);

// function for each play
function makePlay(e) {

    if(win.outcome==false){
        if(e.target.textContent=='' && !(count % 2)){
            e.target.textContent = 'X';
            e.target.style.backgroundColor = 'lightgrey';
            e.target.style.color = 'cornflowerblue'; 
            count++;
            console.log(count);
            console.log(e.target);

        }
        else if(e.target.textContent=='' && count % 2) {
            e.target.textContent = 'O';
            e.target.style.backgroundColor = 'lightgrey';
            e.target.style.color = 'red';
            e.target.textSize = 25;
            count++;
            console.log(count); 
            console.log(e.target);
        } 

        // Displays player turn
        if(!(count % 2)){
            OturnBlob.style.opacity = '0';
            XturnBlob.style.opacity = '1';
        } else if(count % 2){
            XturnBlob.style.opacity = '0';
            OturnBlob.style.opacity = '1';
        }

        if(count>=5){
            // Conditions to check game result
            let test = Array.from(cells);
            
            // Horizontal Wins for X
            if(test[0].textContent == "X" && test[1].textContent == "X" && test[2].textContent == "X") {
                win = {outcome: true, winner: 'X Wins!'};
            } 
            else if(test[3].textContent == "X" && test[4].textContent == "X" && test[5].textContent == "X") {
                win = {outcome: true, winner: 'X Wins!'};
            } 
            else if(test[6].textContent == "X" && test[7].textContent == "X" && test[8].textContent == "X") {
                win = {outcome: true, winner: 'X Wins!'};
            } 

            // Horizontal Wins for O
            if(test[0].textContent == "O" && test[1].textContent == "O" && test[2].textContent == "O") {
                win = {outcome: true, winner: 'O Wins!'};
            } 
            else if(test[3].textContent == "O" && test[4].textContent == "O" && test[5].textContent == "O") {
                win = {outcome: true, winner: 'O Wins!'};
            } 
            else if(test[6].textContent == "O" && test[7].textContent == "O" && test[8].textContent == "O") {
                win = {outcome: true, winner: 'O Wins!'};
            }

            // Vertical Wins for X
            if(test[0].textContent == "X" && test[3].textContent == "X" && test[6].textContent == "X") {
                win = {outcome: true, winner: 'X Wins!'};
            } 
            else if(test[1].textContent == "X" && test[4].textContent == "X" && test[7].textContent == "X") {
                win = {outcome: true, winner: 'X Wins!'};
            } 
            else if(test[2].textContent == "X" && test[5].textContent == "X" && test[8].textContent == "X") {
                win = {outcome: true, winner: 'X Wins!'};
            }

            // Vertical Wins for O
            if(test[0].textContent == "O" && test[3].textContent == "O" && test[6].textContent == "O") {
                win = {outcome: true, winner: 'O Wins!'};
            } 
            else if(test[1].textContent == "O" && test[4].textContent == "O" && test[7].textContent == "O") {
                win = {outcome: true, winner: 'O Wins!'};
            } 
            else if(test[2].textContent == "O" && test[5].textContent == "O" && test[8].textContent == "O") {
                win = {outcome: true, winner: 'O Wins!'};
            }

            // Diagonal Wins for X
            if(test[0].textContent == "X" && test[4].textContent == "X" && test[8].textContent == "X") {
                win = {outcome: true, winner: 'X Wins!'};
            } 
            else if(test[6].textContent == "X" && test[4].textContent == "X" && test[2].textContent == "X") {
                win = {outcome: true, winner: 'X Wins!'};
            } 
            
            // Diagonal Wins for O
            if(test[0].textContent == "O" && test[4].textContent == "O" && test[8].textContent == "O") {
                win = {outcome: true, winner: 'O Wins!'};
            } 
            else if(test[6].textContent == "O" && test[4].textContent == "O" && test[2].textContent == "O") {
                win = {outcome: true, winner: 'O Wins!'};
            }                 
            
            if(win.outcome == false && count==9){
                win = {outcome: true, winner: 'Draw..'};
            }
            
            if(win.outcome == true){
                // Display winner
                if(win.winner == 'O Wins!') {
                    OturnBlob.style.opacity = '0';
                    XturnBlob.style.opacity = '0';
                    boardWin.style.fontSize = '38px';
                    boardWin.style.zindex = '1';
                    boardWin.style.backgroundColor = 'red';
                    boardWin.textContent = win.winner;
                    result = win.winner; 
                    console.log(result);  
                } else if(win.winner == 'Draw..'){
                    OturnBlob.style.opacity = '0';
                    XturnBlob.style.opacity = '0';
                    boardWin.style.fontSize = '38px';
                    boardWin.style.zindex = '1';
                    boardWin.style.backgroundColor = 'grey';
                    boardWin.textContent = win.winner;
                    result = win.winner; 
                    console.log(result);
                } else if(win.winner == 'X Wins!'){
                    OturnBlob.style.opacity = '0';
                    XturnBlob.style.opacity = '0';
                    boardWin.style.fontSize = '38px';
                    boardWin.style.zindex = '1';
                    boardWin.style.backgroundColor = 'cornflowerblue';
                    boardWin.textContent = win.winner;
                    result = win.winner; 
                    console.log(result);

                }
                
                
            }
            
        }
    }
}
