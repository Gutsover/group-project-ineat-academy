import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ModalUploadComponent } from './../components/modal-upload/modal-upload.component';
import { RegisterComponent } from './../components/register/register.component';
import { DetailsComponent } from '../details/details.component';

const routes: Routes = [
  { path: '', loadChildren: () => import ('../home/home.module').then(mod => mod.HomeModule), },
  { path: 'image/:imageId', loadChildren: () => import('../details/details.module').then(mod => mod.DetailsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
