// import { Component, VERSION } from '@angular/core';

// @Component({
//   selector: 'my-app',
//   templateUrl: './app.component.html',
//   styleUrls: [ './app.component.css' ]
// })
// export class AppComponent  {
//   name = 'Angular ' + VERSION.major;
// }

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styles: [
    `
    .app {
      display: block;
      text-align: center;
      padding: 25px;
      background: #f5f5f5;
    }
  `,
  ],
  template: `
    <div class="app">
      Parent: {{ myCount }} 
      <counter
        [count]="myCount"
        (mychange)="countChange($event)">
      </counter>
    </div>
  `,
})
export class AppComponent {
  myCount: number = 10;
  countChange(event) {
    console.log('change called...!!!');
    console.log(event);
    this.myCount = event;
  }
}
