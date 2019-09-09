import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class VesselsService {
  vessels: AngularFirestoreCollection<any>;
  constructor(private afs: AngularFirestore) { 
 //   this.vessels= this.afs.collection<any>('vessels');
  }

addVessels(values:any){
console.log(values.OfficalNo);
 return  this.afs.collection('vessels').doc(values.OfficalNo.toString()).set(values);

}

}
