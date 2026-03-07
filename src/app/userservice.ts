import { Injectable } from '@angular/core';
import { IUser } from './models/iuser';

@Injectable({
  providedIn: 'root',
})
export class Userservice {
  users: IUser[] = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'amr@gmail.com',
      imgurl: 'https://i.pravatar.cc/150?img=1',
      password: 'alice123',
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'mahmoud@gmail.com',
      imgurl: 'https://i.pravatar.cc/150?img=2',
      password: 'bob456',
    },
    {
      id: 3,
      name: 'Charlie Brown',
      email: 'amro@gmail.com',
      imgurl: 'https://i.pravatar.cc/150?img=3',
      password: 'charlie789',
    },
    {
      id: 4,
      name: 'Diana Prince',
      email: 'amroo@gmail.com',
      imgurl: 'https://i.pravatar.cc/150?img=4',
      password: 'diana321',
    },
    {
      id: 5,
      name: 'Ethan Hunt',
      email: 'marwan@gmail.com',
      imgurl: 'https://i.pravatar.cc/150?img=5',
      password: 'ethan007',
    },
  ];
  getuserbyid(userId: number) {
    return this.users.find((user) => user.id === userId);
  }
  login(name: string, email: string, password: string) {
    return this.users.find((u) => u.name === name && u.email === email && u.password === password);
  }
  loggeduser: IUser | null = null;
  setloginuser(user: IUser) {
    this.loggeduser=user
    localStorage.setItem('user', JSON.stringify(user));
  }
  getloggeduser(){
    return this.loggeduser||JSON.parse(localStorage.getItem('user')!)
  }
  logout(){
    this.loggeduser=null
    localStorage.removeItem('user')
  }
  authenticated():boolean{
    return this.getloggeduser()!=null;
  }
}
