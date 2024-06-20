import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { SearchPipe } from './customePipes/search.pipe';
import { HttpClientModule } from '@angular/common/http';
import { MinutesToHourPipe } from './customePipes/minutes-to-hour.pipe';
import { DollarConverterPipe } from './customePipes/dollar-converter.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    RouterLink,
    RouterModule,
    FormsModule,
    SearchPipe,
    MinutesToHourPipe,
    DollarConverterPipe],
    providers: [HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'harry-potter-movies';
}
