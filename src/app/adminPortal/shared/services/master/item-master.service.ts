import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemMaster } from '../../model/master/item.model';
@Injectable({
  providedIn: 'root'
})
export class ItemMasterService {
  
  dataList: Observable<ItemMaster[]>;
  selectItem: ItemMaster;
  constructor(private http: HttpClient) { }
  loadData(): Observable<ItemMaster[]> {
    const url = "http://localhost:64597/api/itemMaster";
    this.dataList = this.http.get<ItemMaster[]>(url);
    return this.http.get<ItemMaster[]>(url);
  }
  postItem(ut: ItemMaster):
   Observable<ItemMaster[]> {
    console.log(ut);
    const body: ItemMaster = {
      itemId: ut.itemId,
      itemName: ut.itemName,
      itemQuantity: ut.itemQuantity,
      itemUnit: ut.itemUnit,
      itemPrice: ut.itemPrice,
      unitId: ut.unitId,
      unitMaster: ut.unitMaster,
      typeId : ut.typeId,
      typeMaster : ut.typeMaster
    }
    this.selectItem=null;

    return this.http.post<ItemMaster[]>('http://localhost:64597/api/itemMaster', body);
  }
  getItemDataList(): Observable<ItemMaster[]> {
    return this.http.get<ItemMaster[]>('http://localhost:64597/api/itemMaster');
  }
  Delete(ut: ItemMaster) {
    return this.http.delete<ItemMaster[]>('http://localhost:64597/api/itemMaster/' + ut.itemId);
  }
}
