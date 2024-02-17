import { Component, Input } from '@angular/core';
import { CONTACTS_SECTION } from '../constants';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.scss']
})
export class ContactComponentComponent {
  @Input() number: number = 0;
  SECTION = CONTACTS_SECTION;
  trackByFun(index:number): number {
    return index;
  }
}
