// employee.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeSalaryListComponent } from './employee-salary-list/employee-salary-list.component';
import { AuthGuardService as AuthGuard } from "../auth/auth-guard.service";

// Routes and RouterModule
import { Routes, RouterModule } from "@angular/router";

const employeeRoutes: Routes = [
  {
    path: 'employee-salary-list',
    component: EmployeeSalaryListComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  declarations: [EmployeeSalaryListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(employeeRoutes)
  ]
})
export class EmployeeModule { }
