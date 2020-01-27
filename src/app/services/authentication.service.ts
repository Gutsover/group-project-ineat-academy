import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public afAuth: AngularFireAuth) {}
  login() {
    this.afAuth.auth.signInWithEmailAndPassword('admin@admin.com','administrator');
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
