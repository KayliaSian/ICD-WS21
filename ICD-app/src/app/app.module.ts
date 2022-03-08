import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { CharacterlistComponent } from './characterlist/characterlist.component';
import { CharacterComponent } from './character/character.component';
import { LocationComponent } from './location/location.component';
import { StoryComponent } from './story/story.component';
import { StoriesComponent } from './stories/stories.component';
import { ChaptersComponent } from './chapters/chapters.component';


const config = {
  apiKey: "AIzaSyCRZyj6-GE-pz06EDn4_5iMcgfR9OXeREs",
  authDomain: "storyboard-75a50.firebaseapp.com",
  projectId: "storyboard-75a50",
  storageBucket: "storyboard-75a50.appspot.com",
  messagingSenderId: "619556049697",
  appId: "1:619556049697:web:3090b8f5f19ed53e44e460",
  measurementId: "G-6P1GQCHB96"
};

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    CharacterlistComponent,
    CharacterComponent,
    LocationComponent,
    StoryComponent,
    StoriesComponent,
    ChaptersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
