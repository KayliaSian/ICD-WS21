import { Injectable } from '@angular/core';
import { Location } from '../models/location.model'
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class LocationService {

locationsRef = this.db.collection("locations");
  locationRef = (id: string) => this.db.doc("locations/"+id);

  constructor(private db: AngularFirestore) { }

  // Create Location
    AddLocation(location: Location) {
    const lid : string = location.id!;
        console.log(this.locationsRef.doc(lid));
      this.locationsRef.doc(lid).set({

        name:location.name,
        id:location.id,
        type:location.type,
        description:location.description,
      });
    }


    // Fetch Single Location Object
    GetLocation(id : string) {
      return this.locationRef(id).valueChanges();
    }

    // Fetch Locations List
    GetLocationsList() {
      return this.locationsRef.valueChanges();
    }

    // Update Location Object
    UpdateLocation(location: Location) {
      this.locationRef(location.id).update({
        name:location.name,
        type:location.type,
        description:location.description,
      });
    }
    // Delete Location Object
    DeleteLocation(id: string) {
      return this.locationRef(id).delete();
    }


}
