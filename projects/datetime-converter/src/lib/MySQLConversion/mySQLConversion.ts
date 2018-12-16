import {Injectable} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})
export class MySQLConversion {


  constructor(private deviceService: DeviceDetectorService,) {
  }


  convertMySQLDate(date: string) {
    let browser: string;
    const device = this.deviceService.getDeviceInfo();
    browser = device.browser;
    if (browser === 'chrome') {
      return date;
    } else if (browser === 'safari') {
      const newDate = date;
      return newDate.replace(/\s/g, 'T');

    } else {
      return date;
    }
  }


}
