var tableBody = document.getElementById('ticket-table-body');


var createRow = function(dataRow){
  var row = document.createElement('tr');
  row.setAttribute('data-id', dataRow.id);

  for (var i = 0; i < 5; i = i + 1) {
    var cell = document.createElement('td');

    if (i == 0) {
      var image = document.createElement('img');
      image.src = './assets/artist_icons/' + dataRow.icon;
      var span = document.createElement('span');
      span.textContent = dataRow.name;
      cell.appendChild(image);
      cell.appendChild(span);
    }

    if (i == 1) {
      cell.textContent = dataRow.city;
    }

    if( i == 2) {
      cell.textContent = dataRow.date;
    }

    if (i == 3) {
      cell.textContent = dataRow.pricePerTicket;
    }

    if (i == 4) {
      var input = document.createElement('input');
      input.type = "number";
      input.value = 3;

      input.addEventListener('click', function(e){
        e.stopPropagation();
      })

      var button = document.createElement('button');
      button.className = "add-ticket-button";
      button.textContent = "+";
      button.addEventListener('click', function(event) {
        var ticketAmount = event.target.previousSibling.value;
        var ticketId = event.target.parentNode.parentNode.getAttribute('data-id');

        ticketService.addTicket(ticketId, ticketAmount);
        event.stopPropagation();
      });
      cell.appendChild(input);
      cell.appendChild(button);
    }

    row.appendChild(cell);
  }

  return row;
}

var tableRows = DATA.map(createRow);

tableRows.forEach(function(row) {

  row.addEventListener('click', function(){
    var chosenArtist = localStorage.getItem("Chosen Artist");
    console.log(chosenArtist);
    console.log('I clicked a row!');
  });

  tableBody.appendChild(row);
})
