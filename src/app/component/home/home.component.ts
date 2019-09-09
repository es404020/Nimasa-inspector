import { Component, OnInit } from '@angular/core';
import {  ServiceService} from '../../core/service/service.service'
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { VesselsService } from 'src/app/core/service/vessels.service';
import swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  skipStepTwo: boolean = true;
  _open: boolean = false;
  _country;
  _vessels:FormGroup;
  _isLoading:boolean;

  toggleStepTwo() {
      this.skipStepTwo = !this.skipStepTwo;
  }

  open() {
      this._open = true;
     console.log(this._open);
  }
  constructor(private _service:ServiceService,private _fb: FormBuilder,private _vesselServeice:VesselsService) { }

  ngOnInit() {
    this._isLoading = false;
    this._country=this._service.getAllFlag();
    this._vessels = this._fb.group({
   NameOfVessel :['', [
        Validators.required
      ]],
    IMO:['', [
        Validators.required
      ]],
      DOB:['', [
        Validators.required
      ]],
      GT:['', [
        Validators.required
      ]],
      FLAG:['', [
        Validators.required
      ]],
      OfficalNo:['', [
        Validators.required
      ]],
      RegDate:['', [
        Validators.required
      ]],
      NigeriaOperator:['', [
        Validators.required
      ]],
      CargoMeasurent:['', [
        Validators.required
      ]],
       CargoType:['', [
        Validators.required
      ]],
     ContactNumber:['', [
        Validators.required
      ]],

    });

  }

  AddVessel(){
this._isLoading= true;
this._vesselServeice.addVessels(this._vessels.value).then((res)=>{
this._isLoading= false;
console.log(res);
swal.fire({
    position: 'center',
    type: 'success',
    title: 'Vessels Successfully added',
    showConfirmButton: false,
    timer: 9500
   })
   this._vessels.reset();

}
).catch((err:HttpErrorResponse)=>{
  this._isLoading= false;
   if (err.error instanceof Error) {
 console.log(err);
     swal.fire({
       position: 'center',
       type: 'error',
       title: err.error.message,
       showConfirmButton: false,
       timer: 9500
      })
  
 
   } else {
     swal.fire({
       position: 'center',
       type: 'error',
       title:  err.error.message?err.error.message:'Network Error',
       showConfirmButton: false,
       timer: 3500
      })
  
 
   }
   
  });

   
  }

}
