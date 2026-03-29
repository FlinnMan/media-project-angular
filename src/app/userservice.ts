import { Injectable } from '@angular/core';
import { IUser } from './models/iuser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Userservice {
  private baseurl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getusers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.baseurl);
  }

  getuserbyid(userId: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.baseurl}/${userId}`);
  }

  login(name: string, email: string, password: string): Observable<IUser[]> {
    return this.http.get<IUser[]>(
      `${this.baseurl}?name=${name}&email=${email}&password=${password}`
    );
  }

  loggeduser: IUser | null = null;

  setloginuser(user: IUser) {
    this.loggeduser = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getloggeduser() {
    return this.loggeduser || JSON.parse(localStorage.getItem('user')!);
  }

  logout() {
    this.loggeduser = null;
    localStorage.removeItem('user');
  }

  authenticated(): boolean {
    return this.getloggeduser() != null;
  }
}