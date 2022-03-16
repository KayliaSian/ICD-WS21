import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.scss']
})
export class AddStoryComponent implements OnInit {

      name= '';
      id= '';
      description= '';

  constructor(public crudApi: StoryService, private router: Router,) { }

  ngOnInit(): void {
  this.crudApi.GetStoriesList();
  }

 submitStoryData() {
      this.crudApi.AddStory({name : this.name, id : this.id, description : this.description});
            this.router.navigate(['stories']);
    }

}
