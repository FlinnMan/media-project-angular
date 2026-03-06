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
  comment: string = '';
  addcomment(post: IPost) {
    this.mypostservice.addcomment(post, this.comment);
    this.comment = '';
    this.loadposts();
  }
}
