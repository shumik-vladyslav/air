import {Component, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import {GetFlights} from "../shared/api/get-flights";
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import {FlightBookingSelector} from "../shared/api/flight-booking-selector";

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

  constructor(private flightBookingSelector: FlightBookingSelector, private getFlights: GetFlights, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal){
    overlay.defaultViewContainer = vcRef;
  }

  dateStart(date){
    this.start = date;
  }

  dateEnd(date){
    this.end = date;
  }

  selectAirportFrom(port){
    this.portFrom = port;
  }

  selectAirportTo(port){
    this.portTo = port;
  }

  find(){
    if(!this.start)
      this.openModal("choose_departure_airport");

    if(!this.portTo)
      this.openModal("choose_return_date");

    this.flights = [];

    this.getFlights.getFlights(this.start, this.end, this.portFrom, this.portTo).subscribe((date) => {
      this.flights = date.flights;
    });
  }

  openModal(key){
    let messages = this.flightBookingSelector.getMessages();

    this.modal.alert()
      .size('lg')
      .showClose(true)
      .title('Warning')
      .body(`<b>${messages[key]}</b>`)
      .open();
  }
}
