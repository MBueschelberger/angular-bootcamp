import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  randomText: string = faker.lorem.sentence();
  enterText: string = '';
  solved: boolean = false;

  onInput(event: any) {
    console.log(event.target.value);
    if (event.target.value === this.randomText) {
      this.solved = true;
    }
    this.enterText = event.target.value;
  }


}
