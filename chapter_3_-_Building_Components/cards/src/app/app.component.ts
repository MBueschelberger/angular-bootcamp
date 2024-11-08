import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , CardComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  posts = [
    {
      title: 'Neat tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this tree yesterday'
    },
    {
      title: 'Snowy Mouintain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainlover',
      content: 'Here is picture of a snowy Mouintain'
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biking12222',
      content: 'I did some biking today'
    }
  ]
}
