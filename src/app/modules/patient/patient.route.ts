import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppoitmentComponent } from './components/appoitment/appoitment.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PatientComponent } from './components/patient/patient.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ScheduleAppointmentComponent } from './components/schedule-appointment/schedule-appointment.component';
import { PatientModule } from './patient.module';


const patientroutes: Routes = [
  {
    path:'patient',
    component:PatientComponent,
    children:[
      {
        path:'appointment',
        component:AppoitmentComponent
      },
      {
        path:'patient/dashboard',
        component:DashboardComponent
      },
      {
        path:'patient/profile',
        component:ProfileComponent
      },
      {
        path:'schedule-appoitment',
        component:ScheduleAppointmentComponent
      }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(patientroutes)],
    exports: [RouterModule]
  })
  export class PatientRoute{
      
  }