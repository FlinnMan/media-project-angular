import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  loginerror = false;

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
      this.myuserservice.login(username, email, password).subscribe({
        next: (users) => {
          if (users.length > 0) {
            this.loginerror = false;
            this.myuserservice.setloginuser(users[0]);
            this.router.navigate(['/posts']);
          } else {
            this.loginerror = true;
          }
        },
        error: (err) => console.log('login error', err),
      });
    }
  }
}
