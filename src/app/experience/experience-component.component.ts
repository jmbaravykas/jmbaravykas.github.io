import { Component, Input, OnInit } from '@angular/core';
import { EXPERIENCE_SECTION } from '../constants';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-experience-component',
  templateUrl: './experience-component.component.html',
  styleUrls: ['./experience-component.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('out', style({ height: '*', opacity: 1 })),
      state('in', style({ height: 0, opacity: 0 })),
      transition('out => in', animate('0.3s ease-in-out')),
      transition('in => out', animate('0.3s ease-in-out')),
    ]),
  ]
})
export class ExperienceComponentComponent implements OnInit {
  @Input() number: number = 0;
  SECTION = EXPERIENCE_SECTION;
  experiences: Array<any> = []
  isModalVisible: boolean = false;
  activeProject: any = null;

  ngOnInit(): void {
    EXPERIENCE_SECTION.exp.forEach((element: any, index: number) => {
      this.experiences.push({
        data: element,
        state: 'in'
      });
    });
  }

  toggleItem(item: any) {
    item.state = (item.state === 'out') ? 'in' : 'out';
  }

  toggleModal(project: any) {
    this.activeProject = project;
    this.isModalVisible = !this.isModalVisible;
  }

  trackByFun(index: number): number {
    return index;
  }
}
