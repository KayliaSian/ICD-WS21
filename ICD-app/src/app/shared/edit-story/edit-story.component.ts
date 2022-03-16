import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.scss']
})
export class EditStoryComponent implements OnInit {

      name= '';
      id= '';
      description= '';
  constructor(private crudApi: StoryService,
                private location: Location,
                private actRoute: ActivatedRoute,
                private router: Router,) { }

  ngOnInit(): void {
    const id = this.actRoute.snapshot.paramMap.get('id')!;
        this.crudApi
          .GetStory(id)
  }

     updateForm() {
        this.crudApi.UpdateStory({name : this.name, id : this.actRoute.snapshot.paramMap.get('id')!, description : this.description});
        this.router.navigate(['stories']);
      }

}
