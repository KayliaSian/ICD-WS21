import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../chapter.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-chapter',
  templateUrl: './edit-chapter.component.html',
  styleUrls: ['./edit-chapter.component.scss']
})
export class EditChapterComponent implements OnInit {

      chapterid;
      storyid;

      name= '';
      id= '';
      content= '';

  constructor(private crudApi: ChapterService,
              private location: Location,
              private actRoute: ActivatedRoute,
              private router: Router,) {

                 this.chapterid = this.actRoute.snapshot.paramMap.get('chapterid')!;
                   this.storyid = this.actRoute.snapshot.paramMap.get('storyid')!;
                              }

  ngOnInit(): void {
      this.crudApi
        .GetChapter(this.chapterid)
  }

     updateForm() {
        this.crudApi.UpdateChapter({name : this.name, id : this.chapterid, content : this.content}, this.storyid);
        this.router.navigate(['story/'+ this.storyid]);
      }

}
