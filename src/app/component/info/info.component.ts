import { Component, OnInit,ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent  {
  _open: boolean = false;

 
  constructor(private location: Location,private _router:Router) { 
    
  }

  ngOnInit() {
  
  }

  openInspect(){
    this._open = !this._open;
  }

}
