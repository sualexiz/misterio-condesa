import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { PostService } from '../../posts/post.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  capitulo: any = {};

  constructor(  private activatedRoute: ActivatedRoute,
                private capitulosService: PostService) {

    this.activatedRoute.params.subscribe( params => {
      console.log(params);
      this.capitulo = this.capitulosService.getCapitulo( params['id']);
    });
  }

  ngOnInit() {

  }

}
