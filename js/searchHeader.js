var searchButton = document.getElementsByName('search')[0];
var searchInput = document.getElementsByName('search-term')[0];

searchButton.addEventListener('click', function() {
  var searchTerm = searchInput.value;

  var filteredTableRows = DATA.filter(function(ticket) {
    return (
      ticket.name.indexOf(searchTerm) >= 0 ||
      ticket.city.indexOf(searchTerm) >= 0
    );
  }).map(createRow);

  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
  if (filteredTableRows.length != 0) {
    filteredTableRows.forEach(function(element) {
      element.addEventListener('click', function(e) {
        console.log('I clicked a row');
      });
      tableBody.appendChild(element);
    });
  } else {
    insertNoTicketInfo();
  }
});

function insertNoTicketInfo() {
  var infoNode = document.createElement('h2');
  infoNode.textContent = 'No such ticket!';
  infoNode.className = 'no-ticket-warning';

  var table = document.getElementById('ticket-table');
  insertAfter(infoNode, table);
}

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
