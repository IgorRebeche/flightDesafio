export const formatDatesFlight = jsonArray => {
    jsonArray.forEach(flight => {
      var flight_date = new Date(flight.flight_date);
      var arrivalTime = new Date(flight.arrivalTime);
      flight.arrivalTime = arrivalTime;
      flight.flight_date = flight_date;
    });
    return jsonArray;
  };

  export const formatDatesTicket = jsonArray => {
    jsonArray.forEach(ticket => {
      var flight_date = new Date(ticket.flight_date);
      ticket.flight_date = flight_date;
    });
    return jsonArray;
  };