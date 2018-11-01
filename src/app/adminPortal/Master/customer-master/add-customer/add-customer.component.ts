import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { CustomerMasterService } from '../../../shared/services/master/customer-master.service';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FlatMasterService } from '../../../shared/services/master/flat-master.service';
import { Router } from '@angular/router';
import { FlatMaster } from '../../../shared/model/master/flat-master.model';
import { NgForm } from '@angular/forms';
import { isEmptyObject } from 'jquery';
import { cityMasterService } from '../../../shared/services/master/cityMaster.service';
import { AreaMasterService } from '../../../shared/services/master/area-master.service';
import { SocietyMasterService } from '../../../shared/services/master/society-master.service';
import { AreaMaster } from '../../../shared/model/master/area-master';
import { cityMaster } from '../../../shared/model/master/city.model';
import { SocietyMaster } from '../../../shared/model/master/society-master';
declare var $:any;

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  constructor(private customermasterService: CustomerMasterService, 
    private citymasterService : cityMasterService,
    private areamasterService : AreaMasterService,
    private SocietyMasterService : SocietyMasterService,
    private flatmasterService : FlatMasterService,public snackBar: MatSnackBar,
    private router: Router, private changeDetectorRefs: ChangeDetectorRef,
    public thisdialogRef: MatDialogRef<AddCustomerComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
    this.citymasterService. getcityDataList().subscribe(data => this.cities = data);
    this.areamasterService. getAreaDataList().subscribe(data => this.areas = data);
    this.SocietyMasterService. getSocietyDataList().subscribe(data => this.societies = data);
    this.flatmasterService. getFlatDataList().subscribe(data => this.flats = data);
  }
 
  
  openSnackBar(message: string, action: string) {
    this.snackBar.open( 'New Record Added Successfully', action, {
      duration: 2000,
    });
  }
  ngOnInit() {
    this.resetForm();
  }
  cities: cityMaster[];
  selectCity: number;
  
  areas: AreaMaster[];
  selectArea : number;

  societies: SocietyMaster[];
  selectSociety: number;

  flats: FlatMaster[];
  selectFlat : number;
 

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    if (isEmptyObject(this.customermasterService.selectCustomer)) {
      this.customermasterService.selectCustomer = {
        custId: 0,
        custName: '',
        cityId: null,
        cityMaster : null,
        areaId: null,
        areaMaster : null,
        societyId: null,
        societyMaster : null,
        flatId : null,
        flatMaster : null,
        custMobNo : '',
        custMobNo2 : '',
        custGeoLocation : ''


      }
    }
  }
  msg: string = null;
  onSubmit(form: NgForm) {
    this.customermasterService.postCustomerMaster(form.value)
      .subscribe(data => {
        this.msg = 'success';
        this.changeDetectorRefs.detectChanges();
        this.resetForm(form);
      })
  }
  onCloseConfirm() {
    this.thisdialogRef.close('confirm');
  }

 
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}