import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeserviceService } from '../employeeservice.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public  employees:any={};
  constructor(private dataservice:EmployeeserviceService,private router:Router) { }
  
  ngOnInit(): void {
    this.getdata();
  }
  getdata()
    {
    
      this.dataservice.getData().subscribe(data=>{
        this.employees=data;
        
        
      })
  }
  deletedata(id:any){
     
    
    this.dataservice.deleteEmployee(id).subscribe(data =>{
      this.getdata();
      
    })
  }
 updateEmployee(id:any){
    this.router.navigate(['update-employee',id]);
 }
}
