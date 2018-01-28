var array = [[]];
document.getElementById('file').onchange = function () {
    var file = this.files[0];

    var reader = new FileReader();
    reader.onload = function (progressEvent) {

        var rows = this.result.split('\n');
        for (var i = 0; i < rows.length; i++) {
            array[i] = rows[i].split('');
            if (i == 8) {
                continue;
            }
            array[i].pop();
            array[i].pop();
        }
        checkValidSudoku(array)
    };
    reader.readAsText(file);
};

function checkValidSudoku(array) {

var columntotal = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > 9) {
            alert("Sudoku too long");
            return false;
        }
        var rowSum = 0;
        for (var j = 0; j < array[i].length; j++) {
            rowSum += parseInt(array[i][j]);
        }
        if (rowSum != 45) {
            alert("Sudoku Rows not valid");
            return false;
        }
    }
    //check cols
    var c = [];
    for ( j=0; j<9; j++ ){
    c[j]=0;
    for ( i=0; i<9; i++ )
        c[j] = c[j] + parseInt(array[i][j]);
        if(c[j] != 45){
            alert("Sudoku Columns not valid");
            return false;
        }
    } 
    alert("Sudoku Valid!");
    return true;
}
