import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { MAT_DIALOG_DATA,  MatDialogRef  } from '@angular/material';
import { NgForm } from '@angular/forms';
import { isEmptyObject } from 'jquery';
import { Router } from '@angular/router';
import { TypeMasterService } from '../../../shared/services/master/type-master.service';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css']
})
export class AddTypeComponent implements OnInit {

  constructor(private typemasterService: TypeMasterService, 
    private router: Router, private changeDetectorRefs: ChangeDetectorRef,
    public thisdialogRef: MatDialogRef<AddTypeComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
    
  }
 
  ngOnInit() {
    this.resetForm();
  }
  
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    if (isEmptyObject(this.typemasterService.selectType)) {
      this.typemasterService.selectType = {
        typeId: 0,
        typeName: '',
        typeDescription: ''
        
      }
    }
  }
  msg: string = null;
  onSubmit(form: NgForm) {
    this.typemasterService.postType(form.value)
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
