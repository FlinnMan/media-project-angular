import { Component } from '@angular/core';
import { Postservice } from '../postservice';
import { IPost } from '../models/post_model';
import { Userservice } from '../userservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpost-form',
  standalone: false,
  templateUrl: './addpost-form.html',
  styleUrl: './addpost-form.css',
})
export class AddpostForm {
  constructor(
    private mypostservice: Postservice,
    private myuserservice: Userservice,
    private router: Router
  ) {}

  newpost: IPost = {
    id: 0,
    title: '',
    body: '',
    userId: 0,
    Date: new Date(),
    imgurl: '',
    likes: 0,
    comments: [],
  };

  addpost() {
    this.newpost.userId = this.myuserservice.getloggeduser().id;
    this.mypostservice.addpost(this.newpost).subscribe({
      next: () => this.router.navigate(['/posts']),
      error: (err) => console.log('error adding post', err),
    });
  }
}
