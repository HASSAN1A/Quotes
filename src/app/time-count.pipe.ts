import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any): any {

    let today: Date = new Date();
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(todayWithNoTime - value)
    var dateDifferenceSeconds = dateDifference * 0.001;
    var dateDifferenceMinutes = dateDifferenceSeconds / 60;
    var dateDifferenceHours = dateDifferenceMinutes / 60;
    var dateDifferenceDays = dateDifferenceHours / 24;

    if (dateDifferenceDays > 0 && value < todayWithNoTime) {
      let unit = 'day(s)';
      return (dateDifferenceDays + " " + unit);
    } else if (dateDifference > 0 && value < todayWithNoTime) {
      let unit = 'hour(s)';
      return (dateDifferenceDays + " " + unit);
    } else if (dateDifferenceMinutes > 0 && value < todayWithNoTime) {
      let unit = 'minute(s)';
      return (dateDifferenceMinutes + " " + unit);
    } else if (value < todayWithNoTime) {
      let unit = 'seconds';
      return (dateDifferenceSeconds + " " + unit);
    } else {
      return ('1 second');
    }
  }
}

