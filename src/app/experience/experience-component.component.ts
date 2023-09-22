import { Component, OnInit } from '@angular/core';
import { experience } from './experience-list';

@Component({
  selector: 'app-experience-component',
  templateUrl: './experience-component.component.html',
  styleUrls: ['./experience-component.component.scss']
})
export class ExperienceComponentComponent implements OnInit {

  experiences = experience;

  constructor() { }

  ngOnInit(): void {
  }

  trackByFun(index:number): number {
    return index;
  }

}
