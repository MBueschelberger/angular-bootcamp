import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  includeLetters = false;

  includeNumbers = false;

  includeSymbols = false;

  password = '';

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    this.password = 'MY PASSWORD';

    console.log(`
      About to generate password with: 
      - includes letters: ${this.includeLetters}
      - includes numbers: ${this.includeNumbers}
      - includes symbols: ${this.includeSymbols}
    `);
  }

}
