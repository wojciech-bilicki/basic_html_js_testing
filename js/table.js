var tableBody = document.getElementById('ticket-table-body');

var tableRows = DATA.map(function(dataRow) {
  var row = document.createElement('tr');

  for (var i = 0; i < 5; i++) {
    var cell = document.createElement('td');

    if (i === 0) {
      var image = document.createElement('img');
      image.src = './assets/artist_icons/' + dataRow.icon;
      var span = document.createElement('span');
      span.textContent = dataRow.name;
      cell.appendChild(image);
      cell.appendChild(span);
    }

    if (i === 1) {
      cell.textContent = dataRow.city;
    }

    if (i === 2) {
      cell.textContent = dataRow.date;
    }

    if (i === 3) {
      cell.textContent = dataRow.pricePerTicket;
    }

    if (i === 4) {
      var input = document.createElement('input');
      input.type = 'number';
      input.value = 1;
      var button = document.createElement('button');
      button.className = 'add-ticket-button';
      button.textContent = '+';
      button.addEventListener('click', function(e) {
        console.log('I clicked a button');
        e.stopPropagation();
      });
      cell.appendChild(input);
      input.addEventListener('click', function(e) {
        e.stopPropagation();
      });
      cell.appendChild(button);
    }

    row.appendChild(cell);
  }
  return row;
});

tableRows.forEach(function(element) {
  element.addEventListener('click', function(e) {
    console.log('I clicked a row');
  });
  tableBody.appendChild(element);
});