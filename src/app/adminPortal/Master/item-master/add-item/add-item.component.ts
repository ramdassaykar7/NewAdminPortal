import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { MAT_DIALOG_DATA,  MatDialogRef, MatSnackBar  } from '@angular/material';
import { NgForm } from '@angular/forms';
import { isEmptyObject } from 'jquery';
import { Router } from '@angular/router';
import { UnitService } from '../../../shared/services/master/unit-master.service';
import { unitMaster } from '../../../shared/model/master/unit.model';
import { ItemMasterService } from '../../../shared/services/master/item-master.service';
import { TypeMasterService } from '../../../shared/services/master/type-master.service';
import { TypeMaster } from '../../../shared/model/master/type-master';

  @Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  constructor(private itemmasterService: ItemMasterService, 
    private unitService: UnitService,public snackBar: MatSnackBar,
    private typemasterService : TypeMasterService,
    private router: Router, private changeDetectorRefs: ChangeDetectorRef,
    public thisdialogRef: MatDialogRef<AddItemComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
    this.unitService.getUnitDataList().subscribe(data => this.units = data);
    this. typemasterService.getTypeDataList().subscribe(data => this.types = data);
  }
 
  
  openSnackBar(message: string, action: string) {
    this.snackBar.open( 'New Record Added Successfully', action, {
      duration: 2000,
    });
  }
  ngOnInit() {
    this.resetForm();
  }
  units: unitMaster[];
  selectUnit: number;

  types:  TypeMaster[];
  selectType: number;

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    if (isEmptyObject(this.itemmasterService.selectItem)) {
      this.itemmasterService.selectItem = {
        itemId: 0,
        itemName: '',
        itemQuantity: '',
        itemUnit: '',
        itemPrice: null,
        unitId: null,
        unitMaster: null,
        typeId : null,
        typeMaster : null
      }
    }
  }
  msg: string = null;
  onSubmit(form: NgForm) {
    this.itemmasterService.postItem(form.value)
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