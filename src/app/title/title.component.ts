import { Component } from '@angular/core';
import { TITLE_SECTION } from '../constants';

@Component({
  selector: 'app-title-component',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  text = TITLE_SECTION;
  trackByFun(index:number): number {
    return index;
  }
}
