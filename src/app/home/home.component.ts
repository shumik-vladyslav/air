import {Component} from '@angular/core';
import {FlightBookingSelector} from "../shared/api/flight-booking-selector";

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(private flightBookingSelector: FlightBookingSelector){

  }
}
