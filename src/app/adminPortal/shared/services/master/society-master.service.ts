import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SocietyMaster } from '../../model/master/society-master';
import { AreaMaster } from '../../model/master/area-master';
@Injectable({
  providedIn: 'root'
})
export class SocietyMasterService {
 
  dataList: Observable<SocietyMaster[]>;
  selectSociety: SocietyMaster;
  constructor(private http: HttpClient) { }

  loadData(): Observable<SocietyMaster[]> {
    const url = "http://localhost:64597/api/societyMaster";
    this.dataList = this.http.get<SocietyMaster[]>(url);
    return this.http.get<SocietyMaster[]>(url);
  }
  postSociety(ut: SocietyMaster):
   Observable<SocietyMaster[]> {
    console.log(ut);
    const body: SocietyMaster = {
      societyId: ut.societyId,
      societyName : ut.societyName,
      areaId : ut.areaId, 
      areaMaster:ut.areaMaster
    }
    this. selectSociety=null;

    return this.http.post<SocietyMaster[]>('http://localhost:64597/api/societyMaster', body);
  }
  getSocietyDataList(): Observable<SocietyMaster[]> {
    return this.http.get<SocietyMaster[]>('http://localhost:64597/api/societyMaster');
  }
  Delete(ut: SocietyMaster) {
    return this.http.delete<SocietyMaster[]>('http://localhost:64597/api/societyMaster/' + ut.societyId);
  }
}
