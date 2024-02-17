import { Component, Input } from '@angular/core';
import { ABOUT_SECTION } from '../constants';

@Component({
  selector: 'app-about-component',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent  {
  @Input() number: number = 0;
  SECTION = ABOUT_SECTION;
  trackByFun(index:number): number {
    return index;
  }
}
