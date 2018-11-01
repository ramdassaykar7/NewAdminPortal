import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cityMaster } from '../../model/master/city.model';
@Injectable({
  providedIn: 'root'
})
export class cityMasterService {
  
  dataList: Observable<cityMaster[]>;
  selectcity: cityMaster;
  constructor(private http: HttpClient) { }
  loadData(): Observable<cityMaster[]> {
    const url = "http://localhost:64597/api/cityMaster";
    this.dataList = this.http.get<cityMaster[]>(url);
    return this.http.get<cityMaster[]>(url);
  }
  postCity(ut: cityMaster):
   Observable<cityMaster[]> {
    console.log(ut);
    const body: cityMaster = {
      cityId: ut.cityId,
      cityName: ut.cityName,
    }
    this.selectcity=null;
    return this.http.post<cityMaster[]>('http://localhost:64597/api/cityMaster',ut);
  }
  getcityDataList(): Observable<cityMaster[]> {
    return this.http.get<cityMaster[]>('http://localhost:64597/api/cityMaster');
  }
  Delete(ut: cityMaster) {
    return this.http.delete<cityMaster[]>('http://localhost:64597/api/cityMaster/' + ut.cityId);
  }
}
