import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { SharedModule } from '../shared/shared.module';
import { BodyComponent } from './body/body.component';
import { ContentComponent } from './content/content.component';

import { SwiperComponent } from './swiper/swiper.component';



const routes: Routes = [
  { path: 'home', component: BodyComponent},
  { path: 'capitulos/:id', component: ContentComponent},
  { path: 'blog', component: PostListComponent},
  { path: 'blog/:id', component: PostDetailComponent },
  { path: 'dashboard', component: PostDashboardComponent }
];

@NgModule({
  declarations: [PostDashboardComponent, PostDetailComponent, PostListComponent, BodyComponent, SwiperComponent, ContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)

  ]
})
export class PostsModule { }
