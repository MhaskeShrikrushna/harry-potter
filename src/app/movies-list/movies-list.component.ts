import { Component } from '@angular/core';
import { MovieService } from '../Services/movie.service';
import { Movies } from '../model/movies';
import { MinutesToHourPipe } from "../customePipes/minutes-to-hour.pipe";
import { DollarConverterPipe } from "../customePipes/dollar-converter.pipe";
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../customePipes/search.pipe';

@Component({
    selector: 'app-movies-list',
    standalone: true,
    templateUrl: './movies-list.component.html',
    styleUrl: './movies-list.component.css',
    imports: [CommonModule,
      RouterLink,
      RouterModule,
      FormsModule,
      SearchPipe,
      MinutesToHourPipe,
      DollarConverterPipe]
})
export class MoviesListComponent {

  listOfMovies: Movies[] = [];
  movieTitle: string = '';
  releaseYear: number | undefined;
  erroMessage: string = '';

  constructor(private movieService: MovieService) {}

  getMoviesList() {
    this.movieService.getListOfMovies().subscribe (
      (data) => {
        this.listOfMovies = data;

      },
      (err) => {
        console.log(err);
        this.erroMessage = err.error.error.message || err.message;
      }
    );
  }

  ngOnInit(): void {
    this.getMoviesList();
  }

}
