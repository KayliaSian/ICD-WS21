import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { CharacterlistComponent } from './characterlist/characterlist.component';
import { CharacterComponent } from './character/character.component';
import { LocationComponent } from './location/location.component';
import { PlotComponent } from './plot/plot.component';
import { StoriesComponent } from './stories/stories.component';
import { ChaptersComponent } from './chapters/chapters.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    CharacterlistComponent,
    CharacterComponent,
    LocationComponent,
    PlotComponent,
    StoriesComponent,
    ChaptersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
