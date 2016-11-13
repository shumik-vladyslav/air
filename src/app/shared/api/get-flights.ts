import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Http} from "@angular/http";

@Injectable()
export class GetFlights {

  constructor(private http: Http) {

  }

  getFlights(start, end){
    return this.http.get(`https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights/from/DUB/to/STN/${start}/${end}/250/unique/?limit=15&offset-0`)
      .map(res => res.json());
  }
}
