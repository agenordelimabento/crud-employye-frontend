import { Employee } from './../employee.model';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employee: Employee = {
    nome: '',
    dataNasc: '',
    sexo: 'F',
    cargo: '',
    ativo: false,
    salario: 0
}

  constructor(private employeeService: EmployeeService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.employeeService.readById(id).subscribe(employee => {
        this.employee = employee;
      });
    }

  }

  createEmployee(): void {
    this.employeeService.create(this.employee).subscribe(() => {
      this.employeeService.showMessage('Colaborador cadastrado.')
      this.router.navigate(['/employees'])
    })

  }

  updateEmployee(): void {
    this.employeeService.update(this.employee).subscribe(() => {
      this.employeeService.showMessage('Colaborador atualizado com sucesso.')
      this.router.navigate(["/employees"]);
    })
  }

  createOrUpdateEmployee(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
     this.updateEmployee();
    } else {
      this.createEmployee();
    }
  }

  cancel(): void {
    this.router.navigate(['/employees'])
  }

}
