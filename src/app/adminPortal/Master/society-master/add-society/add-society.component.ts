import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { MAT_DIALOG_DATA,  MatDialogRef  } from '@angular/material';
import { NgForm } from '@angular/forms';
import { isEmptyObject } from 'jquery';
import { Router } from '@angular/router';
import { SocietyMasterService } from '../../../shared/services/master/society-master.service';
import { AreaMasterService } from '../../../shared/services/master/area-master.service';
import { AreaMaster } from '../../../shared/model/master/area-master';

@Component({
  selector: 'app-add-society',
  templateUrl: './add-society.component.html',
  styleUrls: ['./add-society.component.css']
})
export class AddSocietyComponent implements OnInit {

  constructor(private societymasterService: SocietyMasterService,
    private areamasterService: AreaMasterService, 
    private router: Router, private changeDetectorRefs: ChangeDetectorRef,
    public thisdialogRef: MatDialogRef<AddSocietyComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
    
    this. areamasterService. getAreaDataList().subscribe(data => this.areas = data);

  }
 
  ngOnInit() {
    this.resetForm();
  }
  
  areas: AreaMaster[];
  selectArea: number;

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    if (isEmptyObject(this.societymasterService.selectSociety)) {
      this.societymasterService.selectSociety = {
        societyId: 0,
        societyName: '',
        areaId: null,
        areaMaster: null
        
      }
    }
  }
  msg: string = null;
  onSubmit(form: NgForm) {
    this.societymasterService.postSociety(form.value)
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
