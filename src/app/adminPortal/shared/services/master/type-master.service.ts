import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeMaster } from '../../model/master/type-master';
@Injectable({
  providedIn: 'root'
})
export class TypeMasterService {

  dataList: Observable<TypeMaster[]>;
  selectType: TypeMaster;
  constructor(private http: HttpClient) { }
  loadData(): Observable<TypeMaster[]> {
    const url = "http://localhost:64597/api/typeMaster";
    this.dataList = this.http.get<TypeMaster[]>(url);
    return this.http.get<TypeMaster[]>(url);
  }
  postType(ut: TypeMaster):
   Observable<TypeMaster[]> {
    console.log(ut);
    const body: TypeMaster = {
      typeId: ut.typeId,
      typeName : ut.typeName,
      typeDescription : ut.typeDescription
   
    }
    this.selectType=null;

    return this.http.post<TypeMaster[]>('http://localhost:64597/api/typeMaster', body);
  }
  getTypeDataList(): Observable<TypeMaster[]> {
    return this.http.get<TypeMaster[]>('http://localhost:64597/api/typeMaster');
  }
  Delete(ut: TypeMaster) {
    return this.http.delete<TypeMaster[]>('http://localhost:64597/api/typeMaster/' + ut.typeId);
  }
}
