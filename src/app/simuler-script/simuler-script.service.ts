import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SimulerScriptService {
  private SERVER_URL = 'http://localhost:9003/Simulation';

  constructor(private httpClient:HttpClient ,private router:Router) {

  }
  public getResult(formData: any){
    return this.httpClient.post(this.SERVER_URL+"/simulate", formData);
  }
  public showFile(s: any){
    let formData=new FormData();
    formData.append("id",s.id);
    return this.httpClient.post(this.SERVER_URL+"/showFile", formData,{responseType: 'blob'} );
  }
  public getAllResult(){
    return this.httpClient.get(this.SERVER_URL+"/all");
  }
  public validate(s: any){
    let formData=new FormData();
    formData.append("id",s);
    return this.httpClient.post(this.SERVER_URL+"/validate",formData);
  }
  public reject(s: any){
    let formData=new FormData();
    formData.append("id",s);
    return this.httpClient.post(this.SERVER_URL+"/reject",formData);
  }
}
