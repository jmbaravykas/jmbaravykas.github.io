import { Component, OnInit } from '@angular/core';

const SKILLS = [
  {
      section: 'web technologies',
      list: 'JavaScript, TypeScript, Angular 14, Jasmine, Cypress, Redux, Bootstrap 5, Ajax, HTML5, CSS3, SCSS.'
  },
  {
      section: 'soft skills',
      list: 'team leadership, project managment, consulting, onboarding, training, mentoring, requirements gathering, requiremnets analysis, presentation.'
  },
  {
      section: 'militarty',
      list: 'strategic planning, explosives safety, firearms handling, training, presentation, orientation.'
  },
  {
      section: 'game development',
      list: 'GODOT, GDScript.'
  },
  {
      section: 'backend',
      list: 'node.js, express.'
  },
  {
      section: 'database',
      list: 'mongodb, couchdb.'
  },
  {
      section: 'cloud',
      list: 'docker.'
  },
  {
      section: 'devops',
      list: 'git, npm.'
  },
  {
      section: 'methodologies',
      list: 'agile, scrum, lean.'
  },
]

@Component({
  selector: 'app-skills-component',
  templateUrl: './skills-component.component.html',
  styleUrls: ['./skills-component.component.scss']
})
export class SkillsComponentComponent implements OnInit {

  skills = SKILLS;

  constructor() { }

  ngOnInit(): void {
  }

  trackByFun(index:number): number {
    return index;
  }

}
