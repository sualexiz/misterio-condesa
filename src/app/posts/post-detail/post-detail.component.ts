import { Component, OnInit , OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../posts/post.service';
import { Post} from '../post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']

})

export class PostDetailComponent implements OnInit, OnDestroy  {
  posteos: Post[] = [];
  post: Post;
  subscriptions: Subscription = new Subscription();

  constructor(
    public route: ActivatedRoute,
    public postService: PostService
  ) {

  }


  ngOnInit() {
    this.getPost();
     // verificado ok!!
    // console.log(id);
    // console.log('entro en el this');
    // console.log(this);
    // this.postService.getAlexis().subscribe((posteos) => {
    //   this.posteos = posteos;
    // });
    // this.postService.getPostData2(id).subscribe((posteos: any) => this.posteos = posteos);
    // console.log(PostService);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }


  getPost() {
    // console.log('Mostras el ID');
    // console.log(id); // el ID que toma de routerlink

    const id = this.route.snapshot.paramMap.get('id');
    this.subscriptions.add(
     this.postService.getPostData2(id).subscribe((data: any) => this.post = data )
    );

  }

}
