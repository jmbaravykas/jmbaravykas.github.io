import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-experience-modal',
  templateUrl: './experience-modal.component.html',
  styleUrls: ['./experience-modal.component.scss']
})
export class ExperienceModalComponent implements OnInit {
  
  @Input() isModalOpen: boolean = false;
  @Output() modalClosed: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onClose(): void {
    this.isModalOpen = false;
    this.modalClosed.emit();
  }

}
