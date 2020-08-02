import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular with material theme';

  arr = ['Pune', 'Mumbai', 'Nashik'];

  obj = {
    name: 'ABC',
    age: 24,
  };
}
