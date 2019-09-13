import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private  _vesselInfo:BehaviorSubject<any> = new BehaviorSubject(null); 
  constructor() { }



  AddVesselInfo(info){
   
    this._vesselInfo.next(info);
      
  }

  getVesselInfo(){

      return  this._vesselInfo;
    
      
  }
}
