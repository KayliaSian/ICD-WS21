import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../models/character.model'

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.scss']
})
export class EditCharacterComponent implements OnInit {
characterDoc: AngularFirestoreDocument<Character>;
character$ : Observable<Character | undefined> = new Observable<Character | undefined>();

newName : string = '';

  constructor(private db: AngularFirestore, private route: ActivatedRoute) {
    const id =this.route.snapshot.params['id'];
    this.characterDoc = this.db.doc('characters/'+id);
    this.character$ = db.doc<Character| undefined>('characters/'+id).valueChanges();
    this.character$.subscribe(console.log);
  }

  ngOnInit(): void {
  }

  updateCharacter() {
    this.characterDoc.update({content: this.newName})
  }

}
