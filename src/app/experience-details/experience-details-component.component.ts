import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-experience-details-component',
  templateUrl: './experience-details-component.component.html',
  styleUrls: ['./experience-details-component.component.scss']
})
export class ExperienceDetailsComponentComponent implements OnInit {
  @Input() company: any = null;


  @Output() closeModal = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.closeModal.emit();
  }

}
