import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IPost } from '../models/post_model';
import { Postservice } from '../postservice';
import { Router, ActivatedRoute } from '@angular/router';
import { Userservice } from '../userservice';

@Component({
  selector: 'app-postscomponent',
  standalone: false,
  templateUrl: './postscomponent.html',
  styleUrl: './postscomponent.css',
})
export class Postscomponent implements OnInit {
  constructor(
    private mypostservice: Postservice,
    public myuserservice: Userservice,
    public router: Router,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {}

  postload: IPost[] = [];

  loadposts() {
    this.mypostservice.getposts().subscribe({
      next: (posts) => {
        this.postload = posts;
        this.cd.detectChanges();
      },
      error: (err) => console.log('error loading posts', err),
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['userId']) {
        this.mypostservice.getpostsbyuser(+params['userId']).subscribe({
          next: (posts) => {
            this.postload = posts;
            this.cd.detectChanges();
          },
          error: (err) => console.log('error filtering posts', err),
        });
      } else {
        this.loadposts();
      }
    });
  }

  deletepost(id: number) {
    this.mypostservice.deletpost(id).subscribe(() => this.loadposts());
  }

  postlike(post: IPost) {
    this.mypostservice.postlike(post).subscribe(() => this.loadposts());
  }

  addcomment(post: IPost, comment: string) {
    if (!comment.trim()) return;
    this.mypostservice.addcomment(post, comment).subscribe(() => this.loadposts());
  }

  deletecomment(post: IPost, i: number) {
    this.mypostservice.deletecomment(post, i).subscribe(() => this.loadposts());
  }
}