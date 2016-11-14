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
import { MyDatePickerModule } from 'mydatepicker';
import {DatePickerComponent} from "./shared/directives/date-picker/date-picker.component";
import {GetFlights} from "./shared/api/get-flights";
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

@NgModule({
  declarations: [AppComponent, HomeComponent, SelectAirportComponent, DatePickerComponent],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig), MyDatePickerModule,
    ModalModule.forRoot(),
    BootstrapModalModule],
  providers   : [{provide: LocationStrategy, useClass: HashLocationStrategy}, FlightBookingSelector, GetFlights],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
