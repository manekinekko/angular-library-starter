import { Component } from '@angular/core';

@Component({
  selector: 'angular-library-component',
  template: `
  <p>
      {{name}} Works
  </p>
  `,
  styles: [`
  p {
      color: red;
  `]
})
export class AppComponent {
  name = 'App';
}
