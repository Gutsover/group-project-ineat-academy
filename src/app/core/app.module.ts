import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { SearchComponent } from '../components/search/search.component';
import { UserComponent } from '../components/user/user.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../../environments/environment';
import { ModalConnexionComponent } from '../components/modal-connexion/modal-connexion.component';
import { RegisterComponent } from '../components/register/register.component';
import { DatabaseService } from '../services/database/database.service';

@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    SearchComponent,
    UserComponent,
    ModalUploadComponent,
    ModalConnexionComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'ineat-project-group'),
    AngularFireStorageModule,
    AngularFireAuthModule,

  ],
  providers: [ DatabaseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
