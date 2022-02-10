import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import { PatientRegistrationComponent } from './components/patient-registration/patient-registration.component';
import { PatientVisitProfileComponent } from './components/patient-visit-profile/patient-visit-profile.component';

const routes: Routes = [
  {
    path:" ",
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  },
  {
    path:'forgot-password',
    component:ForgotPasswordComponent
  },
  {
    path:'about-us',
    component:AboutUsComponent
  },
  {
    path:'contact-us',
    component:ContactUsComponent
  },
  {
    path:'inbox',
    component:InboxComponent
  },
  {
    path:'patient-profile',
    component:PatientProfileComponent
  },
  {
    path:'patient-registration',
    component:PatientRegistrationComponent
  },
  {
    path:'patient-visit',
    component:PatientVisitProfileComponent
  },
  {
    path:'admin',
    loadChildren:'./modules/admin.module'
  },
  {
    path:'doctor',
    loadChildren:'./modules/doctor.module'
  },
  {
    path:'nurse',
    loadChildren:'./modules/nurse.module'
  },
  {
    path:'patient',
    loadChildren:'./modules/patient.module'
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
