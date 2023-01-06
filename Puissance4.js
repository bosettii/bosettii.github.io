
var currentRow = 0;
var currentColumn = 0;
var nbOfPlay = 0;
var columnFill0 = 5;
var columnFill1 = 5;
var columnFill2 = 5;
var columnFill3 = 5;
var columnFill4 = 5;
var columnFill5 = 5;
var columnFill6 = 5;
var currentPosition = [0,0];
var countYellow = 0;
var countRed = 0;

 //update currentRow, currentColumn, nbOfPlay and calls for placeCoin, everytime we press a cell
const tbody = document.querySelector('#Board');
tbody.addEventListener('click', function (e){
    const cell = e.target.closest('td');
    if (!cell) {return;}
    const row = cell.parentElement;
    currentRow = row.rowIndex;
    currentColumn = cell.cellIndex;
    nbOfPlay++;
    PlaceCoin();
    CheckIfWin();
});


//place a coin on the board accordingly to the rules
    //variable columnFill = nb of cell free of a coin in this column (max = 0(start at 5))
    //place coin at colomnFill + 1 and update columnFill
    //place coin : change background-color : pair nbOfPlay : red, odd nbOfPlay : yellow
    //if columnFill > 5 then catch error and alert(column is already filled) and don't count the play
    //also calls for CheckIfWin after each play
function PlaceCoin(){
    try{
        switch (currentColumn) {
            case 0:
                currentPosition = [columnFill0,currentColumn];
                if (nbOfPlay % 2 == 0){
                    document.getElementById('td'+columnFill0+currentColumn).style.backgroundColor = "red";
                    columnFill0--;
                }
                else{
                    document.getElementById('td'+columnFill0+currentColumn).style.backgroundColor = "yellow";
                    columnFill0--;
                }
                break;

            case 1:
                currentPosition = [columnFill1,currentColumn];
                if (nbOfPlay % 2 == 0){
                    document.getElementById('td'+columnFill1+currentColumn).style.backgroundColor = "red";
                    columnFill1--;
                        }
                else{
                    document.getElementById('td'+columnFill1+currentColumn).style.backgroundColor = "yellow";
                    columnFill1--;
                }
                    break;

            case 2:
                currentPosition = [columnFill2,currentColumn];
                if (nbOfPlay % 2 == 0){
                    document.getElementById('td'+columnFill2+currentColumn).style.backgroundColor = "red";
                    columnFill2--;
                        }
                else{
                    document.getElementById('td'+columnFill2+currentColumn).style.backgroundColor = "yellow";
                    columnFill2--;
                }
                break;

            case 3:
                currentPosition = [columnFill3,currentColumn];
                if (nbOfPlay % 2 == 0){
                    document.getElementById('td'+columnFill3+currentColumn).style.backgroundColor = "red";
                    columnFill3--;
                        }
                else{
                    document.getElementById('td'+columnFill3+currentColumn).style.backgroundColor = "yellow";
                    columnFill3--;
                }
                break;

            case 4:
                currentPosition = [columnFill4,currentColumn];
                if (nbOfPlay % 2 == 0){
                    document.getElementById('td'+columnFill4+currentColumn).style.backgroundColor = "red";
                    columnFill4--;
                        }
                else{
                    document.getElementById('td'+columnFill4+currentColumn).style.backgroundColor = "yellow";
                    columnFill4--;
                }
                break;

            case 5:
                currentPosition = [columnFill5,currentColumn];
                if (nbOfPlay % 2 == 0){
                    document.getElementById('td'+columnFill5+currentColumn).style.backgroundColor = "red";
                    columnFill5--;
                        }
                else{
                    document.getElementById('td'+columnFill5+currentColumn).style.backgroundColor = "yellow";
                    columnFill5--;
                }
                break;

            case 6:
                currentPosition = [columnFill6,currentColumn];
                if (nbOfPlay % 2 == 0){
                    document.getElementById('td'+columnFill6+currentColumn).style.backgroundColor = "red";
                    columnFill6--;
                        }
                else{
                    document.getElementById('td'+columnFill6+currentColumn).style.backgroundColor = "yellow";
                    columnFill6--;
                }
                break;
        }
    }
    catch{
        nbOfPlay--;
        currentPosition[0] = 0;
    }
}

// every time there is a play the function is called and it checks for horizontal, vertical and diagonals wins.
let moves = 0;
function CheckIfWin() {
    moves++
    if (moves > 6){

    // Check if the current player has won
  
    // Check for horizontal win
        for (let row = 0; row < 6; row++) {
            for (let col = 0; col < 4; col++) {
                const cell1 = getComputedStyle(document.getElementById(`td${row}${col}`)).backgroundColor;
                const cell2 = getComputedStyle(document.getElementById(`td${row}${col + 1}`)).backgroundColor;
                const cell3 = getComputedStyle(document.getElementById(`td${row}${col + 2}`)).backgroundColor;
                const cell4 = getComputedStyle(document.getElementById(`td${row}${col + 3}`)).backgroundColor;
                if (cell1 === cell2 && cell2 === cell3 && cell3 === cell4 && cell1 !== "rgb(255, 255, 255)") {
                    DisplayWin();
                    return;
                }
            }
        }
    
        // Check for vertical win
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 7; col++) {
                const cell1 = getComputedStyle(document.getElementById(`td${row}${col}`)).backgroundColor;
                const cell2 = getComputedStyle(document.getElementById(`td${row + 1}${col}`)).backgroundColor;
                const cell3 = getComputedStyle(document.getElementById(`td${row + 2}${col}`)).backgroundColor;
                const cell4 = getComputedStyle(document.getElementById(`td${row + 3}${col}`)).backgroundColor;
                if (cell1 === cell2 && cell2 === cell3 && cell3 === cell4 && cell1 !== "rgb(255, 255, 255)") {
                DisplayWin();
                return;
                }
            }
        }
    
        // Check for diagonal win (top left to bottom right)
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 4; col++) {
                const cell1 = getComputedStyle(document.getElementById(`td${row}${col}`)).backgroundColor;
                const cell2 = getComputedStyle(document.getElementById(`td${row + 1}${col + 1}`)).backgroundColor;
                const cell3 = getComputedStyle(document.getElementById(`td${row + 2}${col + 2}`)).backgroundColor;
                const cell4 = getComputedStyle(document.getElementById(`td${row + 3}${col + 3}`)).backgroundColor;
                if (cell1 === cell2 && cell2 === cell3 && cell3 === cell4 && cell1 !== "rgb(255, 255, 255)") {
                    DisplayWin();
                    return;
                }
            }
        }

    // Check for diagonal win (top right to bottom left)
        for (let row = 0; row < 3; row++) {
            for (let col = 3; col < 7; col++) {
                const cell1 = getComputedStyle(document.getElementById(`td${row}${col}`)).backgroundColor;
                const cell2 = getComputedStyle(document.getElementById(`td${row + 1}${col - 1}`)).backgroundColor;
                const cell3 = getComputedStyle(document.getElementById(`td${row + 2}${col - 2}`)).backgroundColor;
                const cell4 = getComputedStyle(document.getElementById(`td${row + 3}${col - 3}`)).backgroundColor;
                if (cell1 === cell2 && cell2 === cell3 && cell3 === cell4 && cell1 !== "rgb(255, 255, 255)") {
                    DisplayWin();
                }
            }
        }
    }
    else if (moves > 42){
        alert("it's a tie!")
    }
    return;
}

function DisplayWin(){
    if (nbOfPlay % 2 == 0){
        alert("red wins")
    }
    else{
        alert("yellow wins!")
    }
}
