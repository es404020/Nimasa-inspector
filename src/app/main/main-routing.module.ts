import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/component/home/home.component';
import { DashboardComponent } from 'src/app/component/dashboard/dashboard.component';
import { VesselComponent } from 'src/app/component/vessel/vessel.component';
import { InfoComponent } from '../component/info/info.component';
import { HistoryComponent } from '../component/history/history.component';
import { InspectComponent } from '../component/inspect/inspect.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'vessels', component:VesselComponent},

      {path:'info/:id',component:InfoComponent},
      {path:'history/:id',component:HistoryComponent},
      { path: 'inspect', component: InspectComponent },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
