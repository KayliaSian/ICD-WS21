import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Story } from '../models/story.model'

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

 stories$ : Observable<Story[]> = new Observable<Story[]>();

  constructor(private db: AngularFirestore) {
    this.stories$ = db.collection<Story>('stories').valueChanges({ idField: 'id' });
    this.stories$.subscribe(console.log);
  }

  ngOnInit(): void {
  }

}
