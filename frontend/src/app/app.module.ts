// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Custom module imports
import { AuthModule } from "./auth/auth.module";
import { HomeModule } from "./home/home.module";
import { EmployeeModule } from "./employee/employee.module";

// Http client module import
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

// Routes and RouterModule
import { Routes, RouterModule } from "@angular/router";

import { AuthInterceptor } from "./auth/auth-interceptor";
import { AuthGuardService } from "./auth/auth-guard.service";


import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'employee',
    loadChildren: './employee/employee.module#EmployeeModule'
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    HomeModule,
    EmployeeModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [
    AuthGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
