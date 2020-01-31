import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db :AngularFirestore) {
  }

  getPopularPictures() {
    return this.db.collection<any>('pictures').valueChanges();
  } 
}