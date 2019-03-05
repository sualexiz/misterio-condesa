import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../posts/post.service';
import { Post} from '../post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']

})
export class PostDetailComponent implements OnInit {
  posteos: any[] = [];
  post: Post;
  constructor(
    public route: ActivatedRoute,
    public postService: PostService
  ) { }

  ngOnInit() {
    this.getPost();
    console.log('entro en el this');
    console.log(this);
  //   this.postService.getAlexis().subscribe((posteos) => { ALEXIS

  //   this.posteos = posteos;
  // });


  }

  getPost() {

    const id = this.route.snapshot.paramMap.get('id'); // verificado ok!!
    console.log('Mostras el ID');
    console.log(id); // el ID que toma de routerlink

    return this.postService.getPostData2(id).subscribe((data: any) => this.post = data );
  }

}
