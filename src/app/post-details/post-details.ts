import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Postservice } from '../postservice';
import { IPost } from '../models/post_model';

@Component({
  selector: 'app-post-details',
  standalone: false,
  templateUrl: './post-details.html',
  styleUrl: './post-details.css',
})
export class PostDetails implements OnInit {
  post!: IPost;

  constructor(
    private route: ActivatedRoute,
    private mypostservice: Postservice,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.mypostservice.getpostbyid(id).subscribe({
      next: (post) => {
        this.post = post;
        this.cd.detectChanges();
      },
      error: (err) => console.log('error loading post', err),
    });
  }
}