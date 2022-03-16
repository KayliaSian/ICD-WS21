import { Injectable } from '@angular/core';
import { Story } from '../models/story.model';
import { Chapter } from '../models/chapter.model';
import {ActivatedRoute, Params} from "@angular/router";
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

chaptersRef ;
  chapterRef;
    storyRef;
    storiesRef;

  constructor(private db: AngularFirestore, private route: ActivatedRoute) {
    const storyid =this.route.snapshot.params["storyid"];
    const chapterid =this.route.snapshot.params['chapterid'];
       console.log(storyid);

       this.chaptersRef = this.db.collection("stories").doc(storyid).collection("chapters");
         this.chapterRef = (id: string) => this.db.doc('stories/'+storyid+'/chapters/'+chapterid);
                this.storiesRef = this.db.collection('stories/');
 this.storyRef = (id: string) => this.db.doc('stories/'+storyid);

   }




  // Create Chapter
    AddChapter(chapter: Chapter, storyid: string) {
    const cid : string = chapter.id!;
      this.db.collection("stories").doc(storyid).collection("chapters").doc(cid).set({

        name:chapter.name,
        id:chapter.id,
        content:chapter.content,
      });
    }


    // Fetch Single Chapter Object
    GetChapter(id : string) {
      return this.chapterRef(id).valueChanges();
    }

    // Fetch Chapters List
    GetChaptersList() {
      return this.chaptersRef.valueChanges();
    }

    // Update Chapter Object
    UpdateChapter(chapter: Chapter, storyid: string) {
    console.log(storyid);
  const cid : string = chapter.id!;
      this.db.collection("stories").doc(storyid).collection("chapters").doc(cid).update({
        name:chapter.name,
        content:chapter.content,
      });
    }
    // Delete Chapter Object
    DeleteChapter(id: string, storyid: string, chapterid: string) {
      this.db.collection("stories").doc(storyid).collection("chapters").doc(id).delete();
    }


}
