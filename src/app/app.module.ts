import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { EmployeeProfileComponent } from './components/employee-profile/employee-profile.component';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import { PatientRegistrationComponent } from './components/patient-registration/patient-registration.component';

import { PatientVisitProfileComponent } from './components/patient-visit-profile/patient-visit-profile.component';
import { EmployeeRegistrationComponent } from './components/employee-registration/employee-registration.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AdminComponent } from './modules/admin/components/admin/admin.component';
import { PatientManagementComponent } from './modules/admin/components/patient-management/patient-management.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DatePipe } from './pipes/date.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    ForgotPasswordComponent,
    EmployeeProfileComponent,
    PatientProfileComponent,
    PatientRegistrationComponent,
    PatientVisitProfileComponent,
    EmployeeRegistrationComponent,
    InboxComponent,
    AboutUsComponent,
    ContactUsComponent,
    AdminComponent,
    PatientManagementComponent,
    NotFoundComponent,
    DatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
