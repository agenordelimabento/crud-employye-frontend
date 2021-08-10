import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
  }

  ngOnInit(): void {
  }

  navigateToEmployeeCreate(): void {
    this.router.navigate(['/employees/create'])
  }

}
