import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ControlContainer } from '@angular/forms';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  

  constructor(private dataservice:EmployeeserviceService) {}
  addUserForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    emailId: new FormControl ('',[Validators.required,Validators.email])
  });
  onSubmit() { console.log(this.addUserForm.value)
      this.dataservice.postdata(this.addUserForm.value).subscribe(data=>{alert("succesfully Registered new employee data")},error=>{alert("failed")})
  }
  ngOnInit(): void {
  }

}
