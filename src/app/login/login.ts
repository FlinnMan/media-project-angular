import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Userservice } from '../userservice';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private myuserservice:Userservice) {
    this.loginForm = this.fb.group({
      username: ['',[Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
    });
  }

  name:string = '';
  email:string = '';
  password:string = '';

  login() {
    const loginuser=this.myuserservice.login(this.name, this.email, this.password)

    this.myuserservice.setloginuser(loginuser!)

  }
}
