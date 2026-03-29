import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Userservice } from '../userservice';
import { Postservice } from '../postservice';
import { IUser } from '../models/iuser';
import { IPost } from '../models/post_model';

@Component({
  selector: 'app-user-profile',
  standalone: false,
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile implements OnInit {
  user!: IUser;
  posts: IPost[] = [];

  constructor(
    private route: ActivatedRoute,
    private myuserservice: Userservice,
    private mypostservice: Postservice,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;

    this.myuserservice.getuserbyid(id).subscribe({
      next: (user) => {
        this.user = user;
        this.cd.detectChanges();
      },
      error: (err) => console.log('error loading user', err),
    });

    this.mypostservice.getpostsbyuser(id).subscribe({
      next: (posts) => {
        this.posts = posts;
        this.cd.detectChanges();
      },
      error: (err) => console.log('error loading user posts', err),
    });
  }
}