import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
//import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-angular';

@Component({
  selector: 'app-button-renderer',
  template: `
    <button type="btn btn-primary btn-block" (click)="onClicks($event)" style="background-color:green;color:white;border-radius:5px;margin:2px">{{label}}</button>
    <button type="btn btn-primary btn-block" (click)="onClick($event)" style="background-color:red;color:white;border-radius:5px;margin:2px">Invoice</button>
    
    `
})

export class ButtonRendererComponent implements ICellRendererAngularComp {

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
    console.log($event);
  }
}