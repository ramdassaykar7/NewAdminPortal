import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AreaMaster } from '../../model/master/area-master';
@Injectable({
  providedIn: 'root'
})
export class AreaMasterService {

  dataList: Observable<AreaMaster[]>;
  selectArea: AreaMaster;
  constructor(private http: HttpClient) { }
  loadData(): Observable<AreaMaster[]> {
    const url = "http://localhost:64597/api/areaMaster";
    this.dataList = this.http.get<AreaMaster[]>(url);
    return this.http.get<AreaMaster[]>(url);
  }
  postArea(ut: AreaMaster):
   Observable<AreaMaster[]> {
    console.log(ut);
    const body: AreaMaster = {
      areaId: ut.areaId,
      areaName : ut.areaName,
      cityId : ut.cityId,
      cityMaster : ut.cityMaster
    }
    this.selectArea=null;

    return this.http.post<AreaMaster[]>('http://localhost:64597/api/areaMaster', body);
  }
  getAreaDataList(): Observable<AreaMaster[]> {
    return this.http.get<AreaMaster[]>('http://localhost:64597/api/areaMaster');
  }
  Delete(ut: AreaMaster) {
    return this.http.delete<AreaMaster[]>('http://localhost:64597/api/areaMaster/' + ut.areaId);
  }
}
