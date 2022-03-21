import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../chapter.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-chapter',
  templateUrl: './add-chapter.component.html',
  styleUrls: ['./add-chapter.component.scss']
})
export class AddChapterComponent implements OnInit {
      storyid;
      name= '';
      id= '';
      content= '';

  constructor(public crudApi: ChapterService, public auth: AuthService, private router: Router, private route: ActivatedRoute) {
      this.storyid =this.route.snapshot.params["storyid"];
  }

  ngOnInit(): void {
    this.crudApi.GetChaptersList();
  }

 submitChapterData() {
      this.crudApi.AddChapter({name : this.name, id : this.id, content : this.content}, this.storyid);
            this.router.navigate(['stories']);
    }

}
