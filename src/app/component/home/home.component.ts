import { Component, OnInit } from '@angular/core';
import {  ServiceService} from '../../core/service/service.service'
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
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
  constructor(private _service:ServiceService,private _fb: FormBuilder) { }

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
    console.log(this._vessels.value);

    this._vessels.reset();
  }

}
