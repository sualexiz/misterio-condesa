import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit {

  title = 'NG7Swiper';

  images = [  {
    src: '../../../assets/img/corousel/portada-cap1.png',
    caption: 'Caption 1'
},
{
    src: '../../../assets/img/corousel/portada-cap2.png',
    caption: 'Caption 2'
},
{
    src: '../../../assets/img/corousel/portada-cap3.png',
    caption: 'Caption 3'
},
{
    src: '../../../assets/img/corousel/portada-cap4.png',
    caption: 'Caption 4'
},
{
    src: '../../../assets/img/corousel/portada-cap5.png',
    caption: 'Caption 5'
}
];

  config: SwiperOptions = {

    initialSlide: 0, // Slide Index Starting from 0
    slidesPerView: 5, // Slides Visible in Single View Default is 1
    pagination: '.swiper-pagination', // Pagination Class defined
    paginationClickable: true, // Making pagination dots clicable
    nextButton: '.swiper-button-next', // Class for next button
    prevButton: '.swiper-button-prev', // Class for prev button
    spaceBetween: 20, // Space between each Item
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 10,
      }
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
