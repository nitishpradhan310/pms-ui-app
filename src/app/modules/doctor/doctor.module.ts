import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkScheduleComponent } from './components/work-schedule/work-schedule.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DoctorComponent } from './components/doctor/doctor.component';



@NgModule({
  declarations: [
    WorkScheduleComponent,
    DashboardComponent,
    DoctorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DoctorModule { }
