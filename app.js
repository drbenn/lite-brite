const liteBritePanel = document.getElementById('lite-brite-panel');
const pinkSelect = document.getElementById('pinkSelect');
const blueSelect = document.getElementById('blueSelect');
const orangeSelect = document.getElementById('orangeSelect');
const purpleSelect = document.getElementById('purpleSelect');
const yellowSelect = document.getElementById('yellowSelect');
const greenSelect = document.getElementById('greenSelect');
const redSelect = document.getElementById('redSelect');
const whiteSelect = document.getElementById('whiteSelect');
const allCells = document.getElementsByClassName('cell');
let activeColor = 'load-border';

// Original Configuration - 9 iterations of L & S rows with 24/25 cells per row

function panelRowLoad() {
  for (let i = 0; i < 7; i++) {
    const shortLine = document.createElement('div');
    shortLine.classList.add('s-panel-row');
    shortLine.setAttribute('id', 's-row');
    for (let iS = 0; iS < 17; iS++) {
      const shortDiv = document.createElement('div');
      shortDiv.classList.add('cell');
      shortDiv.classList.add('load-border');
      shortDiv.setAttribute('id', `s-rowgroup-${i}-cell-${iS}`);
      shortDiv.setAttribute('onclick', 'cellId(event.target.id)');
      shortLine.append(shortDiv);
    }
    liteBritePanel.append(shortLine);

    const longLine = document.createElement('div');
    longLine.classList.add('l-panel-row');
    for (let iL = 0; iL < 18; iL++) {
      const longDiv = document.createElement('div');
      longDiv.classList.add('cell');
      longDiv.classList.add('load-border');
      longDiv.setAttribute('id', `l-rowgroup-${i}-cell-${iL}`);
      longDiv.setAttribute('onclick', 'cellId(event.target.id)');
      longLine.append(longDiv);
    }
    liteBritePanel.append(longLine);
  }
}

function cellId(clicked_id) {
  let selectedCell = document.getElementById(clicked_id);
  console.log(selectedCell.classList);
  document.getElementById(clicked_id).className = 'cell';
  selectedCell.classList.add(activeColor);
}

clearSelect.addEventListener('click', function () {
  console.log('clear selected');
  activeColor = 'load-border';
  console.log(`active color = ${activeColor}`);
});

pinkSelect.addEventListener('click', function () {
  console.log('pink selected');
  activeColor = 'pink';
  console.log(`active color = ${activeColor}`);
});

blueSelect.addEventListener('click', function () {
  console.log('blue selected');
  activeColor = 'blue';
  console.log(`active color = ${activeColor}`);
});

orangeSelect.addEventListener('click', function () {
  console.log('orange selected');
  activeColor = 'orange';
  console.log(`active color = ${activeColor}`);
});

purpleSelect.addEventListener('click', function () {
  console.log('purple selected');
  activeColor = 'purple';
  console.log(`active color = ${activeColor}`);
});

yellowSelect.addEventListener('click', function () {
  console.log('yellow selected');
  activeColor = 'yellow';
  console.log(`active color = ${activeColor}`);
});

greenSelect.addEventListener('click', function () {
  console.log('green selected');
  activeColor = 'green';
  console.log(`active color = ${activeColor}`);
});

redSelect.addEventListener('click', function () {
  console.log('red selected');
  activeColor = 'red';
  console.log(`active color = ${activeColor}`);
});

whiteSelect.addEventListener('click', function () {
  console.log('white selected');
  activeColor = 'white';
  console.log(`active color = ${activeColor}`);
});

function onClear() {
  clickSound();
  for (var i = 0; i < allCells.length; i++) {
    allCells[i].className = 'cell load-border';
  }
}

function clickSound() {
  let audio = new Audio('./audio/mixkit-single-classic-click-1116.wav');
  audio.play();
}

window.addEventListener('load', panelRowLoad);
