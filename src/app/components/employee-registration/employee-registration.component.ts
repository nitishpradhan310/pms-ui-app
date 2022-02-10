import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { EmployeeModel } from '../employee-dashboard.model';
import { ApiService } from '../shared/api.service';

declare var window:any;

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  formModal : any;
  formValue !: FormGroup;
  employeeModelObj : EmployeeModel =new EmployeeModel();
  employeeData :any;
  showAdd! : boolean;
  showUpdate! : boolean;
  // submitted = false;

  constructor(private formbuilder:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    this.formModal= new window.bootstrap.Modal(
document.getElementById("exampleModal")
    );
    this.formValue = this.formbuilder.group({
      title : ['',Validators.required],
      firstname : ['',[Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(2)]],
      lastname : ['',[Validators.required,Validators.pattern('^[a-zA-Z]+$'),,Validators.minLength(2)]],
      email : ['',[Validators.required, Validators.email]],
      dob : ['',[Validators.required]],
      mobile: ['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),Validators.minLength(10)]],
      role: ['',Validators.required],
      salary: ['',Validators.required]
    });
    this.getAllEmployee();
  }

  openModal(){
    this.formModal.show();
  }

  cancel(){
    this.formModal.hide();
    this.formValue.reset();
  }

  postEmployeeDetails(){
    this.employeeModelObj.title = this.formValue.value.title;
    this.employeeModelObj.firstName = this.formValue.value.firstname;
    this.employeeModelObj.lastName = this.formValue.value.lastname;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.mobile = this.formValue.value.mobile;
    this.employeeModelObj.dob = this.formValue.value.dob;
    this.employeeModelObj.role = this.formValue.value.role;
   this.employeeModelObj.salary = this.formValue.value.salary;

    this.api.postEmployee(this.employeeModelObj)
    .subscribe(response=>{
      console.log(response);
      alert("Employee Added Successfully")
      let ref = document.getElementById('cancel1');
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
    },
    _err =>{
      alert("Something Went wrong");
    })
  }

getAllEmployee(){
  this.api.getEmployee()
  .subscribe(res=>{
   this.employeeData = res;
  })
}

deleteAnyEmployee(row : any){
  this.api.deleteEmployee(row.id)
  .subscribe(res=>{
    alert("Employee deleted")
    this.getAllEmployee();
  })
}

onEdit(row : any){
  this.showAdd = false;
  this.showUpdate = true;
  this.employeeModelObj.id=row.id;
  this.formValue.controls['title'].setValue(row.title);
  this.formValue.controls['firstname'].setValue(row.firstName);
  this.formValue.controls['lastname'].setValue(row.lastName);
  this.formValue.controls['email'].setValue(row.email);
  this.formValue.controls['mobile'].setValue(row.mobile);
  this.formValue.controls['dob'].setValue(row.dob);
  this.formValue.controls['role'].setValue(row.role);
  this.formValue.controls['salary'].setValue(row.salary);
}

updateEmployeeDetails(){
    this.employeeModelObj.title = this.formValue.value.title;
    this.employeeModelObj.firstName = this.formValue.value.firstname;
    this.employeeModelObj.lastName = this.formValue.value.lastname;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.mobile = this.formValue.value.mobile;
    this.employeeModelObj.dob = this.formValue.value.dob;
    this.employeeModelObj.role = this.formValue.value.role;
    this.employeeModelObj.salary = this.formValue.value.salary;
    this.api.updateEmployee(this.employeeModelObj,this.employeeModelObj.id)
    .subscribe(res=>{
      alert("Updated Successfully");
      let ref = document.getElementById('cancel1');
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
    })
}

clickAddEmployee(){
  this.formValue.reset();
  this.showAdd = true;
  this.showUpdate = false;
}

get f() { return this.formValue.controls; }

// onSubmit() {
//   this.submitted = true;

//   // stop here if form is invalid
//   if (this.formValue.invalid) {
//       return;
//   }
//   // display form values on success
//  // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formValue.value, null, 4));
// }

getToday(): string {
  return new Date().toISOString().split('T')[0]
}

}

