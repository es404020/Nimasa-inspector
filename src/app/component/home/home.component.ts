import { Component, OnInit } from '@angular/core';
import {  ServiceService} from '../../core/service/service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  skipStepTwo: boolean = true;
  _open: boolean = false;
  _country;

  toggleStepTwo() {
      this.skipStepTwo = !this.skipStepTwo;
  }

  open() {
      this._open = true;
     console.log(this._open);
  }
  constructor(private _service:ServiceService) { }

  ngOnInit() {
    this._country=this._service.getAllFlag();
  }

}
