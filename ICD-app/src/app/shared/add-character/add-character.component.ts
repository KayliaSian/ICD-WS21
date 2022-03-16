import { Component, OnInit, Input } from '@angular/core';
import { CharacterService } from '../character.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss']
})
export class AddCharacterComponent implements OnInit {


        name= '';
        id= '';
        nickname= '';
        age= '';
        birthdate= '';
        birthplace= '';
        mother= '';
        father= '';
        siblings= '';
        haircolour= '';
        eyecolour= '';
        height= '';
        weight= '';
        bodytype= '';
        traits= '';
        likes= '';
        dislikes= '';
        backstory= '';

  constructor(
    public crudApi: CharacterService,
    private router: Router
  ) {
   }

ngOnInit() {
    this.crudApi.GetCharactersList();
  }




  submitCharacterData() {
    this.crudApi.AddCharacter({name : this.name, id : this.id, nickname : this.nickname, age : this.age, birthdate : this.birthdate, birthplace : this.birthplace, mother : this.mother, father : this.father, siblings : this.siblings, haircolour : this.haircolour, eyecolour : this.eyecolour, height : this.height, weight : this.weight, bodytype : this.bodytype, traits : this.traits, likes : this.likes, dislikes: this.dislikes, backstory : this.backstory});
  this.router.navigate(['characterlist']);
  }
}
