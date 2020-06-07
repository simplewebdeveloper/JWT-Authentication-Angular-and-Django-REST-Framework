// employee.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://127.0.0.1:8000'
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private http: HttpClient) { }

  fetchEmployees() {
    return this.http.get(this.baseUrl + '/employee/fetch_employees', this.httpOptions);
  }

  fetchEmployeesAndSalaries() {
    return this.http.get(this.baseUrl + '/employee/fetch_employees_and_salaries', this.httpOptions);
  }
}
