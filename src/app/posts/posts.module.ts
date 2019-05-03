import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { SharedModule } from '../shared/shared.module';
import { BodyComponent } from './body/body.component';
import { ContentComponent } from './content/content.component';


import { Swiper2Component } from './swiper2/swiper2.component';
import { ConocemasComponent } from './conocemas/conocemas.component';
import { SafeUrlPipe } from '../videosalud.pipe';



const routes: Routes = [
  { path: 'home', component: BodyComponent},
  { path: 'capitulos/:id', component: ContentComponent},
  { path: 'blog', component: PostListComponent},
  { path: 'blog/:id', component: PostDetailComponent },
  { path: 'dashboard', component: PostDashboardComponent },
  { path: 'conocemas', component: ConocemasComponent }
];

@NgModule({
  declarations: [PostDashboardComponent, PostDetailComponent, PostListComponent, BodyComponent, Swiper2Component, ContentComponent, ConocemasComponent,SafeUrlPipe],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)

  ]
})
export class PostsModule { }
