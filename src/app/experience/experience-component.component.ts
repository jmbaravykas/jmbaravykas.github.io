import { Component, OnInit } from '@angular/core';
import { experience } from './experience-list';

@Component({
  selector: 'app-experience-component',
  templateUrl: './experience-component.component.html',
  styleUrls: ['./experience-component.component.scss']
})
export class ExperienceComponentComponent implements OnInit {

  experience = experience;
  showModal = false;
  selectedCompany = null;

  constructor() { }

  ngOnInit(): void {
  }

  trackByFun(index:number): number {
    return index;
  }

  openModal(selectedCompany: any) {
    this.selectedCompany = selectedCompany;
    this.showModal = true;
  }

  closeModal() {
    this.selectedCompany = null;
    this.showModal = false;
  }

}
