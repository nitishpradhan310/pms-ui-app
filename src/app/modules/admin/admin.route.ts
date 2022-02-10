import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AppointmentHistoryComponent } from './components/appointment-history/appointment-history.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeManagementComponent } from './components/employee-management/employee-management.component';
import { PatientManagementComponent } from './components/patient-management/patient-management.component';
import { UserManagementComponent } from './components/user-management/user-management.component';


const adminroutes: Routes = [
  {
    path:'admin',
    component : AdminComponent,
    children:[
      {
        path:'appointment-history', component: AppointmentHistoryComponent},
        {
          path:'admin/dashboard',component:DashboardComponent},
          {
            path:'employee-management', component:EmployeeManagementComponent},
            {
              path:'patient-management', component:PatientManagementComponent},
              {
                path:'user-management' , component:UserManagementComponent}
              ]
            }
];

@NgModule({
    imports: [RouterModule.forChild(adminroutes)],
    exports: [RouterModule]
  })
  export class AdminRoute{
      
  }

