import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponentComponent } from './experience/experience-component.component';
import { HomeComponentComponent } from './home/home-component.component';
import { SkillsComponentComponent } from './skills/skills-component.component';
import { ContactComponentComponent } from './contact/contact-component.component';
import { ProjectsComponentComponent } from './projects/projects-component.component';
import { EducationComponentComponent } from './education/education-component.component';
import { ExperienceDetailsComponentComponent } from './experience-details/experience-details-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExperienceComponentComponent,
    HomeComponentComponent,
    SkillsComponentComponent,
    ContactComponentComponent,
    ProjectsComponentComponent,
    EducationComponentComponent,
    ExperienceDetailsComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
