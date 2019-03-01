import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../../posts/post.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // posts: Observable<Post[]>; // default
  posteos = [];

  constructor(public postService: PostService) { }
  // public posteos = []; para eliminar
  ngOnInit() {

    // this.posts = this.postService.getPost();
    // console.log (this.posts);

    this.postService.getAlexis().subscribe((posteos) => {
    console.log(posteos);
    this.posteos = posteos;

    });
  }

}
