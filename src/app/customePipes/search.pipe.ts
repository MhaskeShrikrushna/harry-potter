import { Pipe, PipeTransform } from '@angular/core';
import { Movies } from '../model/movies';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(
    value: Movies[],
    title: string,
    releaseYear: number | undefined
  ): Movies[] {
    //if both filters are not provided
    if (
      (title == '' || title == undefined || !title) &&
      (!releaseYear || releaseYear === undefined || releaseYear === null)
    ) {
      return value;
    }

    const tempValue = [...value];
    let filteredOutput: Movies[] = [];

    //if both filter are applied
    if (title && releaseYear) {
      filteredOutput = tempValue.filter((value) => {
        return (
          value.title.toLowerCase().includes(title.toLowerCase()) &&
          value.release_date.includes(String(releaseYear))
        );
      });
      return filteredOutput;
    }
//If only release date is provided 
    if (releaseYear) {
      filteredOutput = tempValue.filter((value) => {
        return value.release_date.includes(String(releaseYear));
      });
    }
    //If title of the movie is provided
    if (title) {
      filteredOutput = tempValue.filter((value) => {
        return value.title.toLowerCase().includes(title.toLowerCase());
      });
    }
    
    return filteredOutput;
  }
}
