import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { FlatMasterService } from 'src/app/adminPortal/shared/services/master/flat-master.service';
import { SocietyMasterService } from 'src/app/adminPortal/shared/services/master/society-master.service';
import { MatSnackBar, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { SocietyMaster } from 'src/app/adminPortal/shared/model/master/society-master';
import { NgForm } from '@angular/forms';
import { isEmptyObject } from 'jquery';

@Component({
  selector: 'app-add-flat',
  templateUrl: './add-flat.component.html',
  styleUrls: ['./add-flat.component.css']
})
export class AddFlatComponent implements OnInit {
  constructor(private flatmasterService: FlatMasterService, 
    private societymasterService : SocietyMasterService,
    public snackBar: MatSnackBar,
    private router: Router, private changeDetectorRefs: ChangeDetectorRef,
    public thisdialogRef: MatDialogRef<AddFlatComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
    this. societymasterService.getSocietyDataList().subscribe(data => this.socities = data);
  }
 
  
  openSnackBar(message: string, action: string) {
    this.snackBar.open( 'New Record Added Successfully', action, {
      duration: 2000,
    });
  }
  ngOnInit() {
    this.resetForm();
  }
  socities: SocietyMaster[];
  selectSociety: number;
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    if (isEmptyObject(this.flatmasterService.selectFlat)) {
      this.flatmasterService.selectFlat = {
        flatId:0,
        flatNo: 0,
        societyId : null,
        societyMaster : null
      }
    }
  }
  msg: string = null;
  onSubmit(form: NgForm) {
    this.flatmasterService.postflat(form.value)
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