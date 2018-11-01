import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { MAT_DIALOG_DATA,  MatDialogRef  } from '@angular/material';
import { NgForm } from '@angular/forms';
import { isEmptyObject } from 'jquery';
import { Router } from '@angular/router';
import { AreaMasterService } from '../../../shared/services/master/area-master.service';
import { cityMasterService } from '../../../shared/services/master/cityMaster.service';
import { cityMaster } from '../../../shared/model/master/city.model';

@Component({
  selector: 'app-add-area',
  templateUrl: './add-area.component.html',
  styleUrls: ['./add-area.component.css']
})
export class AddAreaComponent implements OnInit {

  constructor(private areamasterService: AreaMasterService,
    private citymasterService : cityMasterService, 
    private router: Router, private changeDetectorRefs: ChangeDetectorRef,
    public thisdialogRef: MatDialogRef<AddAreaComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {

    this.citymasterService.getcityDataList().subscribe(data => this.citys = data);

    
  }
 
  ngOnInit() {
    this.resetForm();
  }
  
  citys:  cityMaster[];
  selectCity: number;

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    if (isEmptyObject(this.areamasterService.selectArea)) {
      this.areamasterService.selectArea = {
        areaId: 0,
        areaName: '',
        cityId: null,
        cityMaster: null
        
        
      }
    }
  }
  msg: string = null;
  onSubmit(form: NgForm) {
    this.areamasterService.postArea(form.value)
      .subscribe(data => {
        this.msg = 'success';
        this.changeDetectorRefs.detectChanges();
        this.resetForm(form);
      })
  }
  onCloseConfirm() {
    this.thisdialogRef.close('conf irm');
  }

 
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

}
