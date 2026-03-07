import { Injectable } from '@angular/core';
import { IPost } from './models/post_model';

@Injectable({
  providedIn: 'root',
})
export class Postservice {
  posts: IPost[] = [
    {
      id: 1,
      title: 'first post',
      body: 'this is the first post',
      userId: 1,
      Date: new Date(),
      imgurl:
        'https://easydrawingguides.com/wp-content/uploads/2024/06/how-to-draw-an-easy-spider-man-featured-image-1200.png',
      likes: 15,
      comments: [],
    },
    {
      id: 2,
      title: ' post num 2',
      body: 'this body of post',
      userId: 4,
      Date: new Date(),
      imgurl:
        'https://easydrawingguides.com/wp-content/uploads/2024/06/how-to-draw-an-easy-spider-man-featured-image-1200.png',
      likes: 3,
      comments: [],
    },
    {
      id: 3,
      title: ' post num 3',
      body: 'this is body of post',
      userId: 2,
      Date: new Date(),
      imgurl:
        'https://easydrawingguides.com/wp-content/uploads/2024/06/how-to-draw-an-easy-spider-man-featured-image-1200.png',
      likes: 122,
      comments: [],
    },
  ];

  getposts() {
    return this.posts;
  }

  deletpost(id: number) {
    this.posts = this.posts.filter((post) => post.id !== id);
  }

  addpost(post:IPost){
    const newId = this.posts.length ? Math.max(...this.posts.map(p => p.id)) + 1 : 1;
    const newPost:IPost = {...post,id:newId, comments: []};
    this.posts.push(newPost);

  }

  updatepost(updatedPost: IPost) {
    const index = this.posts.findIndex((post) => post.id === updatedPost.id);
    this.posts[index] = { ...updatedPost };
  }
  postlike(id: number) {
    const index = this.posts.findIndex((post) => post.id === id);
    this.posts[index].likes += 1;
  }

  addcomment(post: IPost, coment: string) {
    post.comments.push(coment);
  }
  deletecomment(post: IPost, i: number) {
    post.comments.splice(i, 1);
  }
}
