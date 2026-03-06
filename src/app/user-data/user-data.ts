import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IUser } from '../models/iuser';
import { Data } from '@angular/router';

@Component({
  selector: 'app-user-data',
  standalone: false,
  templateUrl: './user-data.html',
  styleUrl: './user-data.css',
})
export class UserData implements  OnChanges  {
  users:IUser[]= [
  { id: 1, name: 'Alice Johnson', imgurl: 'https://i.pravatar.cc/150?img=1', password: 'alice123' },
  { id: 2, name: 'Bob Smith', imgurl: 'https://i.pravatar.cc/150?img=2', password: 'bob456' },
  { id: 3, name: 'Charlie Brown', imgurl: 'https://i.pravatar.cc/150?img=3', password: 'charlie789' },
  { id: 4, name: 'Diana Prince', imgurl: 'https://i.pravatar.cc/150?img=4', password: 'diana321' },
  { id: 5, name: 'Ethan Hunt', imgurl: 'https://i.pravatar.cc/150?img=5', password: 'ethan007' }
];

userload:IUser[] = [];
user!:IUser
@Input()userId !:number
  @Input() Date !:Date

  ngOnChanges(){
    this.user = this.getuserbyid(this.userId) as IUser;
  }

  getuserbyid(userId:number){
    return this.users.find(user => user.id === userId);
  }
}

