import { EmployeeService } from './../employee.service';
import { Employee } from './../employee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-read',
  templateUrl: './employee-read.component.html',
  styleUrls: ['./employee-read.component.css']
})
export class EmployeeReadComponent implements OnInit {

  employees: Employee[]
  displayedColumns = ['id', 'nome', 'dataNasc', 'sexo', 'cargo', 'ativo', 'salario', 'action']

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.read().subscribe(employees => {
      this.employees = employees
    })
    console.log(this.employees)
  }

}
