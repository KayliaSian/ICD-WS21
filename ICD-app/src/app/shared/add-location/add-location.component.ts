import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent implements OnInit {

      name= '';
      id= '';
      type= '';
      description= '';

  constructor(public crudApi: LocationService, private router: Router,) { }

  ngOnInit(): void {
  this.crudApi.GetLocationsList();
  }

    submitLocationData() {
      this.crudApi.AddLocation({name : this.name, id : this.id, type : this.type, description : this.description});
            this.router.navigate(['locationlist']);
    }

}
