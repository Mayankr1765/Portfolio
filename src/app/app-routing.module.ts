import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Folders/About/about/about.component';
import { EducationComponent } from './Folders/Education/education/education.component';
import { ProjectsComponent } from './Folders/PersonalProjects/projects/projects.component';
import { ProfileComponent } from './Folders/profile/profile.component';
import { SkillsComponent } from './Folders/skills/skills.component';
import { ExperienceComponent } from './Folders/WorkExperience/experience/experience.component';

// const routes: Routes = [];
const routes: Routes = [
  // {path:'',component: AppComponent, exact: true},
  { path: 'home',component: ProfileComponent},
  {path:'about' , component:AboutComponent},
  {path:'education', component:EducationComponent},
  {path:'experience', component:ExperienceComponent},
  {path:'project', component:ProjectsComponent},
  {path:'skills',component:SkillsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
