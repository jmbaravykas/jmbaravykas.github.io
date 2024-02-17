import { Component, Input } from '@angular/core';
import { EDUCATION_SECTION } from '../constants';

@Component({
  selector: 'app-education-component',
  templateUrl: './education-component.component.html',
  styleUrls: ['./education-component.component.scss']
})
export class EducationComponentComponent {
  @Input() number: number = 0;
  SECTION = EDUCATION_SECTION;
  trackByFun(index:number): number {
    return index;
  }
}
