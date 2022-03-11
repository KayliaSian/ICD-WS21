import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { CharacterlistComponent } from './characterlist/characterlist.component';
import { CharacterComponent } from './components/character/character.component';
import { LocationComponent } from './components/location/location.component';
import { StoryComponent } from './components/story/story.component';
import { StoriesComponent } from './stories/stories.component';
import { ChaptersComponent } from './components/chapters/chapters.component';


const routes: Routes = [
  { path: '', component: LandingpageComponent},
  { path: 'characterlist', component: CharacterlistComponent},
  { path: 'character/:id', component: CharacterComponent},
  { path: 'location/:id', component: LocationComponent},
  { path: 'story/:storyid', component: StoryComponent},
  { path: 'chapter/:storyid/:chapterid', component: ChaptersComponent},
  { path: 'stories', component: StoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
