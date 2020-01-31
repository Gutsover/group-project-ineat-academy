import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showLoginModal: boolean;
  user;
 
  constructor(private authService : AuthenticationService) {

  }

  ngOnInit() {
    this.showLoginModal = false;
    this.getUser();
  }

  onUserLogin(event) {
    this.showLoginModal = true;
  }

  async onUserLogout(event){
    console.log('App', event);
    await this.authService.logout();
    this.getUser();
  }

  hideLoginModal() {
    this.showLoginModal = false;
  }

  async login(event) {
    const credentials = {
      email: event.email,
      password: event.password
    };
    await this.authService.login(credentials);
    this.getUser();
    this.hideLoginModal();
  }

  getUser() {
    this.user = this.authService.getUser();
  }

  
}
