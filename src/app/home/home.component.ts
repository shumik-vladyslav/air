import {Component} from '@angular/core';
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

  portFrom;

  portTo;

  constructor(private getFlights: GetFlights){

  }

  dateStart(date){
    console.log(date)
    this.start = date;
  }

  dateEnd(date){
    this.end = date;
    console.log(date)
  }

  selectAirportFrom(port){
    console.log(port)
    this.portFrom = port;
  }

  selectAirportTo(port){
    console.log(port)
    this.portTo = port;
  }

  find(){
    this.flights = [];

    this.getFlights.getFlights(this.start, this.end, this.portFrom, this.portTo).subscribe((date) => {
      console.log(date);
      this.flights = date.flights;
    });
  }
}
