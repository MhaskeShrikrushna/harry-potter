import { Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

export const routes: Routes = [{ path: 'movies', component: MoviesListComponent },
    { path: 'movies/:movieId', component: MovieComponent },
    { path: '**', redirectTo: 'movies' }
];
