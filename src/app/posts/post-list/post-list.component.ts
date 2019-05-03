import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../../posts/post';
import { PostService } from '../../posts/post.service';
import { Observable, Subscription } from 'rxjs';



@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  // posts: Observable<Post[]>; // default
  posteos: any[] = [];
  subscriptions: Subscription = new Subscription();

  constructor(public postService: PostService) { }
  // public posteos = []; para eliminar
  ngOnInit() {

    // this.posts = this.postService.getPost();
    // console.log (this.posts); para actiualizad a git
    // Como estaba antes
    // this.postService.getAlexis().subscribe((posteos) => {
    // this.posteos = posteos;
    // console.log('Listado de posteos');
    // console.log(posteos);
    // });

    this.miNuevoMetodo();


  }

ngOnDestroy() {
  this.subscriptions.unsubscribe();
}

miNuevoMetodo() {
    this.subscriptions.add(
      this.postService.getAlexis().subscribe((posteos) => {
        this.posteos = posteos;

        console.log(posteos);
        console.log('estos son lo posteos')
      })
    );
}

}
