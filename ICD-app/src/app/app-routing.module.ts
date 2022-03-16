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
import { AddLocationComponent } from './shared/add-location/add-location.component';
import { EditLocationComponent } from './shared/edit-location/edit-location.component';
import { LocationlistComponent } from './locationlist/locationlist.component';
import { AddStoryComponent } from './shared/add-story/add-story.component';
import { EditStoryComponent } from './shared/edit-story/edit-story.component';
import { AddChapterComponent } from './shared/add-chapter/add-chapter.component';
import { EditChapterComponent } from './shared/edit-chapter/edit-chapter.component';




const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'characterlist', component: CharacterlistComponent},
    { path: 'locationlist', component: LocationlistComponent},
  { path: 'character/:id', component: CharacterComponent},
  { path: 'location/:id', component: LocationComponent},
  { path: 'story/:storyid', component: StoryComponent},
  { path: 'chapter/:storyid/:chapterid', component: ChaptersComponent},
  { path: 'stories', component: StoriesComponent},
  { path: 'home', component: LandingpageComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'add-character', component: AddCharacterComponent},
  { path: 'edit-character/:id', component: EditCharacterComponent},
  { path: 'edit-location/:id', component: EditLocationComponent},
  { path: 'add-location', component: AddLocationComponent},
  { path: 'add-story', component: AddStoryComponent},
  { path: 'edit-story/:id', component: EditStoryComponent},
    { path: 'story/:storyid/add-chapter', component: AddChapterComponent},
    { path: 'chapter/:storyid/edit-chapter/:chapterid', component: EditChapterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
