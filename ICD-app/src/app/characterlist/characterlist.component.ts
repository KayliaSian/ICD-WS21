import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model'

@Component({
  selector: 'app-characterlist',
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.scss']
})
export class CharacterlistComponent implements OnInit {

characters$ : Observable<Character[]> = new Observable<Character[]>();

  constructor(private db: AngularFirestore) {
    this.characters$ = db.collection<Character>('characters').valueChanges({ idField: 'id' });
    this.characters$.subscribe(console.log);
  }

  ngOnInit(): void {
  }

}
