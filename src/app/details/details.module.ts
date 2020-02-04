import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { DatabaseService } from '../services/database/database.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ViewerComponent } from './component/viewer/viewer.component';
import { CommentComponent } from './component/comment/comment.component';
import { InfosPicsComponent } from './component/infos-pics/infos-pics.component';


@NgModule({
  declarations: [DetailsComponent, ViewerComponent, CommentComponent, InfosPicsComponent],
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
