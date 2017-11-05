var ticketList = {
  fillMyTicketsTable: function() {
    var ticketTable = document.getElementById('ticket-table');

    var myTickets = ticketService.getMyTickets();

    var tableRows = myTickets.map(this.createRow, this);
    var ticketListTableBody = document.getElementsByClassName(
      'ticket-list-table-body'
    )[0];

    //get rid of current rows in table
    while (ticketListTableBody.firstChild) {
      ticketListTableBody.removeChild(ticketListTableBody.firstChild);
    }

    tableRows.forEach(function(element) {
      ticketListTableBody.appendChild(element);
    });
  },

  createActionButtons: function(cell, ticket) {
    var payButton = document.createElement('button');
    payButton.textContent = ticket.status === 'not payed' ? 'PAY' : 'WITHDRAW';

    payButton.classList.add('small-button');
    payButton.classList.add(
      ticket.status == 'not payed' ? 'pay-button' : 'withdraw-button'
    );

    var statusToChange = ticket.status === 'not payed' ? 'payed' : 'not payed';
    payButton.addEventListener(
      'click',
      this.onPayWithdrawClick.bind(this, [statusToChange, ticket.id])
    );
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'DELETE';
    deleteButton.classList.add('small-button');
    deleteButton.classList.add('delete-button');

    deleteButton.addEventListener(
      'click',
      this.onDeleteClick.bind(this, [ticket.id])
    );
    cell.appendChild(payButton);
    cell.appendChild(deleteButton);
  },

  onDeleteClick: function(ticketId) {
    ticketService.deleteTicket(ticketId);
    this.fillMyTicketsTable();
  },

  createRow: function(ticket) {
    var row = document.createElement('tr');
    for (var i = 0; i <= 6; i++) {
      var cell = document.createElement('td');

      if (i === 0) {
        var image = document.createElement('img');
        image.src = './assets/artist_icons/' + ticket.icon;
        var span = document.createElement('span');
        span.textContent = ticket.name;
        cell.appendChild(image);
        cell.appendChild(span);
      }

      if (i === 1) {
        cell.textContent = ticket.city;
      }

      if (i === 2) {
        cell.textContent = ticket.date;
      }

      if (i === 3) {
        cell.textContent = ticket.price;
      }
      if (i === 4) {
        cell.textContent = ticket.number;
      }

      if (i === 5) {
        var buttons = this.createActionButtons(cell, ticket);
      }

      if (i === 6) {
        cell.textContent = ticket.status;
      }
      row.appendChild(cell);
    }
    return row;
  },

  onPayWithdrawClick(boundArgumentsArray) {
    ticketService.changeTicketStatus(
      boundArgumentsArray[0],
      boundArgumentsArray[1]
    );

    this.fillMyTicketsTable();
  }
};

ticketList.fillMyTicketsTable();

document
  .getElementsByClassName('pay-all-button')[0]
  .addEventListener('click', function(event) {
    var allButton = event.target;
    if (allButton.classList.contains('pay-all-button')) {
      ticketService.changeTicketStatus('payed');
      allButton.className = 'withdraw-all-button';
      allButton.textContent = 'Withdraw all';
    } else if (allButton.classList.contains('withdraw-all-button')) {
      ticketService.changeTicketStatus('not payed');
      allButton.className = 'pay-all-button';
      allButton.textContent = 'Pay for all';
    }
    ticketList.fillMyTicketsTable();
  });

document
  .getElementsByClassName('delete-all-button')[0]
  .addEventListener('click', function(event) {
    ticketService.deleteTicket();
    ticketList.fillMyTicketsTable();
  });
