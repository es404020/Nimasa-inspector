import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/component/home/home.component';
import { DashboardComponent } from 'src/app/component/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    children: [
      { path: '', component: DashboardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
