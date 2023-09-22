import { Component, OnInit } from '@angular/core';

const PROJECTS = [
  {
      title: 'Personal page',
      image: 'placeholder-image.jpg',
      date: '2023 Sep - 2023 Sep',
      shortDescription: 'This personal page was made over view days. So people could see my skills and contact me if needed. For this pages nothing more than Angular and SCSS was used.',
      moreDetails: false,
      description: 'This personal page was made over view days. So people could see my skills and contact me if needed.',
      github: null,
      technology: ['Angular', 'HTML5', 'SCSS'],
      link: 'https://jmbaravykas.github.io/',
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

  trackByFun(index:number): number {
    return index;
  }

}
