import { Component, Input } from '@angular/core';
import { PROJECTS_SECTION } from '../constants';

@Component({
  selector: 'app-projects-component',
  templateUrl: './projects-component.component.html',
  styleUrls: ['./projects-component.component.scss']
})
export class ProjectsComponentComponent {
  @Input() number: number = 0;
  SECTION = PROJECTS_SECTION;
  trackByFun(index: number): number {
    return index;
  }
}
