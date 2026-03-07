import { Component, OnInit } from '@angular/core';
import { IPost } from '../models/post_model';
import { Postservice } from '../postservice';
import { Router } from '@angular/router';
import { Userservice } from '../userservice';

@Component({
  selector: 'app-postscomponent',
  standalone: false,
  templateUrl: './postscomponent.html',
  styleUrl: './postscomponent.css',
})
export class Postscomponent implements OnInit {
  constructor(private mypostservice: Postservice, public myuserservice: Userservice, public router: Router) {}
  postload: IPost[] = [];
  loadposts() {
    this.postload = this.mypostservice.getposts();
  }
  ngOnInit() {
    this.loadposts();
  }
  deletepost(id: number) {
    this.mypostservice.deletpost(id);
    this.loadposts();
  }
  postlike(id: number) {
    this.mypostservice.postlike(id);
  }
  updatepost(post: IPost) {
    this.mypostservice.updatepost(post);
  }

  addcomment(post: IPost, comment: string) {
    if (!comment.trim()) return;
    this.mypostservice.addcomment(post, comment);
  }
  deletecomment(post: IPost, i: number) {
    this.mypostservice.deletecomment(post, i);
  }
}

