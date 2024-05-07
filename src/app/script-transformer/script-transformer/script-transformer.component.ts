import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, UntypedFormGroup} from "@angular/forms";
import {ScriptTransformerServiceService} from "../script-transformer-service.service";
import {ScriptTransformation, STransformationParameters} from "../stransformation-parameter";

import { saveAs } from "file-saver";

@Component({
  selector: 'app-script-transformer',
  templateUrl: './script-transformer.component.html',
  styleUrls: ['./script-transformer.component.css']
})
export class ScriptTransformerComponent implements OnInit {
  dbName : string='';
  url : string='';
  port : string='';
  user1 : string='';
  user2 : string='';
  source_File_Name_User_1 : string='';
  source_File_Name_User_2 : string='';
  user1_role : string='';
  user2_role : string='';

  file0_regex_User_1 : string='';
  file1_regex_User_1 : string='';
  file0_regex_User_2: string='';
  file1_regex_User_2 : string='';
  form!: UntypedFormGroup;
  selectedFile: File = new File([], 'file');
  notValidExtension: Boolean = true;
  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});
  thirdFormGroup: FormGroup = this._formBuilder.group({thirdCtrl: ['']});
  forthFormGroup: FormGroup = this._formBuilder.group({forthCtrl: ['']});
  userFormGroup: FormGroup = this._formBuilder.group({userCtrl: ['']});
  params?: STransformationParameters=new STransformationParameters();
  sT?: ScriptTransformation=new ScriptTransformation();
  constructor(private service:ScriptTransformerServiceService,private _formBuilder: FormBuilder) {
    this.params=new STransformationParameters();
    this.sT=new ScriptTransformation();
  }

  onFileSelected(event:any): void {
    this.selectedFile = event.target.files[0];
    console.log("selected "+this.selectedFile)
  }

  transformer(){
    this.params=new STransformationParameters(this.dbName,this.url,this.port,this.user1,this.user2, this.source_File_Name_User_1,this.source_File_Name_User_2,this.file0_regex_User_1,this.file1_regex_User_1,this.file0_regex_User_2,this.file1_regex_User_2);
    let formData=new FormData();
    formData.append("file",this.selectedFile);
    formData.append("dbName",this.dbName.toString());
    formData.append("url",this.url.toString());
    formData.append("port",this.port.toString());
    formData.append("user1",this.user1.toString());
    formData.append("user2",this.user2.toString());
    formData.append("source_File_Name_User_1",this.source_File_Name_User_1.toString());
    formData.append("source_File_Name_User_2",this.source_File_Name_User_2.toString());
    formData.append("file0_regex_User_1",this.file0_regex_User_1.toString());
    formData.append("file1_regex_User_1",this.file1_regex_User_1.toString());
    formData.append("file0_regex_User_2",this.file0_regex_User_2.toString());
    formData.append("file1_regex_User_2",this.file1_regex_User_2.toString());
    formData.append("user1_role",this.user1_role.toString());
    formData.append("user2_role",this.user2_role.toString());
    //console.log("formData"+this.user1_role)
    this.service.getResult(formData).subscribe(blob => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'file.zip';
      link.click();
    });
  }
  saveAsFile(blob: any, filename: string) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const downloadLink = document.createElement('a');
      downloadLink.href = reader.result as string;
      downloadLink.download = filename;
      downloadLink.click();
    };
    reader.readAsDataURL(blob);
    console.log(" blob "+blob)
  }
  downloadFile() {
    /* let formData=new FormData();
     formData.append("file",this.selectedFile);
     this.service.getResult(formData).subscribe(response => {
           const blob = new Blob([response.], { type: 'application/octet-stream' });
           const url = window.URL.createObjectURL(blob);
           const anchor = document.createElement('a');
           anchor.download = 'file.pdf';
           anchor.href = url;
           anchor.click();
           window.URL.revokeObjectURL(url);
         }, error => {
          // this.snackBar.open('Failed to download file', 'Close', { duration: 3000 });
         });*/
  }
  ngOnInit(): void {
    this.params=new STransformationParameters('');
    this.sT=new ScriptTransformation('');
  }

  reset() {

  }

}
