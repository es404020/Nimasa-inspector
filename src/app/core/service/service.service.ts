import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {
_flagUrl:string ='https://restcountries.eu/rest/v2/all';
  constructor(private _http:HttpClient) { 
}

getAllFlag(){
return this._http.get(this._flagUrl);
}

}
