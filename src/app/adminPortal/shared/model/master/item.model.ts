import { unitMaster } from '../../model/master/unit.model';
import { TypeMaster } from '../../model/master/type-master';
export class ItemMaster {
    itemId: number;
    itemName: string;
    itemQuantity: string;
    itemUnit: string;
    itemPrice: number;
    unitId: number;
    typeId: number;
    unitMaster: unitMaster; 
   
    typeMaster:  TypeMaster; 

}

