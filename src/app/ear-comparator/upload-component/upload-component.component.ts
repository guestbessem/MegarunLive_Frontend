import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-upload-component',
  templateUrl: './upload-component.component.html',
  styleUrls: ['./upload-component.component.css']
})

export class UploadComponentComponent {
  selectedFile: File = new File([], 'file');
  @Output() newFileEvent = new EventEmitter();
  notValidExtension: Boolean = true;
  constructor(private http: HttpClient){}

  onFileSelected(event:any): void {
    this.selectedFile = event.target.files[0];
    this.newFileEvent.emit(this.selectedFile);
  }

}


