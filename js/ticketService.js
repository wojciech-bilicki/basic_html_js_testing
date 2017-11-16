var ticketService = {
  addTicket: function(id, numberString) {
    var number = parseInt(numberString);
    //get currently stored tickets from localStorage and turn them into JSON object
    var storedTickets = JSON.parse(localStorage.getItem('tickets'));

    //if there are no stored tickets insert new ones
    if(storedTickets == null || storedTickets.length == 0) {
      localStorage.setItem('tickets', JSON.stringify([{
        id: id,
        number: number,
        status: 'not paid'
      }]));
      return;
    }

    //same ticket added once again
    var alreadyInsertedTicketWithSameIdIndex = storedTickets.findIndex(function(ticket){
      return ticket.id == id;
    });

    if (alreadyInsertedTicketWithSameIdIndex != -1) {
      var currentTicketNumber = parseInt(
        storedTickets[alreadyInsertedTicketWithSameIdIndex].number
      );
      storedTickets[alreadyInsertedTicketWithSameIdIndex].number = currentTicketNumber + number;

      localStorage.setItem('tickets', JSON.stringify(storedTickets));
      return;
    }

    //new ticket add to existing array

    storedTickets.push({id: id, number: number, status: 'not paid'});
    localStorage.setItem('tickets', JSON.stringify(storedTickets));
  }
};
