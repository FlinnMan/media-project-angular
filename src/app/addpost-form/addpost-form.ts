import { Component } from '@angular/core';
import { Postservice } from '../postservice';
import { IPost } from '../models/post_model';
import { FormsModule } from '@angular/forms';

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

  constructor(private mypostservice: Postservice) {}

  showform: boolean = true;
  newpost: IPost = {
    id: 0,
    title: '',
    body: '',
    userId: Math.floor(Math.random() * 5) + 1,
    Date: new Date(),
    imgurl:
      'https://easydrawingguides.com/wp-content/uploads/2024/06/how-to-draw-an-easy-spider-man-featured-image-1200.png',
    likes: 0,
    comments: [],
  };

  addpost() {
    this.mypostservice.addpost(this.newpost);
  }
}
