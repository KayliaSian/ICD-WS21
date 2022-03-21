import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../models/character.model'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

characterid : string;
character$ : Observable<Character | undefined> = new Observable<Character | undefined>();

  constructor(private db: AngularFirestore, private route: ActivatedRoute, public auth: AuthService) {
    this.characterid =this.route.snapshot.params['id'];
    this.character$ = db.doc<Character| undefined>('characters/'+this.characterid).valueChanges();
    this.character$.subscribe(console.log);
  }

  ngOnInit(): void {
  }

}
