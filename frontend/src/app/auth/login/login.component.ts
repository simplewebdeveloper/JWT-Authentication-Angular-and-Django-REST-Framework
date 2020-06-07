// login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "../models/user.model";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  userLoginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) { 
    this.user = new User();
  }

  ngOnInit() {
    this.initializeUserLoginForm();
  }

  initializeUserLoginForm(): void {
    this.userLoginForm = this.formBuilder.group({
      username: [this.user.username, Validators.required],
      password: [this.user.password, Validators.required],
    })
  }

  userLoginFormSubmit() {
    const data = this.userLoginForm.getRawValue();
    console.log(data);
    this.authService.login(data);
  }

}
