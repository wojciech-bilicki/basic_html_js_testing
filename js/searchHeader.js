var searchButton = document.getElementsByName('search')[0];
var searchInput = document.getElementsByName('search-term')[0];

searchButton.addEventListener("click", function(){
  var searchTerm = searchInput.value;

  var filteredTableRows = DATA.filter(function(ticket){
    return (
      ticket.name.indexOf(searchTerm) >= 0 || ticket.city.indexOf(searchTerm) >= 0
    )
  }).map(createRow);

  //remove old table rows
  while(tableBody.firstChild){
    tableBody.removeChild(tableBody.firstChild);
  }

  //add new table rows if any exist
  if(filteredTableRows.length != 0) {
    filteredTableRows.forEach(function(filteredRow){

      filteredRow.addEventListener('click', function(){
        console.log('I clicked a row!')
      })

      tableBody.appendChild(filteredRow);
    })
  } else {
    console.log('No tickets, homie!');
    insertNoTicketInfo();
  }

});

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function insertNoTicketInfo(){
  var infoNode = document.createElement('h2');
  infoNode.textContent = 'No such ticket';
  infoNode.className = 'no-ticket-warning';

  var table = document.getElementById('ticket-table');

  insertAfter(infoNode, table);
}