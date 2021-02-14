import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'practice typing';
  randomText = lorem.sentence().split('');
  userEnteredText = '';

  onInput(event: any) {
    this.userEnteredText = event.target.value
  }

  compareLetter(randomLetter: string, userInputLetter: string) {

    if(!userInputLetter) {
      return 'pending'
    }

    return (randomLetter === userInputLetter) ? 'correct' : 'incorrect'

  }

}
