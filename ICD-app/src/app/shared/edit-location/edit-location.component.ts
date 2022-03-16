import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.scss']
})
export class EditLocationComponent implements OnInit {

      name= '';
      id= '';
      type= '';
      description= '';

  constructor(private crudApi: LocationService,
                private location: Location,
                private actRoute: ActivatedRoute,
                private router: Router,) { }

  ngOnInit(): void {

  const id = this.actRoute.snapshot.paramMap.get('id')!;
      this.crudApi
        .GetLocation(id)
  }

   updateForm() {
      this.crudApi.UpdateLocation({name : this.name, id : this.actRoute.snapshot.paramMap.get('id')!, type : this.type, description : this.description});
      this.router.navigate(['locationlist']);
    }

}
