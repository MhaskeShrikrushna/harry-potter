import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Movies} from '../model/movies';
import { MoviesDetails } from '../model/movies-details'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  getListOfMovies(): Observable<Movies[]> {
    return this.http
      .get<Movies[]>('/movies')
      .pipe(catchError((error) => this.errorHandler(error)));
  }

  getMovieById(movieId: string): Observable<MoviesDetails> {
    return this.http
      .get<MoviesDetails>('/movies/' + movieId)
      .pipe(catchError((error) => this.errorHandler(error)));
  }

  errorHandler(error: Error) {
    return throwError(error);
  }


}
