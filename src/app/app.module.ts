import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Folders/About/about/about.component';
import { EducationComponent } from './Folders/Education/education/education.component';
import { HeaderComponent } from './Folders/Header/header/header.component';
import { ProjectsComponent } from './Folders/PersonalProjects/projects/projects.component';
import { ExperienceComponent } from './Folders/WorkExperience/experience/experience.component';
import { ProfileComponent } from './Folders/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { SkillsComponent } from './Folders/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EducationComponent,
    HeaderComponent,
    ProjectsComponent,
    ExperienceComponent,
    ProfileComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxNavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
