import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { SupplierService } from '../../../shared/services/supplier/supplier.service';
import { NgForm } from '@angular/forms';
import { isEmptyObject } from 'jquery';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {

  constructor(private supplierService : SupplierService,private router: Router,private changeDetectorRefs: ChangeDetectorRef,public thisdialogRef: MatDialogRef< Component>, @Inject(MAT_DIALOG_DATA)public data: string) { }

  ngOnInit() {
    this.resetForm();

  }

  resetForm(form? : NgForm){
    if(form != null)
    form.reset();
    if(isEmptyObject(this.supplierService.selectSupplier))
    {
    this.supplierService.selectSupplier={
      supId:0,
      supName :'',
      supAddress:'',
      supMobNo:'',
      supMobNo2:'',
      supPincode:''
    }
    }
  }
    msg:string=null;

onSubmit(form : NgForm){
  this.supplierService.postSupplier(form.value)
  .subscribe(data=>{
    this.ngOnInit();
this.msg='success';
   this.changeDetectorRefs.detectChanges();
    
    this.resetForm(form);
    // this.toastr.success('Record insert successfully', 'Unit register');
  })
}
onCloseConfirm(){
  this.thisdialogRef.close('conf irm');

}

onCloseCancel(){
  this.thisdialogRef.close('cancel');

}
  }
  

