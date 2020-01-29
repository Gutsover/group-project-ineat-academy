import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService ) { }

  ngOnInit() {
  }

  tryRegister(value) {
    this.authenticationService.doRegister(value)
    .then(res => {
      console.log(res);
      // this.errorMessage = '';
      // this.successMessage = 'Your account has been created';
    }, err => {
      console.log(err);
      // this.errorMessage = err.message;
      // this.successMessage = '';
    });
  }

}