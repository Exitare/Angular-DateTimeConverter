import {Injectable} from '@angular/core';
import * as moment_ from 'moment';

@Injectable({
  providedIn: 'root'
})
export class GetActualDates {

  moment = moment_;

  constructor() {
  }

  getCalendarWeek() {
    return this.moment().week();
  }

  getDay() {
    return this.moment().day();
  }

  getActualDate(format: string) {
    if (format === '') {
      return this.moment().format('LLLL');
    }
    return this.moment().format(format);
  }


  getActualIsoDate() {
    return this.moment().toISOString();
  }


}
