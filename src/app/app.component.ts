import {Component} from '@angular/core';
import {DateTimeConverter} from '../../projects/datetime-converter/src/lib/datetime-converter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dateTimeConverter: DateTimeConverter) {
    console.log('Actual Date: ' + this.dateTimeConverter.getActualDate('LT'));
    console.log(this.dateTimeConverter.getTimeInMilliSeconds());
    const dates = [1525745162001, '2018-05-06T01:53:15.035Z'];
    const dates1 = ['2018-05-09T12:53:15.035Z'];

    console.log('ActualTimeInSeconds: ' + this.dateTimeConverter.getTimeInSeconds());
    console.log('CompleteTimeDiff:' + this.dateTimeConverter.timeDiff(dates1, 'seconds'));
    console.log('ActualCompleteTimeDiff: ' + this.dateTimeConverter.timeDiff(dates, 'hour'));
    this.dateTimeConverter.getActualDate('LLL');
  }
}
