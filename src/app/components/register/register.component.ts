import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  errorMessage = '';
  successMessage = '';
  registerForm: FormGroup;

  @Output() userRegister = new EventEmitter<any>();
  @Output() cancelRegisterForm = new EventEmitter<any>();

  constructor(private authenticationService: AuthenticationService ) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    })
  }

  cancel() {
    this.cancelRegisterForm.emit();
  }

  
  get email() {
    return  this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }
  

  // Méthode de création de compte
  tryRegister(value) {
    this.authenticationService.doRegister(value)
    .then(res => {
      console.log(res);
      this.errorMessage = '';
      this.successMessage = 'Your account has been created';
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = '';
    });
  }

}
