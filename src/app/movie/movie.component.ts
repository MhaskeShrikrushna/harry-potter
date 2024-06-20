import { Component, OnInit } from '@angular/core';
import { MoviesDetails } from '../model/movies-details';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../Services/movie.service';
import { DollarConverterPipe } from "../customePipes/dollar-converter.pipe";
import { MinutesToHourPipe } from "../customePipes/minutes-to-hour.pipe";

@Component({
    selector: 'app-movie',
    standalone: true,
    templateUrl: './movie.component.html',
    styleUrl: './movie.component.css',
    imports: [DollarConverterPipe, MinutesToHourPipe]
})
export class MovieComponent implements OnInit {

  movie_id: string = '';
  movieDetails:MoviesDetails={
    id: '',
    title: '',
    duration: '',
    budget: '',
    release_date: '',
    box_office: '',
    cinematographers: [],
    poster: '',
    producers: [],
    summary: ''
  } ;
  erroMessage: string='';

  constructor(
    private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute 
  ) {}

  ngOnInit() {
    this.route.params.subscribe((movie_id) => {
      this.movie_id = movie_id['movieId'];
    });


    this.movieService.getMovieById(this.movie_id).subscribe((movieDetails) => {
      this.movieDetails=movieDetails;
    },
    (err) => {
      console.log(err);
      this.erroMessage = err.error.error.message || err.message;
    });
  }

  backToHome():void{
    this.router.navigate(['/movies']);
  }


}
