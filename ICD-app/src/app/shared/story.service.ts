import { Injectable } from '@angular/core';
import { Story } from '../models/story.model'
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class StoryService {


storiesRef = this.db.collection("stories");
  storyRef = (id: string | null) => this.db.doc("stories/"+id);

  constructor(private db: AngularFirestore) { }

  // Create Story
      AddStory(story: Story) {
      const sid : string = story.id!;
        this.storiesRef.doc(sid).set({

          name:story.name,
          id:story.id,
          description:story.description,
        });
      }


      // Fetch Single Story Object
      GetStory(id: string | null) {
        return this.storyRef(id).valueChanges();
      }

      // Fetch Stories List
      GetStoriesList() {
        return this.storiesRef.valueChanges();
      }

      // Update Story Object
      UpdateStory(story: Story) {
        this.storyRef(story.id).update({
          name:story.name,
          description:story.description,
        });
      }
      // Delete Story Object
      DeleteStory(id: string | null) {
        return this.storyRef(id).delete();
      }

}
