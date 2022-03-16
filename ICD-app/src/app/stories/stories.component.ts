import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { StoryService } from '../shared/story.service';
import { Story } from '../models/story.model'

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

 stories$ : Observable<Story[]> = new Observable<Story[]>();

  constructor(private db: AngularFirestore, private crudApi: StoryService) {
    this.stories$ = db.collection<Story>('stories').valueChanges({ idField: 'id' });
    this.stories$.subscribe(console.log);
  }

  ngOnInit(): void {
  }


   deleteStory(story : any) {

          this.crudApi.DeleteStory(story.id)
      }


}
