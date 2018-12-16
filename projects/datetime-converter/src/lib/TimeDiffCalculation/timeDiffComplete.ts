import {Injectable} from '@angular/core';
import * as moment_ from 'moment';

@Injectable({
  providedIn: 'root'
})
export class TimeDiffComplete {

  moment = moment_;

  constructor() {
  }

  calculateTimeDiffWithActualTime(date: any, timeFrame: any) {
    const datum = new Date();
    const time = datum.getTime();

    const a = this.moment(date);
    const b = this.moment(time);

    return b.diff(a, timeFrame, true);

  }


  calculateTimeDiffByMix(date: any, reference: any, timeFrame: any) {
    const a = this.moment(date);
    const b = this.moment(reference);

    return a.diff(b, timeFrame, true);
  }

  calculateTimeDiffByString(date: string, reference: string, timeFrame: any) {
    const a = this.moment(date);
    const b = this.moment(reference);

    return a.diff(b, timeFrame, true);
  }

  calculateTimeDiffByNumber(date: number, reference: number, timeFrame: any) {
    const a = this.moment(date);
    const b = this.moment(reference);

    return a.diff(b, timeFrame, true);
  }


}
