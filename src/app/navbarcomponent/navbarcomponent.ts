import { Component } from '@angular/core';
import { Userservice } from '../userservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbarcomponent',
  standalone: false,
  templateUrl: './navbarcomponent.html',
  styleUrl: './navbarcomponent.css',
})
export class Navbarcomponent {
  constructor(public myuserservice:Userservice, private router:Router){}

  logout() {
    this.myuserservice.logout()
    this.router.navigate(['/logout'])
  }
}
