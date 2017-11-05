var ticketService = {
  addTicket: function(id, number) {
    var storedTickets = JSON.parse(localStorage.getItem('tickets'));

    //no tickets -> new tickets insertion
    if (storedTickets == null || storedTickets.length == 0) {
      localStorage.setItem(
        'tickets',
        JSON.stringify([{ id: id, number: number, status: 'not payed' }])
      );
      return;
    }

    var alreadyInsertedTicketWithSameIdIndex = storedTickets.findIndex(function(
      ticket
    ) {
      return ticket.id == id;
    });

    //same ticket -> inscrease number
    if (alreadyInsertedTicketWithSameIdIndex != -1) {
      var currentTicketNumber = parseInt(
        storedTickets[alreadyInsertedTicketWithSameIdIndex].number
      );
      storedTickets[alreadyInsertedTicketWithSameIdIndex].number =
        currentTicketNumber + number;

      localStorage.setItem('tickets', JSON.stringify(storedTickets));
      return;
    }

    //new ticket - add to existing array
    storedTickets.push({ id: id, number: number, status: 'not payed' });
    localStorage.setItem('tickets', JSON.stringify(storedTickets));
  },

  getMyTickets: function() {
    var storedTickets = JSON.parse(localStorage.getItem('tickets'));
    if (!storedTickets) {
      return [];
    }
    var myTickets = storedTickets.map(function(ticket) {
      var matchedEvent = DATA.filter(function(event) {
        return event.id == ticket.id;
      })[0];

      ticket.name = matchedEvent.name;
      ticket.date = matchedEvent.date;
      ticket.city = matchedEvent.city;
      ticket.price = matchedEvent.pricePerTicket * ticket.number;
      ticket.icon = matchedEvent.icon;
      return ticket;
    });
    return myTickets;
  },

  changeTicketStatus(status, id) {
    var storedTickets = JSON.parse(localStorage.getItem('tickets'));
    if (id != null) {
      var indexOfTicket = storedTickets.findIndex(function(ticket) {
        return ticket.id == id;
      });
      storedTickets[indexOfTicket].status = status;
    } else {
      storedTickets.forEach(function(ticket) {
        ticket.status = status;
      });
    }
    localStorage.setItem('tickets', JSON.stringify(storedTickets));
  },

  deleteTicket: function(id) {
    if (id) {
      var storedTickets = JSON.parse(localStorage.getItem('tickets'));
      var indexOfTicket = storedTickets.findIndex(function(ticket) {
        return ticket.id == id;
      });
      storedTickets.splice(indexOfTicket, 1);
      localStorage.setItem('tickets', JSON.stringify(storedTickets));
    } else {
      localStorage.removeItem('tickets');
    }
  }
};
