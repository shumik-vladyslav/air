import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html'
})
export class DatePickerComponent {

  @Output() dateUpdate = new EventEmitter();

  myDatePickerOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'yyyy-mm-dd',
    firstDayOfWeek: 'mo',
    sunHighlight: true,
    height: '34px',
    width: '260px',
    inline: false,
    disableUntil: {year: 2016, month: 8, day: 10},
    selectionTxtFontSize: '16px'
  };

  onDateChanged(event:any) {
    this.dateUpdate.emit(event.formatted);

    console.log('onDateChanged(): ', event.date, ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
  }
}
