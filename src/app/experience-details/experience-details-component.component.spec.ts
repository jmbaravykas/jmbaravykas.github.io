import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDetailsComponentComponent } from './experience-details-component.component';

describe('ExperienceDetailsComponentComponent', () => {
  let component: ExperienceDetailsComponentComponent;
  let fixture: ComponentFixture<ExperienceDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceDetailsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
