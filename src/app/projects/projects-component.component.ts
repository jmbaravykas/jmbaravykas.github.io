import { Component, OnInit } from '@angular/core';

const PROJECTS = [
  {
    title: 'The Bunker',
    image: 'bunker-door.png',
    date: '2023 December - 2024 February',
    shortDescription: '"The Bunker" is a captivating 2D pixel art game developed with the Godot engine, immersing players in the story of a man who discovers a mysterious hatch in the forest leading to an underground bunker. In this game, players assume the role of the protagonist as they navigate through eerie depths of the bunker.',
    moreDetails: false,
    description: 'A very short 2D demo game, made in Godot. You take a role of a lost man, who is trying to escape from a dark bunker..',
    github: null,
    technology: ['Godot', 'Aseprite'],
    link: 'https://holdim.itch.io/the-bunker',
    images: []
  },
  {
    title: 'Personal page',
    image: 'placeholder-image.jpg',
    date: '2023 Sep - 2023 Sep',
    shortDescription: 'This personal page was made over view days. So people could see my skills and contact me if needed. For this pages nothing more than Angular and SCSS was used.',
    moreDetails: false,
    description: 'This personal page was made over view days. So people could see my skills and contact me if needed.',
    github: null,
    technology: ['Angular', 'HTML5', 'SCSS'],
    link: null,
    images: []
  }
];
@Component({
  selector: 'app-projects-component',
  templateUrl: './projects-component.component.html',
  styleUrls: ['./projects-component.component.scss']
})
export class ProjectsComponentComponent implements OnInit {

  projects = PROJECTS;

  constructor() { }

  ngOnInit(): void {
  }

  trackByFun(index: number): number {
    return index;
  }

}
