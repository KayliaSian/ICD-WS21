import { Component, OnInit, Input } from '@angular/core';
import { CharacterService } from '../character.service';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss']
})
export class AddCharacterComponent implements OnInit {

@Input('formGroup') characterForm: FormGroup = this.fb.group({
        name: [''],
        id: [''],
        nickname: [''],
        age: [''],
        birthdate: [''],
        birthplace: [''],
        mother: [''],
        father: [''],
        siblings: [''],
        haircolour: [''],
        eyecolour: [''],
        height: [''],
        weight: [''],
        bodytype: [''],
        traits: [''],
        likes: [''],
        dislikes: [''],
        backstory: [''],

      });
  constructor(
    public crudApi: CharacterService,
    public fb: FormBuilder,
  ) {
   }

ngOnInit() {
    this.crudApi.GetCharactersList();
  }


  get name() {
    return this.characterForm.get('name');
  }
  get id() {
    return this.characterForm.get('id');
  }
  get nickname() {
    return this.characterForm.get('nickname');
  }
  get age() {
    return this.characterForm.get('age');
  }
  get birthdate() {
    return this.characterForm.get('birthdate');
  }
  get birthplace() {
    return this.characterForm.get('birthplace');
  }
  get mother() {
    return this.characterForm.get('mother');
  }
  get father() {
    return this.characterForm.get('father');
  }
  get siblings() {
    return this.characterForm.get('siblings');
  }
  get haircolour() {
    return this.characterForm.get('haircolour');
  }
  get eyecolour() {
    return this.characterForm.get('eyecolour');
  }
  get height() {
    return this.characterForm.get('height');
  }
  get weight() {
    return this.characterForm.get('weight');
  }
  get bodytype() {
    return this.characterForm.get('bodytype');
  }
  get traits() {
    return this.characterForm.get('traits');
  }
  get likes() {
    return this.characterForm.get('weight');
  }
  get dislikes() {
    return this.characterForm.get('bodytype');
  }
  get backstory() {
    return this.characterForm.get('traits');
  }

  ResetForm() {
    this.characterForm.reset();
  }
  submitCharacterData() {
    this.crudApi.AddCharacter(this.characterForm.value);
    this.ResetForm();
  }
}
