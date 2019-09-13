import { Component, OnInit,ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
import { from } from 'rxjs';
import { SharedService } from 'src/app/core/shared/shared.service';



@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent  {
  _open: boolean = false;
  _vessel:any;
  _flagImage:any;
  _flagName:any;

 
  constructor(private location: Location,private _router:Router,private share:SharedService) { 
    
  }

  ngOnInit() {
    this.share.getVesselInfo().
    subscribe((res)=>{
      console.log(res);
      if(res===null){
        this._vessel = null
        this._router.navigate(['home/vessels'])
      }else{
        this._vessel = res;
        this._flagName =res.FLAG.split(",")[0] ;
        this._flagImage=res.FLAG.split(",")[1];
      }
     
    })
  
  }

  openInspect(){
    this._open = !this._open;
  }

}
