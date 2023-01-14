const cell = document.querySelector('#variant');
const colorss = document.querySelector('#colors');

function random(number) {
    return Math.floor(Math.random() * (number+1));
  }

const color = () => {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    cell.style.background = rndCol;
  }

cell.addEventListener('mouseover', color, true);

const colorSelector = () => {
    let selectedColor = colorss.value;
    cell.style.background = selectedColor;
}

cell.addEventListener('click', colorSelector, true);


