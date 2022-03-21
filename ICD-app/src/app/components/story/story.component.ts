import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ChapterService } from '../../shared/chapter.service';
import { Story } from '../../models/story.model'
import { Chapter } from '../../models/chapter.model'
import { Location } from '../../models/location.model'
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  storyid: string;
  chapterid: string;
  story$ : Observable<Story | undefined> = new Observable<Story | undefined>();
  chapters$ : Observable<Chapter[]> = new Observable<Chapter[]>();

  constructor(private db: AngularFirestore, private route: ActivatedRoute, public auth: AuthService, private crudApi: ChapterService) {
    this.storyid=this.route.snapshot.params['storyid'];
     this.chapterid=this.route.snapshot.params['chapterid'];
    this.story$ = db.doc<Story| undefined>('stories/'+this.storyid).valueChanges();
    this.chapters$ = db.collection<Chapter>('stories/'+this.storyid+'/chapters').valueChanges();
  }

  ngOnInit(): void {
  }

   deleteChapter(chapter : any) {

          this.crudApi.DeleteChapter(chapter.id, this.storyid, this.chapterid)
      }

}
