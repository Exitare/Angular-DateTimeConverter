#DateTime-Converter


DatetimeConverter converts Time and Dates to your desired Format.    
It also converts MySQL String date to a format Angular datepipe can work with!    
No extra work needed.

Tested and works with Angular 6!

Package is still in Development.

## Installation

npm install datetime-converter


## Usage

import { DateTimeConverter } from 'datetime-converter';


###Calculate TimeDifference
>const dates = [1525745162001, '2018-05-06T01:53:15.035Z'];
>console.log(this.dateTimeConverter.timeDiff(dates1, 'hour')););     
 // Output: 7.625518888888889    
 
 
> const dates1 = ['2018-05-06T01:53:15.035Z'];
>console.log(this.dateTimeConverter.timeDiff(dates1, 'hour'));   
//Ouput: 48.21304611111111  



You can mixup all different kind of Date Strings. The Package will convert it to correct form.

##### Possible TimeFrameOptions
ms, seconds, minutes, hour, day, year



### GetActualTime
> import { DateTimeConverter } from 'datetime-converter';

> console.log(this.dateTimeConverter.getActualDate(''));            
>// Output: Tuesday, May 8, 2018 9:55 AM

>console.log(this.dateTimeConverter.getActualDate('YYYY.MM.DD'));                  
//Output: 2018.05.08




## Roadmap

1. Calculate Dates (Past and the Future)
2. Add a complete Docu
 


## Format 

You can use all Formats provided by Angular.
Just check it out [here](https://angular.io/api/common/DatePipe)


## Known Bugs 

No known Bugs



##Contact

[E-Mail](mailto:bugs@avarius.net)                   
[Discord](https://discord.gg/XX7sYyf)

