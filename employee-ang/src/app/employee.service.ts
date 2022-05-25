import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './models/employee.model';


const baseUrl = 'http://localhost:8081/api/employees';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAllEmployee(): Observable<Employee[]>{
    return this.http.get<Employee[]>(baseUrl);
  }

  getEmployeeById(id: any): Observable<Employee>{
      return this.http.get('${baseUrl}/${id}')
  }

  createEmployee(data: any): Observable<any>{
    return this.http.post(baseUrl, data);
  }

  updateEmployee(id: any, data: any): Observable<any>{
    return this.http.put('$baseUrl/${id}', data);
  }

  deleteAll(): Observable<any>{
    return this.http.delete(baseUrl);
  }

  searchByEmployeeName(name: any): Observable<Employee[]>{
    return this.http.get<Employee[]>('${baseUrl}?name=${name}');
  }

}
