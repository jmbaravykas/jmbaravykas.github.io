import { Component, OnInit } from '@angular/core';
import { education, experience } from './experience-data';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss']
})
export class ExperienceSectionComponent implements OnInit {

  isModalOpen: boolean = false;
  experience = experience;
  education = education;

  constructor() { }

  ngOnInit(): void {
  }

  onOpenModal(): void {
    this.isModalOpen = true;
  }

  onCloseModal(): void {
    this.isModalOpen = false;
  }

  trackByFun(index:number): number {
    return index;
  }
}
