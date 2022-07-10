import { Component, OnInit } from '@angular/core';
import { skills } from './skills-list';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss']
})
export class SkillsSectionComponent implements OnInit {

  skills = skills;

  constructor() { }

  ngOnInit(): void {
  }

  trackByFun(index:number): number {
    return index;
  }

}
