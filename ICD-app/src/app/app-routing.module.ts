import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { CharacterlistComponent } from './characterlist/characterlist.component';
import { CharacterComponent } from './components/character/character.component';
import { LocationComponent } from './components/location/location.component';
import { StoryComponent } from './components/story/story.component';
import { StoriesComponent } from './stories/stories.component';
import { ChaptersComponent } from './components/chapters/chapters.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddCharacterComponent } from './shared/add-character/add-character.component';
import { EditCharacterComponent } from './shared/edit-character/edit-character.component';
import { CharacterListComponent } from './shared/character-list/character-list.component';



const routes: Routes = [
  { path: '', component: LandingpageComponent},
  { path: 'characterlist', component: CharacterlistComponent},
  { path: 'character/:id', component: CharacterComponent},
  { path: 'location/:id', component: LocationComponent},
  { path: 'story/:storyid', component: StoryComponent},
  { path: 'chapter/:storyid/:chapterid', component: ChaptersComponent},
  { path: 'stories', component: StoriesComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'add-character', component: AddCharacterComponent},
  { path: 'view-characters', component: CharacterListComponent},
  { path: 'edit-character/:id', component: EditCharacterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
