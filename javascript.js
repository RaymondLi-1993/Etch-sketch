const BOARD = document.querySelector(`#draw`)
const HEIGHT = 16;
const WIDTH = 16;


let add = function(event){
  let target = event.target;
  target.setAttribute('class', 'red');
}

for (let i = 0; i < HEIGHT; ++i){
  const ROWS = document.createElement(`div`);
  ROWS.setAttribute('id', 'rows');
    for(let j = 0; j < WIDTH; ++j){
      const COLUMNS = document.createElement('div');
      COLUMNS.setAttribute('id', 'columns');
      COLUMNS.addEventListener(`mouseover`, add);
      ROWS.appendChild(COLUMNS);
    } 
    BOARD.appendChild(ROWS);
}



