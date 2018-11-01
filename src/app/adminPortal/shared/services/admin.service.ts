import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Response, ResponseType } from '@angular/http';

import { admin } from "./admin.modal";
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class adminService {
  readonly rootUrl='http://localhost:64597';
  constructor(private http: HttpClient) { }
  adminLogin(admin : admin){
    const body: admin={
      adminUserName : admin.adminUserName,
      adminPassword : admin.adminPassword
      }
       console.log(body);
       
       return  this.http.post(this.rootUrl + '/api/Admin', body
    ); ;
  }
}