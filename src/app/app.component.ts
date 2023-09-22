import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInFromTop', [
      transition(':enter', [
        style({ opacity: 1, transform: 'translateY(50%)' }),
        animate('800ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class AppComponent {

  loading: boolean = true;

}
