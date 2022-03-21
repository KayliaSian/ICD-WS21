import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Location } from '../models/location.model'
import { LocationService } from '../shared/location.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-locationlist',
  templateUrl: './locationlist.component.html',
  styleUrls: ['./locationlist.component.scss']
})
export class LocationlistComponent implements OnInit {

locations$ : Observable<Location[]> = new Observable<Location[]>();

  constructor(private db: AngularFirestore, private crudApi: LocationService, public auth: AuthService) {
      this.locations$ = db.collection<Location>('locations').valueChanges({ idField: 'id' });
      this.locations$.subscribe(console.log);
  }

  ngOnInit(): void {
  }

   deleteLocation(location : any) {

          this.crudApi.DeleteLocation(location.id)
      }

}
