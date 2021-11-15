import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  public url:any="http://localhost:8080/api/employees"

  constructor(private http: HttpClient) {  }
  getData(){
    
     return this.http.get<any>(this.url)

  }
  postdata(skillupdateform:any){
    return this.http.post<any>(this.url,skillupdateform)
  }
  deleteEmployee(id:any):Observable<object>{
    return this.http.delete<any>(this.url+"/"+id)

  }
  getDatabyID(id:any){
    return this.http.get<any>(this.url+"/"+id)
  }
  updateEmployee(skillupdateform:any,id:any){
    return this.http.put<any>(this.url+"/"+id,skillupdateform)
  }
}
