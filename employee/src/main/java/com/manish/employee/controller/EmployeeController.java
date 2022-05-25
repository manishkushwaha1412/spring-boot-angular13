package com.manish.employee.controller;

import com.manish.employee.model.Employee;
import com.manish.employee.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/employees")

public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    // Get Employee Service
    @GetMapping("/{employeeId}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable("employeeId") Long employeeId) {
        Employee employee = employeeService.getEmployeeById(employeeId);
        return new ResponseEntity<Employee>(employee, HttpStatus.OK);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public ResponseEntity<List<Employee>> getAllEmployee() {
        List<Employee> employees = employeeService.getAllEmployees();
        return new ResponseEntity<List<Employee>>(employees, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee){
        Employee employeeResponse = employeeService.createEmployee(employee);
        return new ResponseEntity<Employee>(employeeResponse, HttpStatus.CREATED);
    }

}
