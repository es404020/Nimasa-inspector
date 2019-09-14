import { Component, OnInit,ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
import { from } from 'rxjs';
import { SharedService } from 'src/app/core/shared/shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



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
  vesselInsepction:FormGroup;
  comply:any;
  officalNo:any;

 
  constructor(private location: Location,private _router:Router,private share:SharedService,private _fb:FormBuilder) { 
    
  }

  ngOnInit() {
    this.comply=['Complainant','Non Complainant']
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
        this.officalNo = res.OfficialNo;
        console.log(res);
      }
     
    })
  
  }

  openInspect(){
    this._open = !this._open;
this.vesselInsepction= this._fb.group({
  ShippingAgent:['',[Validators.required]],
  ShippingAgentAddress:['',[Validators.required]],
  ShippingAgentNo:['',[Validators.required]],
  GT:['',[Validators.required]],
  CargoType:['',[Validators.required]],
  CargoMeasurement:['',[Validators.required]],
  RegistrationDate:['',[Validators.required]],
  NumberNigerians:['',[Validators.required]],
  Compliancelevel:['',[Validators.required]],
  NumberForeign:['',[Validators.required]],
  Remark:['',[Validators.required]],
  OfficialNo:[this.officalNo,[Validators.required]],









})

  }

}
