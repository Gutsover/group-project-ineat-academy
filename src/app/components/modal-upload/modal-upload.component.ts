import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.scss']
})
export class ModalUploadComponent implements OnInit {
  @Output()
  addAttendee = new EventEmitter<any>();

  uploadForm: FormGroup;
  selectedFile: File;
  
  constructor() {}
  
  ngOnInit() {
    this.uploadForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
    });
  }  
  
  onFileSeclected(event){
    this.selectedFile = event.target.files[0];
  }
  
  onUpload() {
    const newImage = {
      name: this.uploadForm.value['name'],
      description: this.uploadForm.value['description'],
      file: this.selectedFile
    };  
    
    this.addAttendee.emit(newImage);
  }

}
