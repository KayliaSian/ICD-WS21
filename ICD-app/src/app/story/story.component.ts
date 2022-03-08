import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Story } from '../models/story.model'

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

 story$ : Observable<Story | undefined> = new Observable<Story | undefined>();

  constructor(private db: AngularFirestore, private route: ActivatedRoute) {
    const id =this.route.snapshot.params['id'];
    this.story$ = db.doc<Story| undefined>('stories/'+id).valueChanges();
    this.story$.subscribe(console.log);
  }

  ngOnInit(): void {
  }

}
