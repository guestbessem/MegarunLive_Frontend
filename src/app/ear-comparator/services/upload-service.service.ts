import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {
  SERVER_URL: string = "http://localhost:9001/Comparator";

  constructor(private httpClient:HttpClient ,private router:Router) {

  }

  public getComparisonResult(formData: any){
    return this.httpClient.post(this.SERVER_URL+"/result", formData);
  }
}
