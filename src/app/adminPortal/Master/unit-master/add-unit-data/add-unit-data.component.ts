import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UnitService } from '../../../shared/services/master/unit-master.service';
// import { ToastrService } from 'ngx-toastr';
import { isEmptyObject } from 'jquery';
import {Router}  from '@angular/router';
import { UnitMasterComponent } from '../unit-master.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AddItemComponent } from '../../item-master/add-item/add-item.component';
@Component({
  selector: 'app-add-unit-data',
  templateUrl: './add-unit-data.component.html',
  styleUrls: ['./add-unit-data.component.css']
})
export class AddUnitDataComponent implements OnInit {

  constructor(private unitService : UnitService,
    private router: Router,
    private changeDetectorRefs: ChangeDetectorRef,
    public thisdialogRef: MatDialogRef< AddUnitDataComponent>, @Inject(MAT_DIALOG_DATA)public data: string) { }

  ngOnInit() {

    this.resetForm();

  }
  /******************Reset Form*********** */
resetForm(form? : NgForm){
  if(form != null)
  form.reset();
  if(isEmptyObject(this.unitService.selectUnit))
  {
  this.unitService.selectUnit={
    unitId:0,
    unitName :'',
    unitDescription:'',
  }
  }
}
/**************End Reset Form *************** */
msg:string=null;
/***********Insert Record******************** */

onSubmit(form : NgForm){


  console.log("onsubmit sa sasa SA S AS As");
  this.unitService.postUnit(form.value)
  .subscribe(data=>{
this.msg='success';
   this.changeDetectorRefs.detectChanges();
    
    
    // this.toastr.success('Record insert successfully', 'Unit register');
  })
}
onCloseConfirm(){
  this.thisdialogRef.close('confirm');

}

onCloseCancel(){
  this.thisdialogRef.close('cancel');

}
/* ******* End Insert Record *************************/
}
