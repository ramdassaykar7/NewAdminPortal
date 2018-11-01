import{ FlatMaster } from './flat-master.model';
import { cityMaster } from './city.model';
import { AreaMaster } from './area-master';
import { SocietyMaster } from './society-master';

export class CustomerMaster{
    custId:number;
    custName:string;
    cityId:number;
    cityMaster : cityMaster;
    areaId:number;
    areaMaster : AreaMaster;
    societyId:number;
    societyMaster : SocietyMaster;
    flatId:number;
    flatMaster : FlatMaster;
    custMobNo:string;
    custMobNo2:string;
    custGeoLocation:string;

}
