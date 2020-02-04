import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { DatabaseService } from '../services/database/database.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ViewerComponent } from './component/viewer/viewer.component';
import { CommentComponent } from './component/comment/comment.component';


@NgModule({
  declarations: [DetailsComponent, ViewerComponent, CommentComponent],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    AngularFirestoreModule
  ],
  providers: [
    DatabaseService
  ]
})
export class DetailsModule { }
