import { Injectable } from '@angular/core';
import { FlatMaster } from '../../model/master/flat-master.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlatMasterService {
  
  dataList: Observable<FlatMaster[]>;
  selectFlat: FlatMaster;
  constructor(private http: HttpClient) { }
  loadData(): Observable<FlatMaster[]> {
    const url = "http://localhost:64597/api/flatMaster";
    this.dataList = this.http.get<FlatMaster[]>(url);
    return this.http.get<FlatMaster[]>(url);
  }
  postflat(ut: FlatMaster):
   Observable<FlatMaster[]> {
    console.log(ut);
    const body: FlatMaster = {
      flatId: ut.flatId,
      flatNo: ut.flatNo,
     
      
      societyId : ut.societyId,
      societyMaster : ut.societyMaster
    }
    this.selectFlat=null;

    return this.http.post<FlatMaster[]>('http://localhost:64597/api/flatMaster', body);
  }
  getFlatDataList(): Observable<FlatMaster[]> {
    return this.http.get<FlatMaster[]>('http://localhost:64597/api/flatMaster');
  }
  Delete(ut: FlatMaster) {
    return this.http.delete<FlatMaster[]>('http://localhost:64597/api/flatMaster/' + ut.flatId);
  }
}
