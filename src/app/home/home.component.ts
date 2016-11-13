import {Component} from '@angular/core';
import {FlightBookingSelector} from "../shared/api/flight-booking-selector";
import {GetFlights} from "../shared/api/get-flights";

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  start;

  end;

  flights;

  constructor(private flightBookingSelector: FlightBookingSelector, private getFlights: GetFlights){

  }

  dateStart(date){
    console.log(date)
    this.start = date;
  }

  dateEnd(date){
    this.end = date;
    console.log(date)
  }

  find(){
    this.flights = [];

    this.getFlights.getFlights(this.start, this.end).subscribe((date) => {
      console.log(date);
      this.flights = date.flights;
    });
  }
}
