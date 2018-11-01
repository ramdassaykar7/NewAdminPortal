import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Supplier } from '../../model/supplier/supplier.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http : HttpClient) { }
  dataList:Observable<Supplier[]>;
  selectSupplier : Supplier;

loadData():Observable<Supplier[]>{
    const url='http://localhost:64597/api/supplierMaster';
    this.dataList=this.http.get<Supplier[]>(url);
     return this.http.get<Supplier[]>(url);
  }

  postSupplier(ut : Supplier):Observable<Supplier[]>{
    const body: Supplier={
      supId:ut.supId,
      supName : ut.supName,
      supAddress :ut.supAddress,
      supMobNo : ut.supMobNo,
      supMobNo2:ut.supMobNo2,
      supPincode:ut.supPincode
          }

    this.selectSupplier=null;

  return this.http.post<Supplier[]>('http://localhost:64597/api/supplierMaster', body);
  }

  getUnitDataList():Observable<Supplier[]>{
    return this.http.get<Supplier[]>('http://localhost:64597/api/supplierMaster');
  }
  Delete( ut : Supplier){
   
    return this.http.delete<Supplier[]>('http://localhost:64597/api/supplierMaster/'+ut.supId );
   //return null;
  }

}
