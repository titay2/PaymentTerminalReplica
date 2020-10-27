import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardnumber'
})
export class CardNumberPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): unknown {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    return value.filter((item) =>
      item[propName].includes(filterString));
  }

}
