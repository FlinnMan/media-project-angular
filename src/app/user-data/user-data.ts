import { Component, Input, OnChanges } from '@angular/core';
import { IUser } from '../models/iuser';
import { Userservice } from '../userservice';

@Component({
  selector: 'app-user-data',
  standalone: false,
  templateUrl: './user-data.html',
  styleUrl: './user-data.css',
})
export class UserData implements OnChanges {
  constructor(private myuserservice: Userservice) {}

  user!: IUser;
  @Input() userId!: number;
  @Input() Date!: Date;

  ngOnChanges() {
    this.getuserbyid(this.userId);
  }

  getuserbyid(userId: number) {
    this.myuserservice.getuserbyid(userId).subscribe({
      next: (user) => {
        this.user = user;
      },
      error: (err) => console.log('error loading user', err),
    });
  }
}
