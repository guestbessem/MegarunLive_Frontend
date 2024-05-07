import { Component, OnInit } from '@angular/core';
import {SimulerScriptService} from "../simuler-script.service";

interface Result{
    rapport:string;
}
@Component({
  selector: 'app-simuler-script',
  templateUrl: './simuler-script.component.html',
  styleUrls: ['./simuler-script.component.css']
})
export class SimulerScriptComponent implements OnInit {
 url: String ='';
 port:String='';
 user: String='';
    file: File = new File([], 'file');
 password: String = '';
 drivers = ['Oracle','MySQL'];
 driver = 'Oracle';
 rapport: string | undefined;
    selectedFile: File = new File([], 'file');

    constructor(private service:SimulerScriptService) { }

  ngOnInit(): void {
  }

  doSimulation(){
    let formData=new FormData();
    formData.append('file',this.file);
    formData.append('url',this.url.toString());
    formData.append('port',this.port.toString());
    formData.append('user',this.user.toString());
    formData.append('pwd',this.password.toString());
    formData.append('driver',this.driver);
   this.service.getResult(formData).subscribe((response)=> {this.rapport=(<Result>response).rapport;});

  }

    onFileSelected(event:any): void {
        this.file = event.target.files[0];
    }
}
