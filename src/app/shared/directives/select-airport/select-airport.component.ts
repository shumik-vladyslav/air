import {Component} from '@angular/core';
import {FlightBookingSelector} from "../../api/flight-booking-selector";

@Component({
  selector: 'select-airport',
  templateUrl: './select-airport.component.html'
})
export class SelectAirportComponent {
  country;

  airports;

  airportsInCountry;

 constructor(private flightBookingSelector: FlightBookingSelector){
   this.country = flightBookingSelector.getCountry();

   if(!this.country){
     flightBookingSelector.countriesSubject.subscribe((data) => {
       this.country = data;
     })
   }

   this.airports = flightBookingSelector.getAirports();

   if(!this.airports){
     flightBookingSelector.airportsSubject.subscribe((data) => {
       this.airports = data;
     })
   }
 }

  selectCountry(item){
    this.airportsInCountry = null;
    let airportsInCountry = [];

    for(let air of this.airports){
      if(air["country"]["currency"] === item["currency"]){
        airportsInCountry.push(air);
      }
    }
    this.airportsInCountry = airportsInCountry;
  }

  selectAirport(item){

  }
}
