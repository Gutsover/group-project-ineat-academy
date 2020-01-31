import { Component, OnInit, Input, Output,EventEmitter, OnChanges } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnChanges {


  @Input() user;
  @Output() userLogout = new EventEmitter<any>();
  @Output() userLogin = new EventEmitter<any>();


  @Output() connexionForm;

  constructor() { }

  onUserLogin() {
    this.userLogin.emit(true);
    console.log(this.connexionForm);
  }

  logout() {
    console.log('user logout');
    this.userLogout.emit(true);
  }

  ngOnChanges() {
    console.log(this.user);
  }

}
