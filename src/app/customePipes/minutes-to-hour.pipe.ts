import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToHour',
  standalone: true
})
export class MinutesToHourPipe implements PipeTransform {

  transform(value: string): string {
    const movieMinutes = Number(value) % 60;
    const movieHours = (Number(value) - movieMinutes) / 60;

    const totalTime: string = movieHours + 'h ' + movieMinutes + 'min';
    return totalTime;
  }

}
