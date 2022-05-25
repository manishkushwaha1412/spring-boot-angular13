import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees?: Employee[];
  currentEmployee: Employee = {};
  currentIndex = -1;
  name = '';
  constructor(private employeeService: EmployeeService) { }
  ngOnInit(): void {
    this.retrieveEmployees();
  }

  retrieveEmployees(): void{
    this.employeeService.getAllEmployee().subscribe({
      next: (data) =>{
        this.employees = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void{
      this.retrieveEmployees();
      this.currentEmployee = {};
      this.currentIndex = -1;
  }

  setActiveEmployee(employee: Employee, index: number): void{
    this.currentEmployee = employee;
    this.currentIndex = index;
  }

  removeAllEmployees(): void{
    this.employeeService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchName(): void{
    this.currentEmployee = {};
    this.currentIndex = -1;
    this.employeeService.searchByEmployeeName(this.name).subscribe({
      next: (data) =>{
        this.employees = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    })
  }


}
