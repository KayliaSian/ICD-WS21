import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { CharacterlistComponent } from './characterlist/characterlist.component';
import { CharacterComponent } from './character/character.component';
import { LocationComponent } from './location/location.component';
import { PlotComponent } from './plot/plot.component';
import { StoriesComponent } from './stories/stories.component';
import { ChaptersComponent } from './chapters/chapters.component';


const routes: Routes = [
  { path: '', component: LandingpageComponent},
  { path: 'characterlist', component: CharacterlistComponent},
  { path: 'character', component: CharacterComponent},
  { path: 'location', component: LocationComponent},
  { path: 'plot', component: PlotComponent},
  { path: 'chapter', component: ChaptersComponent},
  { path: 'stories', component: StoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
