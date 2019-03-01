import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { Post } from './post';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class PostService {

  postsCollection: AngularFirestoreCollection<Post>;
  postDoc: AngularFirestoreDocument<Post>;
  posteos: Observable<Post[]>;

  constructor(public afs: AngularFirestore) {

    this.postsCollection = this.afs.collection('post');
    this.posteos = this.postsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
      const data = a.payload.doc.data() as Post;
      data.id = a.payload.doc.id;
      return data;

    }));
  // this.postsCollection = this.afs.collection('posts', ref => ref.orderBy('published', 'desc')); default
  // this.posteos = this.afs.collection('post').valueChanges(); // bueno!

  }



  // getPost() {
  //   return this.postsCollection.snapshotChanges().pipe(map(actions => {
  //     return actions.map(a => {
  //       const data = a.payload.doc.data() as Post;
  //       const id = a.payload.doc.id;
  //       return { id, ...data};
  //     });
  //   }));
  // }

  getAlexis() {
    return this.posteos;
  }

  getPostData(post: Post) {
    this.postDoc = this.afs.doc(`post/${id}`);
    return this.postDoc.valueChanges();
  }

}



