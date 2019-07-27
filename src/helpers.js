export const getSuspects = (data) => {
  if(data === undefined){
    return;
  }
  var cpyTickets = [...data.Tickets];
  var oneDayDif = getOneDayDif_flights(data);
  var suspects = [];
  //Filtrar passageiros com os ids de ida

  oneDayDif.forEach((d)=>{

   var newArray = cpyTickets.filter((ticket, i) => {
    return d.ida === ticket.flight_id || d.volta.indexOf(ticket.flight_id) !== -1;
    })
    suspects = suspects.concat(newArray)
  })
  
  return suspects;
}
const getOneDayDif_flights = (data) => {
  var cpyFlights = [...data.Flights];
  var visitedPlaces = [];
  var roundTrip = [];

  // //Verificação de todos os voos
  data.Flights.forEach((F, i) => {
    var rT = {
      ida: F.id,
      volta: []
    }
    cpyFlights.forEach((cpyF, i) => {
      
      if(visitedPlaces.indexOf(cpyF.id) === -1){

        if(cpyF.flight_destino === F.origin){
          
          if(cpyF.origin === F.flight_destino){
            var cpyDate = new Date(cpyF.flight_departure);
            var fDate = new Date(F.flight_departure);
            var difDate = dateDiffInDays(cpyDate, fDate);

            if(difDate === 1 || difDate ===  -1){
              rT.volta.push(cpyF.id);
              visitedPlaces.push(cpyF.id);
              visitedPlaces.push(F.id);     
            }
          }
      }
    }
    })
    if(rT.volta.length !== 0){
      roundTrip.push(rT);
    }
    
  });
  //Criar um array de inscidencias para armazenar os id's dos voos ida-volta
  //Criar uma copia do array de e ir retirando as inscidencias colocando no array 
  
  //if(fli)
    return roundTrip;



}
export const formatDatesFlight = jsonArray => {
    jsonArray.forEach(flight => {
      var flight_departure = new Date(flight.flight_departure);
      var flight_arrival = new Date(flight.flight_arrival);
      flight.flight_arrival = flight_arrival;
      flight.flight_departure = flight_departure;
    });
    return jsonArray;
  };

  export const formatDatesTicket = jsonArray => {
    jsonArray.forEach(ticket => {
      var flight_departure = new Date(ticket.flight_departure);
      ticket.flight_departure = flight_departure;
    });
    return jsonArray;
  };

  function dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }