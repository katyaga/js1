
let chessboard = document.querySelector('.main');

// создание доски из строк и ячеек
for (let i = 0; i < 10; i++) {
    let element_string = document.createElement('div');
    element_string.classList.add('row');
    chessboard.appendChild(element_string);
    for (let i = 0; i < 10; i++) {
        let element_column = document.createElement('div');
        element_column.classList.add('cell');
        element_string.appendChild(element_column);
    }
}


// раскраска ячеек на чёрные-белые
let rows = document.querySelectorAll('.row');
let black;
let cells;
for(let i = 1; i<9; i++) {
    cells = rows[i].querySelectorAll('.cell');
    black = i%2 === 0;
    for(let j = 1; j<9; j++) {
        if(black) {
            cells[j].classList.add('black');
        }
        black = !black;
    }
}


// нумерация строк от A до H
let bottom_row = rows[9].querySelectorAll('.cell');
let top_row = rows[0].querySelectorAll('.cell');
for(let i = 1; i < 9; i++) {
   bottom_row[i].textContent = String.fromCharCode(64 + i);
   top_row[i].textContent = String.fromCharCode(64 + i);
}


// нумерация столбцов от 1 до 8
let left_column = document.querySelectorAll('.row .cell:first-child');
let right_column = document.querySelectorAll('.row .cell:last-child');
for (let i = 8; i > 0; i--) {
    left_column[i].textContent = i;
    right_column[i].textContent = i;
}


// расстановка фигур на доске
let chessmen = ['Лад', 'Кон', 'Слн', 'Фрз', 'Кор', 'Слн', 'Кон', 'Лад'];
let pawn = 'Пшк';
for (let i = 1; i<9; i++) {
    if(i === 1 || i === 8) {
        cells = rows[i].querySelectorAll('.cell');
        for (let j = 1; j < 9; j++) {
            let position = document.createElement('p');
            position.textContent = chessmen[j - 1];
            cells[j].appendChild(position);
        }
    }
    if(i === 2 || i === 7) {
        cells = rows[i].querySelectorAll('.cell');
        for (let j = 1; j < 9; j++) {
            let position = document.createElement('p');
            position.textContent = pawn;
            cells[j].appendChild(position);
        }
    }
}




