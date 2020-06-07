// auth.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

// Routes and RouterModule
import { Routes, RouterModule } from "@angular/router";

const authRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  }
]
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
