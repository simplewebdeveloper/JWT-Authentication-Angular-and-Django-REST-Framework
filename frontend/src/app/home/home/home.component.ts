// home.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../auth/auth.service";
import { EmployeeService } from "../../employee/employee.service";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private employees: any

  constructor(private authService: AuthService, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.employeeService.fetchEmployees().subscribe(
      (res) => {
        console.log(res);
        this.employees = res
      }
    ),
    (err: HttpErrorResponse) => {
      console.log(err.error)
    }
  }

  logout() {
    this.authService.logout();
  }

}
