
var currentRow = 0;
var currentColumn = 0; 

const tbody = document.querySelector('#Board');
tbody.addEventListener('click', function (e){
    const cell = e.target.closest('td');
    if (!cell) {return;}
    const row = cell.parentElement;
    currentRow = row.rowIndex;
    currentColumn = cell.cellIndex; 
    test();
});

function test(){
    console.log(currentRow, currentColumn);
}
