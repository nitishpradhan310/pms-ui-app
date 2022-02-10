import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppoitmentComponent } from './components/appoitment/appoitment.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ScheduleAppointmentComponent } from './components/schedule-appointment/schedule-appointment.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PatientComponent } from './components/patient/patient.component';



@NgModule({
  declarations: [
    AppoitmentComponent,
    ProfileComponent,
    ScheduleAppointmentComponent,
    DashboardComponent,
    PatientComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PatientModule { }
