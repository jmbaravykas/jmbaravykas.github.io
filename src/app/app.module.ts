import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TitleSectionComponent } from './title-section/title-section.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ExperienceSectionComponent } from './experience-section/experience-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { ExperienceModalComponent } from './experience-section/experience-modal/experience-modal.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleSectionComponent,
    NavBarComponent,
    AboutSectionComponent,
    ExperienceSectionComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    ExperienceModalComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
