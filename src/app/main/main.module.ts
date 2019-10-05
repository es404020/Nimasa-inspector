import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from 'src/app/component/dashboard/dashboard.component';
import { HomeComponent } from 'src/app/component/home/home.component';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { VesselComponent } from 'src/app/component/vessel/vessel.component';
import { InfoComponent } from '../component/info/info.component';
import { HistoryComponent } from '../component/history/history.component';
import { InspectComponent } from '../component/inspect/inspect.component';
import { ServiceService} from '../core/service/service.service';
import { ButtonRendererComponent } from '../component/vessel/button-renderer.component';
import { AgGridModule } from 'ag-grid-angular';
@NgModule({
  declarations: [DashboardComponent,HomeComponent,VesselComponent,InfoComponent,HistoryComponent,InspectComponent,ButtonRendererComponent ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    AgGridModule.withComponents([ButtonRendererComponent]),
  ],
  providers:[ ServiceService]
})
export class MainModule { }
