import { Component, Input } from '@angular/core';
import { SKILLS_SECTION } from '../constants';

@Component({
	selector: 'app-skills-component',
	templateUrl: './skills-component.component.html',
	styleUrls: ['./skills-component.component.scss']
})
export class SkillsComponentComponent {
	@Input() number: number = 0;
	SECTION = SKILLS_SECTION;
	trackByFun(index: number): number {
		return index;
	}
}
