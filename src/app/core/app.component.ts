import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  constructor(private authService : AuthenticationService) {

  }

  onUserLogin(event) {
    console.log(event);
    const credentials = {
      email: event.email,
      password: event.password
    };
    this.authService.login(credentials);
  }
}
