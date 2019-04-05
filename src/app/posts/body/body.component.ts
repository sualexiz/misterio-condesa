import { Component, OnInit } from '@angular/core';
import { PostService } from '../../posts/post.service';


declare var $: any;

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

capitulos: any[] = [];

  constructor( public postService: PostService) {
    console.log("hola");
  }

  ngOnInit() {
    this.capitulos = this.postService.getCapitulos();
    console.log(this.capitulos);

    function dialog() {

      // Declare variables
      var dialogBox = $('.dialog'),
          dialogTrigger = $('.dialog__trigger'),
          dialogClose = $('.dialog__close'),
          dialogTitle = $('.dialog__title'),
          dialogContent = $('.dialog__content'),
          dialogAction = $('.dialog__action');

      // Open the dialog
      dialogTrigger.on('click', function(e) {
        dialogBox.toggleClass('dialog--active');
        // e.stopPropagation();
      });

      // Close the dialog - click close button
      // dialogClose.on('click', function() {
      //   dialogBox.removeClass('dialog--active');
      // });

      // Close the dialog - press escape key // key#27
      // $(document).keyup(function(e) {
      //   if (e.keyCode === 27) {
      //     dialogBox.removeClass('dialog--active');
      //   }
      // });

      // Close the dialog - click outside
      // $(document).on('click', function(e) {
      //   if ($(e.target).is(dialogBox) === false &&
      //       $(e.target).is(dialogTitle) === false &&
      //       $(e.target).is(dialogContent) === false &&
      //       $(e.target).is(dialogAction) === false) {
      //     dialogBox.removeClass('dialog--active');
      //   }
      // });

    }
    // Run function
    $(dialog);

    // ----- las mias
    $(document).ready(function() {
      text1();
    });


    const text1 = function() {
      $('#nombre').text('ROSARIO');
      $('#descripcion').text('HOLA COMO ESTAS');
      $('#video').attr('src', '');
    };

    const text2 = function() {
      $('#nombre').text('MATIAS');
      $('#descripcion').text('HOLA COMO ESTAS');
      $('#video').attr('src', '');
    };

    // $('#espaciar').click(function() {
    //     $('#esto').slideToggle(400);
    // });
  }

}
