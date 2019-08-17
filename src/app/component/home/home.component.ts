import { Component, OnInit } from '@angular/core';
import { ViewChild} from "@angular/core";
import {ClrWizard} from "@clr/angular";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //@ViewChild("wizard") wizard: ClrWizard;
  skipStepTwo: boolean = true;
  _open: boolean = false;

  toggleStepTwo() {
      this.skipStepTwo = !this.skipStepTwo;
  }

  open() {
      this._open = true;
     console.log(this._open);
  }
  constructor() { }

  ngOnInit() {
  }

}
