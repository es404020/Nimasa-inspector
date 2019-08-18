import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from 'src/app/component/dashboard/dashboard.component';
import { HomeComponent } from 'src/app/component/home/home.component';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { VesselComponent } from 'src/app/component/vessel/vessel.component';

@NgModule({
  declarations: [DashboardComponent,HomeComponent,VesselComponent ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
