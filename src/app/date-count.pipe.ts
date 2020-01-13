import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let todaysDate:Date = new Date();
    let todaysDateNoTime:any = new Date(todaysDate.getFullYear(), todaysDate.getMonth(), todaysDate.getDate());
    var dateDifference = Math.abs(value - todaysDateNoTime)
    const secondsInDay = 86400;
    var dateDifferenceInseconds = dateDifference*0.001
    var dateCounter = dateDifferenceInseconds/secondsInDay;

    if (dateCounter >= 1 && value > todaysDateNoTime){
      return dateCounter;
    } else {
      return 0;
    }
  }

}
