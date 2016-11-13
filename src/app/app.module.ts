import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {HomeComponent} from './home/home.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {SelectAirportComponent} from "./shared/directives/select-airport/select-airport.component";
import {FlightBookingSelector} from "./shared/api/flight-booking-selector";

@NgModule({
  declarations: [AppComponent, HomeComponent, SelectAirportComponent],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [{provide: LocationStrategy, useClass: HashLocationStrategy}, FlightBookingSelector],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
