import { Injectable } from '@angular/core';
import { Character } from '../models/character.model'
import { Story } from '../models/story.model'
import { Location } from '../models/location.model'
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class CharacterService {

  charactersRef = this.db.collection("characters");
  characterRef = (id: string) => this.db.doc("characters/${id}");

  constructor(private db: AngularFirestore) {}


  // Create Character
  AddCharacter(character: Character) {
    this.charactersRef.add({

      name:character.name,
      id:character.id,
      nickname:character.nickname,
      age:character.age,
      birthdate:character.birthdate,
      birthplace:character.birthplace,

      mother:character.mother,
      father:character.father,
      siblings:character.siblings,

      haircolour:character.haircolour,
      eyecolour:character.eyecolour,
      height:character.height,
      weight:character.weight,
      bodytype:character.bodytype,

      traits:character.traits,

      likes:character.likes,
      dislikes:character.dislikes,

      backstory:character.backstory,
    });
  }


  // Fetch Single Character Object
  GetCharacter(id: string) {
    return this.characterRef(id).valueChanges();
  }

  // Fetch Characters List
  GetCharactersList() {
    return this.charactersRef.valueChanges();
  }

  // Update Character Object
  UpdateCharacter(character: Character) {
    this.characterRef(character.id).update({
      name:character.name,
      id:character.id,
      nickname:character.nickname,
      age:character.age,
      birthdate:character.birthdate,
      birthplace:character.birthplace,

      mother:character.mother,
      father:character.father,
      siblings:character.siblings,

      haircolour:character.haircolour,
      eyecolour:character.eyecolour,
      height:character.height,
      weight:character.weight,
      bodytype:character.bodytype,

      traits:character.traits,

      likes:character.likes,
      dislikes:character.dislikes,

      backstory:character.backstory,
    });
  }
  // Delete Character Object
  DeleteCharacter(id: string) {
    return this.characterRef(id).delete();
  }
}

