import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NurseComponent } from './components/nurse/nurse.component';
import { ScheduleAppointmentComponent } from './components/schedule-appointment/schedule-appointment.component';
import { WorkScheduleComponent } from './components/work-schedule/work-schedule.component';


const nurseroutes: Routes = [
  {
    path:'nurse',
    component:NurseComponent,
    children:[
      {
        path:'nurse-dashboard',
        component:DashboardComponent
      },
      {
        path:'schedule-appoitment',
        component:ScheduleAppointmentComponent
      },
      {
        path:'work-schedule',
        component:WorkScheduleComponent
      }
    ]
  },
];

@NgModule({
    imports: [RouterModule.forChild(nurseroutes)],
    exports: [RouterModule]
  })
  export class NurseRoute{
      
  }