import { Component } from '@angular/core';
import { Postservice } from '../postservice';
import { IPost } from '../models/post_model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpost-form',
  standalone: false,
  templateUrl: './addpost-form.html',
  styleUrl: './addpost-form.css',
})
export class AddpostForm {
  toggleForm() {
    this.showform = !this.showform;
  }

  constructor(private mypostservice: Postservice, private router: Router) {}

  showform: boolean = true;
  newpost: IPost = {
    id: 0,
    title: '',
    body: '',
    userId: Math.floor(Math.random() * 5) + 1,
    Date: new Date(),
    imgurl:
      '',
    likes: 0,
    comments: [],
  };

  addpost() {
  this.mypostservice.addpost(this.newpost);
  this.router.navigate(['/posts']);
}
}
