import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = {
    name: '',
    email: '',
    phone: '',
    address: '',
    status: ''
  }

  submitted = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  saveEmployee(): void{
    const data = {
        name: this.employee.name,
        email: this.employee.email,
        phone: this.employee.phone,
        address: this.employee.address,
        status: this.employee.status
    };
    this.employeeService.createEmployee(data).subscribe({
      next: (res) =>{
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    })
  }

  newEmployee(): void{
    this.submitted = false;
    this.employee = {
      name: '',
      email: '',
      phone: '',
      address: '',
      status: ''
    }
  }

}
