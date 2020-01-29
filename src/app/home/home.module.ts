import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavComponent } from './components/nav/nav.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';


@NgModule({
  declarations: [HomeComponent, NavComponent, GalleryComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularFirestoreModule
  ]
})
export class HomeModule { }
