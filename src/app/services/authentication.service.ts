import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public afAuth: AngularFireAuth) {}

  async login(credentials) {
    await this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  // Méthode appelée dans registerComponent.ts
  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err));
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  getUser() {
    return this.afAuth.auth.currentUser;
  }
}
