import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.scss']
})
export class EditCharacterComponent implements OnInit {

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


  constructor( private crudApi: CharacterService,
                  private location: Location,
                  private actRoute: ActivatedRoute,
                  private router: Router,) { }

ngOnInit() {
 const id = this.actRoute.snapshot.paramMap.get('id')!;
    this.crudApi
      .GetCharacter(id)
  }

  updateForm() {
    this.crudApi.UpdateCharacter({name : this.name, id : this.actRoute.snapshot.paramMap.get('id')!, nickname : this.nickname, age : this.age, birthdate : this.birthdate, birthplace : this.birthplace, mother : this.mother, father : this.father, siblings : this.siblings, haircolour : this.haircolour, eyecolour : this.eyecolour, height : this.height, weight : this.weight, bodytype : this.bodytype, traits : this.traits, likes : this.likes, dislikes: this.dislikes, backstory : this.backstory});
    this.router.navigate(['characterlist']);
  }

}
