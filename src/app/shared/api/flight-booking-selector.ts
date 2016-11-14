import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Http} from "@angular/http";

@Injectable()
export class FlightBookingSelector {
  data = {};

  public countriesSubject = new Subject<any>();

  public airportsSubject = new Subject<any>();

  constructor(private http: Http) {
    http.get('https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/').subscribe((data) => {
      this.data = data.json();
      this.countriesSubject.next(this.data["countries"]);
      this.airportsSubject.next(this.data["airports"]);

    });
  }

  getCountry(){
    return this.data["countries"];
  }

  getAirports(){
    return this.data["airports"];
  }

  getMessages(){
    return this.data["messages"];
  }
}
