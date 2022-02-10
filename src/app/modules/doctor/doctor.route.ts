import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { WorkScheduleComponent } from './components/work-schedule/work-schedule.component';


const doctorroutes: Routes = [
  {
    path:'doctor',
    component:DoctorComponent,
    children:[
      {
        path:'doctor/dashboard',component:DashboardComponent},
       {
         path:'work-schedule',component:WorkScheduleComponent}
       
    ]
  },
];

@NgModule({
    imports: [RouterModule.forChild(doctorroutes)],
    exports: [RouterModule]
  })
  export class DoctorRoute{
      
  }