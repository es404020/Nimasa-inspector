import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader'

@NgModule({
 
  imports: [
   
    ClarityModule  ,
    NgxSkeletonLoaderModule,
  ],
  exports:[
    ClarityModule,
    NgxSkeletonLoaderModule,
  ]
})
export class SharedModule { }
