import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollarConverter',
  standalone: true
})
export class DollarConverterPipe implements PipeTransform {

  transform(value: string): string {
    return '$' + value + ' million';
  }

}
