var tableBody = document.getElementById('ticket-table-body');

var createRowInput = function() {
  var input = document.createElement('input');
  input.type = 'number';
  input.value = 1;
  input.addEventListener('click', function(e) {
    e.stopPropagation();
  });
  return input;
};

var createRowButton = function() {
  var button = document.createElement('button');
  button.className = 'add-ticket-button';
  button.textContent = '+';
  button.addEventListener('click', function(e) {
    var ticketAmount = e.target.previousSibling.value;
    var ticketId = e.target.parentNode.parentNode.getAttribute('data-id');
    ticketService.addTicket(ticketId, parseInt(ticketAmount));
    e.stopPropagation();
  });
  return button;
};

var createRow = function(dataRow) {
  var row = document.createElement('tr');

  row.setAttribute('data-id', dataRow.id);

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
      cell.appendChild(createRowInput());

      cell.appendChild(createRowButton());
    }

    row.appendChild(cell);
  }
  return row;
};

var tableRows = DATA.map(createRow);

tableRows.forEach(function(element) {
  element.addEventListener('click', function(e) {
    var artistId =
      e.target.parentNode.getAttribute('data-id') ||
      e.target.parentNode.parentNode.getAttribute('data-id');

    localStorage.setItem('artistId', artistId);
    window.location.assign('./details.html');
  });
  tableBody.appendChild(element);
});
