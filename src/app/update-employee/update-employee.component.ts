import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
public id:number=0;
public emp:any={}
  
  constructor(private dataservice:EmployeeserviceService,private rout:ActivatedRoute) { }
  addUserForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    emailId: new FormControl ('',[Validators.required,Validators.email])
  });
  onSubmit() { 
    this.dataservice.updateEmployee(this.addUserForm.value,this.id).subscribe(data=>{alert("update succesfully completed")})
  }

  ngOnInit(): void {
    this.id = parseInt(this.rout.snapshot.paramMap.get('id')|| '{}');
    this.dataservice.getDatabyID(this.id).subscribe(data=>{
      this.emp=data;
      console.log(data)})
  }

}
