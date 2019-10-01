import { Component, OnInit,ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
import { from, forkJoin } from 'rxjs';
import { SharedService } from 'src/app/core/shared/shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firestore } from 'firebase';
import { VesselsService } from 'src/app/core/service/vessels.service';
import {map, switchMap,tap} from 'rxjs/operators';
import swal from 'sweetalert2';
import { AngularEditorConfig } from '@kolkov/angular-editor';
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
  date= firestore.Timestamp.now().toDate().toLocaleDateString();

  inspectionArray:any;
  emptylist:boolean;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',   
    defaultFontName: 'Arial',
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

 
  constructor(private location: Location,private _router:Router,private share:SharedService,private _fb:FormBuilder,private _service:VesselsService) { 
    
  }

  ngOnInit() {

    

    let me  = new Date().toLocaleDateString();
    this.inspectionArray=[]
    this.emptylist = false;
   
 //   console.log(this.date);

  
    this.comply=['Complainant','Non Complainant']
    // this.share.getVesselInfo().
    // pipe(
    // ).
    // subscribe((res)=>{
      

    //   if(res==null){
    //     this._vessel = null
    //     this._router.navigate(['home/vessels'])
    //   }else{
    //     this._vessel = res;
    //     this._flagName =res.FLAG.split(",")[0] ;
    //     this._flagImage=res.FLAG.split(",")[1];
    //     this.officalNo =  this._vessel.OfficalNo;
        
       
    //   }
     
    // })
this.share.getVesselInfo().pipe(
  tap((res)=>{
      if(res==null){
        this._vessel = null
        this._router.navigate(['home/vessels'])
      }else{
        this._vessel = res;
        this._flagName =res.FLAG.split(",")[0] ;
        this._flagImage=res.FLAG.split(",")[1];
        this.officalNo =  this._vessel.OfficalNo;
  }
}),
  switchMap((res)=>this._service.getVesselById(res.OfficalNo)),
  tap((output)=>console.log(output))
).subscribe((ress:any)=>{
 
if(ress.length==0){
  this.emptylist = true;
}
else{
  this.inspectionArray = ress;
  console.log(ress);
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
  dates:[this.date,[Validators.required]]









})

  }


  inspectVessel(){
    this._open = !this._open;
    console.log('hello');
    console.log(this.vesselInsepction.value);

    this._service.inspectVeseel(this.vesselInsepction.value).then((res)=>{
      swal.fire({
        position: 'center',
        type: 'success',
        title: 'New vessels added',
        showConfirmButton: false,
        timer: 4500
       })
    });
  }


  details(item){
    console.log(item);

    sessionStorage.setItem('vessel', JSON.stringify(item));

    this._router.navigate(['home/inspect'])

  }

}
