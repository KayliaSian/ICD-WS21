import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '../../models/location.model'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

locationid:string;
location$ : Observable<Location | undefined> = new Observable<Location | undefined>();

  constructor(private db: AngularFirestore, private route: ActivatedRoute, public auth: AuthService) {
    this.locationid =this.route.snapshot.params['id'];
    this.location$ = db.doc<Location| undefined>('locations/'+this.locationid).valueChanges();
    this.location$.subscribe(console.log);
  }

  ngOnInit(): void {
  }

}
