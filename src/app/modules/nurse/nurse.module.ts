import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkScheduleComponent } from './components/work-schedule/work-schedule.component';
import { ScheduleAppointmentComponent } from './components/schedule-appointment/schedule-appointment.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NurseComponent } from './components/nurse/nurse.component';



@NgModule({
  declarations: [
    WorkScheduleComponent,
    ScheduleAppointmentComponent,
    DashboardComponent,
    NurseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NurseModule { }
