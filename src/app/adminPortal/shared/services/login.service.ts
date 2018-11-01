import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  dataList: Observable<admin[]>;

  constructor(private http: HttpClient) { }

  loadData(): Observable<admin[]> {
    const url = "http://localhost:64597/api/";
    this.dataList = this.http.get<admin[]>(url);
    return this.http.get<admin[]>(url);
  }
}
