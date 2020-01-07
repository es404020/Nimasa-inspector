import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
//import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-angular';
import { SharedService } from 'src/app/core/shared/shared.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-button-renderer',
  template: `
 
    <button class="btn btn-success btn-block" (click)="onClicks($event)" >View More</button>
    `
})

export class ButtonRendererComponent implements ICellRendererAngularComp {

    constructor(private _shared:SharedService,private router:Router){}

  params;
  label: string;

  agInit(params): void {
    this.params = params;
    this.label = this.params.label || null;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick($event) {
    if (this.params.onClick instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data
        // ...somethin
      }
      this.params.onClick(params);

    }
  }
  onClicks($event) {
      

      this._shared.AddVesselInfo(this.params.data);
      this.router.navigate(['home/info'])
   
  }
}