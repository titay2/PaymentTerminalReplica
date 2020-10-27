import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amountFilter'
})
export class AmountFilterPipe implements PipeTransform {

  transform(value: any, startAmt: number, endAmt: number, propName: string): unknown {
    if (value.length === 2 || startAmt === null || endAmt === null) {
      return value;
    }

    return value.filter((item) =>
      item[propName] >= startAmt &&
      item[propName] <= endAmt
    )
  }

}
