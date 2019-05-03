import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SwiperComponent } from 'angular2-useful-swiper';



@Component({
  selector: 'app-swiper',
  templateUrl: './swiper2.component.html',
  styleUrls: ['./swiper2.component.css']
})
export class Swiper2Component implements OnInit {

  @ViewChild('galleryTop') galleryTop: SwiperComponent;

  title = 'NG7Swiper';
  mySwiper: Swiper;
  images = [  {
    id: 1,
    src: '../../../assets/img/corousel/portada-cap1.png',
    caption: 'Capítulo 1',
    descrip: 'Se abren las puertas de La Condesa'
},
{
  id: 2,
    src: '../../../assets/img/corousel/portada-cap2.png',
    caption: 'Capítulo 2',
    descrip: 'Una extraña presencia'
},
{
  id: 3,
    src: '../../../assets/img/corousel/portada-cap3.png',
    caption: 'Capítulo 3',
    descrip: 'Se materializan los temores'
},
{
  id: 4,
    src: '../../../assets/img/corousel/portada-cap4.png',
    caption: 'Capítulo 4',
    descrip: 'La pesadilla de Matías'
},
{
  id: 5,
    src: '../../../assets/img/corousel/portada-cap5.png',
    caption: 'Capítulo 5',
    descrip: 'La otra cara de Antonio'
},
{
  id: 6,
  src: '../../../assets/img/corousel/portada-cap6.png',
  caption: 'Capítulo 6',
  descrip: 'La leyenda de La Condesa'
},
{
  id: 7,
  src: '../../../assets/img/corousel/portada-cap7.png',
  caption: 'Capítulo 7',
  descrip: 'Se hace realidad la leyenda'
}
];

galleryTopConfig: any = {
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  spaceBetween: 10
};

  config: SwiperOptions = {

    initialSlide: 1, // Slide Index Starting from 0
    slidesPerView: 5, // Slides Visible in Single View Default is 1
    // pagination: '.swiper-pagination',  Pagination Class defined
    // paginationClickable: true, // Making pagination dots clicable
    // nextButton: '.swiper-button-next',
    // prevButton: '.swiper-button-prev',
   // spaceBetween: 20, // Space between each Item
    autoplay: 3000,
    observer: true,
    observeParents: true,
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 40,
        disabledClass: 'swiper-button-disabled',
      }
    },
  };

  // ngAfterViewInit(): void {
  //   this.mySwiper = new Swiper('.swiper-container', {
  //       pagination: '.swiper-pagination',
  //       paginationClickable: true,
  //       nextButton: '.swiper-button-next',
  //       prevButton: '.swiper-button-prev',
  //       autoplay: 3000,
  //       spaceBetween: 20,
  //       initialSlide: 0, // Slide Index Starting from 0
  //       slidesPerView: 5, // Slides Visible in Single View Default is 1
  //       observer: true,
  //   observeParents: true,
  //    loop: true,

  //    breakpoints: {
  //         1024: {
  //           slidesPerView: 5,
  //           spaceBetween: 10,
  //         },
  //         600: {
  //           slidesPerView: 2,
  //           spaceBetween: 40,
  //           disabledClass: 'swiper-button-disabled',
  //         }
  //       },
  //   });
  // }

  ngOnInit() {
  }

}
