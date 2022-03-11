import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '../../models/location.model'

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {


location$ : Observable<Location | undefined> = new Observable<Location | undefined>();

  constructor(private db: AngularFirestore, private route: ActivatedRoute) {
    const id =this.route.snapshot.params['id'];
    this.location$ = db.doc<Location| undefined>('location/'+id).valueChanges();
    this.location$.subscribe(console.log);
  }

  ngOnInit(): void {
  }

}
