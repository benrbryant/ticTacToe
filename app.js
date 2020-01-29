// Selects all squares from document
let cells = document.querySelectorAll('.row>div');

// Declare Win-Check Arrays
let topH = [];
let centerH = [];
let bottomH = [];
let leftV = [];
let rightV = [];
let diagRight = [];
let diagLeft = []; 
let result = [];

result = [topH, centerH, bottomH, leftV, rightV, diagRight, diagLeft];

// Functions to check game result
function storeResulttopH(e) {
    result[0].push(e.target.textContent);
};
function storeResultcenterH(e) {
    result[1].push(e.target.textContent);
};
function storeResultbottomH(e) {
    result[2].push(e.target.textContent);
};
function storeResultleftV(e) {
    result[3].push(e.target.textContent);
};
function storeResultrightV(e) {
    result[4].push(e.target.textContent);
};
function storeResultdiagRight(e) {
    result[5].push(e.target.textContent);
};
function storeResultdiagLeft(e) {
    result[6].push(e.target.textContent);
};

// Selects all top squares
let topCells = document.querySelectorAll('.top');
// Selects all center squares
let centCells = document.querySelectorAll('.center');
// Selects all bottom squares
let bottomCells = document.querySelectorAll('.bottom');
// Selects all left squares
let leftCells = document.querySelectorAll('.left');
// Selects all right squares
let rightCells = document.querySelectorAll('.right');
// // Selects squares in a diagonal from top left to bottom right
// let diagonalRight = document.querySelector('.top .left, .center .middle, .bottom .right');
// // Selects squares in a diagonal from top left to bottom right
// let diagonalLeft = document.querySelector('.bottom .left, .center .middle, .top .right');


// Variable for amount of clicks, odd are 'X', even are 'O'
let count=0;

// Adds event listener to each square
cells.forEach(function(div) {
    div.addEventListener('click', makePlay);    
    
});
// Sets click listener for each section of cells for storing mark
topCells.forEach(function(div){
    div.addEventListener('click', storeResulttopH);
});
centCells.forEach(function(div){
    div.addEventListener('click', storeResultcenterH);
});
bottomCells.forEach(function(div){
    div.addEventListener('click', storeResultbottomH);
});
leftCells.forEach(function(div){
    div.addEventListener('click', storeResultleftV);
});
rightCells.forEach(function(div){
    div.addEventListener('click', storeResultrightV);
});
// diagonalRight.forEach(function(div){
//     div.addEventListener('click', storeResultdiagRight);
// });
// diagonalLeft.forEach(function(div){
//     div.addEventListener('click', storeResultdiagLeft);
// });

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





console.log(result);