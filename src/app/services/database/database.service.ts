import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db :AngularFirestore) {
  }

  getPopularPictures() {
    return this.db.collection<any>('pictures').snapshotChanges().pipe(
      map(pictures => pictures.map(picture => {
        const data = picture.payload.doc.data();
        const id = picture.payload.doc.id;
        return {id, ...data};
      }))
    );
  } 

  getPictureById(documentId){
    return this.db.doc('pictures/' + documentId).valueChanges();
  }

  getCommentsByPictureId(pictureId: string) {
    return this.db.collection<any>('comments', ref => ref.where('pictureId', '==', pictureId)).valueChanges();
  }
}
