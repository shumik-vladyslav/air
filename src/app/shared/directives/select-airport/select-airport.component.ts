import {Component, Input, Output, EventEmitter, Renderer} from '@angular/core';
import {FlightBookingSelector} from "../../api/flight-booking-selector";

@Component({
  selector: 'select-airport',
  templateUrl: './select-airport.component.html',
  styleUrls: ['./select-airport.css'],
})
export class SelectAirportComponent {
  bodyClickHandler: Function;

  country;

  airports;

  airportsInCountry;

  showList;

  airportName;

  countryName;

 constructor(private flightBookingSelector: FlightBookingSelector, private renderer: Renderer){
   this.bodyClickHandler = renderer.listenGlobal('body', 'click', (event) => {
     this.showList = false;
   });

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

  @Input() label;

  @Output() selectPort = new EventEmitter();

  selectCountry(item){
    this.airportsInCountry = null;

    let airportsInCountry = [];

    this.countryName = item.name;

    for(let air of this.airports){
      if(air["country"]["currency"] === item["currency"]){
        airportsInCountry.push(air);
      }
    }
    this.airportsInCountry = airportsInCountry;
  }

  selectAirport(item){
    console.log(item)
    this.airportName = item.name;
    this.selectPort.emit(item["iataCode"]);
    this.showList = false;
  }

  stopPropagationForBodyClick(event) {
    event.stopPropagation();
  }
}
