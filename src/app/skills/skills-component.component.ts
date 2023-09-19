import { Component, OnInit } from '@angular/core';
import { skills } from './skills-list';

@Component({
  selector: 'app-skills-component',
  templateUrl: './skills-component.component.html',
  styleUrls: ['./skills-component.component.scss']
})
export class SkillsComponentComponent implements OnInit {

  skills = skills;

  constructor() { }

  ngOnInit(): void {
  }

  trackByFun(index:number): number {
    return index;
  }

}
