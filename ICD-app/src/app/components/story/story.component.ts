import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Story } from '../../models/story.model'
import { Chapter } from '../../models/chapter.model'
import { Location } from '../../models/location.model'

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  storyid: string;
  story$ : Observable<Story | undefined> = new Observable<Story | undefined>();
  chapters$ : Observable<Chapter[]> = new Observable<Chapter[]>();

  constructor(private db: AngularFirestore, private route: ActivatedRoute) {
    this.storyid=this.route.snapshot.params['storyid'];
    this.story$ = db.doc<Story| undefined>('stories/'+this.storyid).valueChanges();
    this.chapters$ = db.collection<Chapter>('stories/'+this.storyid+'/chapters').valueChanges();
  }

  ngOnInit(): void {
  }

}
