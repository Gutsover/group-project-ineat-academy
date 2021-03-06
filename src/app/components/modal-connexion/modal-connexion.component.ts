import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-connexion',
  templateUrl: './modal-connexion.component.html',
  styleUrls: ['./modal-connexion.component.scss']
})
export class ModalConnexionComponent implements OnInit {

  constructor() { }
  profileForm: FormGroup;
  
  ngOnInit() {
    this.profileForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }


  @Output() userLogin = new EventEmitter<any>();

  @Output() cancelConnexionForm = new EventEmitter<any>();

  

  login() {
    this.userLogin.emit(this.profileForm.value);
  }

  cancel() {
    this.cancelConnexionForm.emit();
  }

 
  get email() { return this.profileForm.get('email'); }

  get password() { return this.profileForm.get('password'); }

}