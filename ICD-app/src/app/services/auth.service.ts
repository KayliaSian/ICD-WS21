import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/compat/Auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Auth } from '@firebase/auth';
import * as firebase from 'firebase/app';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User | null | undefined>;

  constructor(private afAuth:AngularFireAuth, private db: AngularFirestore, private router: Router) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if(user){
          return this.db.doc<User>(`users/${user.uid}`).valueChanges();
        }else{
          return of(null);
        }
      })
    );
  }

  async signin(email: string, password: string){
    const credential = this.afAuth.signInWithEmailAndPassword(email, password);
    return this.updateUserData({email});
  }

  async signOut() {
    await this.afAuth.signOut();
    return this.router.navigate(['/']);
  }

  private updateUserData(user: {email:string}) {
  const userRef: AngularFirestoreDocument<{email: string}> = this.db.doc(`users/${user.email}`);

  const data = {
    email: user.email
  };

  return userRef.set(data, {merge: true});

  }


}
