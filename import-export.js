function download(content, fileName, contentType) {
  const a = document.createElement('a');
  const file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

function onDownload() {
  clickSound();
  let jsonArray = [];
  for (var i = 0; i < allCells.length; i++) {
    if (allCells[i].className !== 'cell load-border') {
      let jsonObj = {
        cell: `${allCells[i].getAttribute('id')}`,
        classes: `${allCells[i].className}`,
      };
      jsonArray.push(jsonObj);
    }
  }
  jsonArray.length > 0
    ? download(JSON.stringify(jsonArray), 'lite-brite-export.json', 'text/plain')
    : alert('No colors have been added to the lite-brite. Add colors to enable export.');
}

// IMPORT

let form = document.querySelector('#upload');

function handleSubmit(event) {
  // Stop the form from reloading the page
  event.preventDefault();
  console.log('handle submit fired');
  let input = document.createElement('input');
  input.type = 'file';

  input.onchange = (e) => {
    console.log('input on change fired');
    // getting a hold of the file reference
    let file = e.target.files[0];
    console.log(file.name);

    // setting up the reader
    let reader = new FileReader();
    reader.readAsText(file, 'UTF-8');

    // here we tell the reader what to do when it's done reading...
    reader.onload = (readerEvent) => {
      let content = readerEvent.target.result; // this is the content!
      let jsonContent = JSON.parse(content);

      jsonContent.forEach((el) => {
        let cellId = el.cell;
        let cellClasses = el.classes;
        let domCell = document.getElementById(cellId);
        let colorClass = cellClasses.split(' ')[1];
        domCell.className = '';
        domCell.classList.add('cell');
        domCell.classList.add(colorClass);
      });
    };
  };

  input.click();
}

form.addEventListener('submit', handleSubmit);
