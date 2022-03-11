import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../models/character.model'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

character$ : Observable<Character | undefined> = new Observable<Character | undefined>();

  constructor(private db: AngularFirestore, private route: ActivatedRoute) {
    const id =this.route.snapshot.params['id'];
    this.character$ = db.doc<Character| undefined>('characters/'+id).valueChanges();
    this.character$.subscribe(console.log);
  }

  ngOnInit(): void {
  }

}
