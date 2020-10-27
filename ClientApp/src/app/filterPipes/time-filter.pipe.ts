import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFilter'
})
export class TimeFilterPipe implements PipeTransform {

  transform(value: any, startTime: string, endTime: string, propName: string): unknown {
    if (value.length === 2 || startTime === "" || endTime === "") {
      return value;
    }

    return value.filter((item) =>
      new Date(item[propName]).getTime() >= new Date(startTime).getTime() &&
      new Date(item[propName]).getTime() <= new Date(endTime).getTime()
    )
  }

}
