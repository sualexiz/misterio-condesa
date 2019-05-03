import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './navbar/navbar.component';


import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { SwiperModule } from 'angular2-useful-swiper';
import { SwiperComponent } from 'angular2-useful-swiper';
import { FacebookModule } from 'ngx-facebook';



@NgModule({
  declarations: [NavbarComponent, SidenavListComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule,
    FacebookModule.forRoot()
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    NavbarComponent,
    SidenavListComponent,
    RouterModule,
    FlexLayoutModule,
    SwiperModule
  ]
})
export class SharedModule { }
