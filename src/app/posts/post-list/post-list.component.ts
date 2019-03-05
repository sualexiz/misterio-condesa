import { Component, OnInit } from '@angular/core';
import { Post } from '../../posts/post';
import { PostService } from '../../posts/post.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Observable<Post[]>; // default
  posteos: any[] = [];



  constructor(public postService: PostService) { }
  // public posteos = []; para eliminar
  ngOnInit() {

    // this.posts = this.postService.getPost();
    // console.log (this.posts); para actiualizad a git

    this.postService.getAlexis().subscribe((posteos) => {

    this.posteos = posteos;
    console.log('Listado de posteos');
    console.log(posteos);

    });
  }

}
