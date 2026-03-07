import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Userservice } from '../userservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private myuserservice: Userservice,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(16)]],
    });
  }

  login() {
    if (this.loginForm.valid) {
      const { username, email, password } = this.loginForm.value;
      const loginuser = this.myuserservice.login(username, email, password);


      if (loginuser) {
        this.myuserservice.setloginuser(loginuser);
        this.router.navigate(['/posts']);
      }
    }
  }
}
