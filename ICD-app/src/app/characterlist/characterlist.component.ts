import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model'
import { CharacterService } from '../shared/character.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-characterlist',
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.scss']
})
export class CharacterlistComponent implements OnInit {

characters$ : Observable<Character[]> = new Observable<Character[]>();

  constructor(private db: AngularFirestore, private crudApi: CharacterService, public auth: AuthService) {
    this.characters$ = db.collection<Character>('characters').valueChanges({ idField: 'id' });
    this.characters$.subscribe(console.log);
  }

  ngOnInit(): void {
  }

 deleteCharacter(character : any) {

        this.crudApi.DeleteCharacter(character.id)
    }

}
