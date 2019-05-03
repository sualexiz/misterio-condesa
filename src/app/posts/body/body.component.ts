import { Component, OnInit } from '@angular/core';
import { PostService } from '../../posts/post.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';



declare var $: any;

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  animations: [
    // Animaciones Cool
    trigger('animacion', [
      state ('small', style({height: '0px'})),
      state ('large', style({height: '450px'})),
      transition('large <=> small', animate('300ms ease-in'))
    ])
  ]
})
export class BodyComponent implements OnInit {

capitulos: any[] = [];
state = 'small';
texteNone = 'texte-a';
moreNone = 'more';
activate = 'dialog__trigger img';
sinIco = 'sin-ico';
activate2 = 'dialog__trigger2 img';
activate3 = 'dialog__trigger3 img';
activate4 = 'dialog__trigger4 img';


animateMe() {
  this.state = (this.state === 'large' ? 'large' : 'large');
}

closeAnimateMe() {
  this.state = (this.state === 'small' ? 'large' : 'small' );
}



  constructor( public postService: PostService) {
    console.log('hola');
  }

  ngOnInit() {
    this.capitulos = this.postService.getCapitulos();
    console.log(this.capitulos);


    function dialog() {

      // Declare variables
      var dialogBox = $('.dialog'),
          dialogTrigger = $('.dialog__trigger'),
          dialogTrigger2 = $('.dialog__trigger2'),
          dialogTrigger3 = $('.dialog__trigger3'),
          dialogTrigger4 = $('.dialog__trigger4'),
          dialogClose = $('.dialog__close');
          // dialogTitle = $('.dialog__title'),
          // dialogContent = $('.dialog__content'),
          // dialogAction = $('.dialog__action');

      // Open the dialog
      dialogTrigger.on('click', function(e) {
      dialogBox.addClass('dialog--active');
        $('#nombre').text('ROSARIO');
        $('#apellido').text('Alejandra Chamorro');
        $('#descripcion').text('Es una joven atractiva de 20 años que cursa el primer semestre de universidad. Aunque ella se muestra ante los demás como una persona extrovertida y descomplicada, haber perdido a su mamá le genera un gran dolor en su alma que le impide establecer una relación sentimental serie.');
        $('#descripcion-dos').text('Rosario pronto descubrirá que tiene un don especial, que quizá la ayude a salir del infierno al que se enfrentará.')
        $('#video').attr('src', 'https://www.youtube.com/embed/2f2qzsbMMEg');
        e.stopPropagation();
      });

      dialogTrigger2.on('click', function(e) {
      dialogBox.addClass('dialog--active');
      $('#nombre').text('MATÍAS');
      $('#apellido').text('Daniel Mira');
      $('#descripcion').text('Es un joven de 22 años que tiene una gran fama de mujeriego y conquistador en su universidad, pero al conocer a Rosario cree que ella puede ser la mujer que tanto ha buscado.');
      $('#descripcion-dos').text('Planea pasar el fin de semana con ella para conquistarla y hacerla su novia, pero algo que esta fuera de su control y compresión lo hará concentrar su energía en tratar de sobrevivir a la peor de sus pesadillas.')
      $('#video').attr('src', 'https://www.youtube.com/embed/uDrk5v7dap8');
        e.stopPropagation();
      });

      dialogTrigger3.on('click', function(e) {
        dialogBox.addClass('dialog--active');
        $('#nombre').text('ANTONIO');
        $('#apellido').text('Juan Carlos Ruiz');
        $('#descripcion').text('Es un campesino de 55 años de edad que conoce más de lo que todos piensan la historia de la finca La Condesa y de su antigua dueña. Él es el mayordomo de la propiedad y es la mano derecha de Rafael, actual dueño, no solo para atender a los visitantes, sino también para asistirlo en su negocio ilegal.');
        $('#descripcion-dos').text('Aunque aparenta ser un hombre atento y servicial, muy pronto todos conocerán su oscuro pasado y siniestras intenciones.')
        $('#video').attr('src', 'https://www.youtube.com/embed/RjH5XIoNQOY');
          e.stopPropagation();
        });

        dialogTrigger4.on('click', function(e) {
          dialogBox.addClass('dialog--active');
          $('#nombre').text('RAFAEL');
          $('#apellido').text('Carlos Fernández');
          $('#descripcion').text('Es un ambicioso hacendado de 35 años de edad que ha encontrado en la “Deep Web” una forma de hacer dinero fácil. Rafael, que conoce el oscuro pasado de la propiedad, compra la finca La Condesa con la intención de alquilarla y transmitir en directo en la red, los sucesos paranormales provocados que vivirán sus visitantes. Muy pronto el también quedará atrapado en una pesadilla de la que será casi imposible salir.');
          $('#descripcion-dos').text('')
          $('#video').attr('src', 'https://www.youtube.com/embed/o9QEtIyY0_U');
            e.stopPropagation();
          });

      // $(document).ready(function() {
      //   dialogBox.toggleClass('dialog--active');
      // });

      // Close the dialog - click close button
      dialogClose.on('click', function() {
        dialogBox.removeClass('dialog--active');
      });

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

    // $('#espaciar').click(function() {
    //     $('#esto').slideToggle(400);
    // });
  }

}
