import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// import { unitMaster } from '../model/master/unit.model';
import { Observable } from 'rxjs';
import { unitMaster } from '../model/master/unit.model';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class UnitMasterService {
  
  constructor(private http: HttpClient ) {}
  loadData():Observable<unitMaster[]>{
    const url='http://localhost:64597/api/unitMaster';
    return this.http.get<unitMaster[]>(url);
  }
}  