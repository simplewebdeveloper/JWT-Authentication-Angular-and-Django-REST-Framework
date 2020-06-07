// employee-salary-list.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../auth/auth.service";
import { EmployeeService } from "../employee.service";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-employee-salary-list',
  templateUrl: './employee-salary-list.component.html',
  styleUrls: ['./employee-salary-list.component.css']
})
export class EmployeeSalaryListComponent implements OnInit {

  private employeesAndSalaries: any;

  constructor(private authService: AuthService, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.fetchEmployeesAndSalaries();
  }

  fetchEmployeesAndSalaries() {
    this.employeeService.fetchEmployeesAndSalaries().subscribe(
      (res) => {
        console.log(res);
        this.employeesAndSalaries = res;
      }
    ),
    (err: HttpErrorResponse) => {
      console.log(err.error);
    }
  }

  logout() {
    this.authService.logout();
  }

}
