import { EmployeeDeleteComponent } from './components/employee/employee-delete/employee-delete.component';
import { EmployeeUpdateComponent } from './components/employee/employee-update/employee-update.component';
import { EmployeeCreateComponent } from './components/employee/employee-create/employee-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { EmployeeCrudComponent } from './views/employee-crud/employee-crud.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "employees",
  component: EmployeeCrudComponent
}, {
  path: "employees/create",
  component: EmployeeCreateComponent
},
{
  path: "employees/update/:id",
  component: EmployeeCreateComponent
},
{
  path: "employees/delete/:id",
  component: EmployeeDeleteComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
