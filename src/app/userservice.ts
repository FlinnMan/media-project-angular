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
      imgurl: 'https://i.pravatar.cc/150?img=1',
      password: 'alice123',
    },
    { id: 2, name: 'Bob Smith', imgurl: 'https://i.pravatar.cc/150?img=2', password: 'bob456' },
    {
      id: 3,
      name: 'Charlie Brown',
      imgurl: 'https://i.pravatar.cc/150?img=3',
      password: 'charlie789',
    },
    {
      id: 4,
      name: 'Diana Prince',
      imgurl: 'https://i.pravatar.cc/150?img=4',
      password: 'diana321',
    },
    { id: 5, name: 'Ethan Hunt', imgurl: 'https://i.pravatar.cc/150?img=5', password: 'ethan007' },
  ];
  getuserbyid(userId: number) {
    return this.users.find((user) => user.id === userId);
  }
}
