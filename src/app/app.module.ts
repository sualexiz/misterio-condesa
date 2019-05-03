import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Firebase Modulos
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FirestoreSettingsToken} from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { SwiperModule } from 'angular2-useful-swiper';
import { FacebookModule } from 'ngx-facebook';
// import { SafeUrlPipe } from './videosalud.pipe';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '', loadChildren: './posts/posts.module#PostsModule'},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  declarations: [
    AppComponent,
    // SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {useHash: true}),
    CoreModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    SwiperModule,
    FacebookModule.forRoot()

  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
