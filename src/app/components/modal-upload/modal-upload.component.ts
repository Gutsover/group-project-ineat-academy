import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.scss']
})
export class ModalUploadComponent implements OnInit {
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
    const data = {
      name: this.uploadForm.value['name'],
      description: this.uploadForm.value['description'],
      file: this.selectedFile
    };


    
    
    console.log(this.uploadForm.value);
  }

}
