import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/component/home/home.component';
import { DashboardComponent } from 'src/app/component/dashboard/dashboard.component';
import { VesselComponent } from 'src/app/component/vessel/vessel.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'vessels', component:VesselComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
