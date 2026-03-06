import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IUser } from '../models/iuser';
import { Data } from '@angular/router';
import { Userservice } from '../userservice';

@Component({
  selector: 'app-user-data',
  standalone: false,
  templateUrl: './user-data.html',
  styleUrl: './user-data.css',
})
export class UserData implements OnChanges {
  constructor(private myuserservice: Userservice) {}

  userload: IUser[] = [];
  user!: IUser;
  @Input() userId!: number;
  @Input() Date!: Date;

  ngOnChanges() {
    this.getuserbyid(this.userId);
  }

  getuserbyid(userId: number) {
    return this.user = this.myuserservice.getuserbyid(userId) as IUser;
  }
}
