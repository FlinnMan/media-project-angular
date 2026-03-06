import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IPost } from '../models/post_model';
import { Postservice } from '../postservice';

@Component({
  selector: 'app-postscomponent',
  standalone: false,
  templateUrl: './postscomponent.html',
  styleUrl: './postscomponent.css',
})
export class Postscomponent implements OnInit {
  constructor(private mypostservice: Postservice) {}
  postload: IPost[] = [];
  loadposts() {
    this.postload = this.mypostservice.getposts();
  }
  ngOnInit() {
    this.loadposts();
  }
  deletepost(id: number) {
    this.postload = this.postload.filter((post) => post.id !== id);
  }
  addpost() {
    const newid = this.postload.length + 1;
    const newpost: IPost = {
      id: newid,
      title: `New Post ${newid}`,
      body: 'This is the body of the new post.',
      userId: Math.floor(Math.random() * 5) + 1,
      Date: new Date(),
      imgurl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPlGb7i3m0wwZDIimp8-NAuONE2ftlISdXSg&s',
      likes: 0,
      comments: [],
    };
    this.postload.push(newpost);
  }
  postlike(id: number) {
    this.mypostservice.postlike(id);
  }
  upDatepost(id: number) {
    const post = this.postload.find((post) => post.id === id);
    if (post) {
      post.title = `UpDated Post ${id}`;
      post.body = 'This is the upDated body of the post.';
    }
  }
}
