import { Employee } from './../employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  employee: Employee

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.employeeService.readById(id).subscribe(employee => {
        this.employee = employee;
      });
    }

  }

  updateEmployee(): void {
    this.employeeService.update(this.employee).subscribe(() => {
      this.employeeService.showMessage('Colaborador atualizado com sucesso.')
      this.router.navigate(["/employees"]);
    })
  }

  cancel(): void {
    this.router.navigate(['/employees'])
  }
}
