import {Injectable} from '@angular/core';
import * as moment_ from 'moment';
import {GetActualDates} from './getActualDates/getActualDates';
import {MySQLConversion} from './MySQLConversion/mySQLConversion';
import {TimeDiffComplete} from './TimeDiffCalculation/timeDiffComplete';

@Injectable({
  providedIn: 'root'
})
export class DateTimeConverter {

  private moment = moment_;

  constructor(private mySqlService: MySQLConversion,
              private getActualDateService: GetActualDates,
              private timeDiffCompleteService: TimeDiffComplete) {
  }

  getTimeInMilliSeconds() {
    const date = new Date();
    return date.getTime();
  }

  getTimeInSeconds() {
    const date = new Date();
    return date.getTime() / 1000;
  }


  convertMySQLDate(date: string) {
    return this.mySqlService.convertMySQLDate(date);
  }


  timeDiff(dates, timeFrame) {
    dates = dates || {};


    if (arguments.length < 2) {
      return 'missing Parameter';
    }

    if (arguments.length > 3) {
      return 'Too many Parameters';
    }

    if (dates.length < 1) {
      return 'Error. Missing Date';
    }


    if (dates.length > 2) {
      return 'Error. Too many Parameters';
    }

    if (dates.length === 1) {
      return this.timeDiffCompleteService.calculateTimeDiffWithActualTime(dates[0], timeFrame);
    }

    if (typeof dates[0] === 'string' && typeof dates[1] === 'string') {
      return this.timeDiffCompleteService.calculateTimeDiffByString(dates[0], dates[1], timeFrame);
    }

    if (typeof dates[0] === 'number' && typeof dates[1] === 'number') {
      return this.timeDiffCompleteService.calculateTimeDiffByNumber(dates[0], dates[1], timeFrame);
    }

    if (typeof dates[0] === 'string' && typeof dates[1] === 'number' || typeof dates[0] === 'number' && typeof dates[1] === 'string') {
      return this.timeDiffCompleteService.calculateTimeDiffByNumber(dates[0], dates[1], timeFrame);
    }

  }


  getCalendarWeek() {
    return this.moment().week();
  }

  getDay() {
    return this.moment().day();
  }

  getActualDate(format: string) {
    return this.getActualDateService.getActualDate(format);
  }


  getActualIsoDate() {
    return this.getActualDateService.getActualIsoDate();
  }


  formatMSToDate(timeInMs: number, format: string) {
    return this.moment(timeInMs).format(format);
  }


  formatDate(date: string, format: string) {
    const newDate = this.moment(date, format);
    const timeZone = this.moment(newDate).local();
    return JSON.stringify(timeZone);

  }


}
