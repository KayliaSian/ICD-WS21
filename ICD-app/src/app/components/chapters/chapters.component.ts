import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Chapter } from '../../models/chapter.model'
import { Character } from '../../models/character.model'

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.scss']
})
export class ChaptersComponent implements OnInit {

 chapter$ : Observable<Chapter | undefined> = new Observable<Chapter | undefined>();
 char$ : Observable<Character | undefined> = new Observable<Character | undefined>();


  constructor(private db: AngularFirestore, private route: ActivatedRoute) {
    const storyid =this.route.snapshot.params['storyid'];
    const chapterid =this.route.snapshot.params['chapterid'];
    console.log(storyid);

    this.chapter$ = db.doc<Chapter| undefined>('stories/'+storyid+'/chapters/'+chapterid).valueChanges();
    this.chapter$.subscribe(console.log);
  }

  ngOnInit(): void {
  }

}
