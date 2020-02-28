import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from '../models/Post';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class PostService {
  
  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  private API_URL = '/posts';

  constructor(private http: HttpClient, private db: AngularFireDatabase, private afs: AngularFirestore) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  getStarPosts(): Observable<any[]> {
    return this.db.list<any>(this.API_URL).snapshotChanges()
      .pipe(map(response => response.map(post => this.assignKey(post))));
  }

  private assignKey(post) {
    return { ...post.payload.val(), key: post.key };
  }

  getStardbFSPosts() {
    return this.afs.collection('posts').valueChanges()
  }

  
  savePost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, httpOptions);
  }

  updatePost(post: Post) :Observable<Post> {
    const url =`${this.postsUrl}/${post.id}`;

    return this.http.put<Post>(url, post, httpOptions);
  }

  getPost(id: number) :Observable<Post> {
    const url =`${this.postsUrl}/${id}`;

    return this.http.get<Post>(url);
  }

  removePost(post: Post | number): Observable<Post> {
    const id = typeof post === 'number' ? post : post.id;
    const url = `${this.postsUrl}/${id}`;

    return this.http.delete<Post>(url, httpOptions);
  }
}
