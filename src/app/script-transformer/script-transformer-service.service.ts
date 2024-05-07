import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ScriptTransformerServiceService {
  SERVER_URL: string = "http://localhost:8088/ScriptTransformer";

  constructor(private httpClient:HttpClient ,private router:Router) {

  }
  public getResult(formData: any){
    console.log(formData+"/result")
    return this.httpClient.post(this.SERVER_URL+"/result", formData, { responseType: 'blob' });
  }
}
