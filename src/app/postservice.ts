import { Injectable } from '@angular/core';
import { IPost } from './models/post_model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Postservice {
  private baseurl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  getposts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.baseurl);
  }

  getpostbyid(id: number): Observable<IPost> {
    return this.http.get<IPost>(`${this.baseurl}/${id}`);
  }

  getpostsbyuser(userId: number): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.baseurl}?userId=${userId}`);
  }

  addpost(post: IPost): Observable<IPost> {
    return this.http.post<IPost>(this.baseurl, post);
  }

  deletpost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseurl}/${id}`);
  }

  postlike(post: IPost): Observable<IPost> {
    return this.http.patch<IPost>(`${this.baseurl}/${post.id}`, {
      likes: post.likes + 1,
    });
  }

  addcomment(post: IPost, comment: string): Observable<IPost> {
    return this.http.patch<IPost>(`${this.baseurl}/${post.id}`, {
      comments: [...post.comments, comment],
    });
  }

  deletecomment(post: IPost, index: number): Observable<IPost> {
    const updatedcomments = [...post.comments];
    updatedcomments.splice(index, 1);
    return this.http.patch<IPost>(`${this.baseurl}/${post.id}`, {
      comments: updatedcomments,
    });
  }
}