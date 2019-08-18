import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vessel',
  templateUrl: './vessel.component.html',
  styleUrls: ['./vessel.component.css']
})
export class VesselComponent implements OnInit {
  title:String= 'Vessels';
  constructor() { }

  ngOnInit() {
  }

}
