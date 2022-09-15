import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom //nonne - means no encapsulation, thus a
  //browsers native feature: styles are applicable to whole body. To avoid this, we can create a shadow DOM.  
})
export class AppComponent {
  title = 'Hello-World';
}
