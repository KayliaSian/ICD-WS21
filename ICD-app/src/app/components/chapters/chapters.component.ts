import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Chapter } from '../../models/chapter.model'
import { Character } from '../../models/character.model'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.scss']
})
export class ChaptersComponent implements OnInit {

storyid:string;
chapterid:string;

 chapter$ : Observable<Chapter | undefined> = new Observable<Chapter | undefined>();
 char$ : Observable<Character | undefined> = new Observable<Character | undefined>();


  constructor(private db: AngularFirestore, private route: ActivatedRoute, public auth: AuthService) {
    this.storyid =this.route.snapshot.params['storyid'];
    this.chapterid =this.route.snapshot.params['chapterid'];

    this.chapter$ = db.doc<Chapter| undefined>('stories/'+this.storyid+'/chapters/'+this.chapterid).valueChanges();
    this.chapter$.subscribe(console.log);
  }

  ngOnInit(): void {
  }

}
