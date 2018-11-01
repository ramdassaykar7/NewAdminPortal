import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { cityMasterService } from '../../../shared/services/master/cityMaster.service';
// import { ToastrService } from 'ngx-toastr';
import { isEmptyObject } from 'jquery';
import {Router}  from '@angular/router';
import { cityMasterComponent } from '../city-master.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AddItemComponent } from '../../item-master/add-item/add-item.component';
@Component({
  selector: 'app-add-city-data',
  templateUrl: './add-city-data.component.html',
  styleUrls: ['./add-city-data.component.css']
})
export class AddcityDataComponent implements OnInit {
 
  constructor(private cityService : cityMasterService,private router: Router,private changeDetectorRefs: ChangeDetectorRef,public thisdialogRef: MatDialogRef< AddcityDataComponent>, @Inject(MAT_DIALOG_DATA)public data: string) { }

  ngOnInit() {
   this.resetForm();

  }
  /******************Reset Form*********** */
resetForm(form? : NgForm){
  if(form != null)
  form.reset();
  if(isEmptyObject(this.cityService.selectcity ))
  {
  this.cityService.selectcity={
    cityId:0,
    cityName :''
  }
  }
}
/**************End Reset Form *************** */
msg:string=null;
/***********Insert Record******************** */

onSubmit(form : NgForm){


  this.cityService.postCity(form.value)
  .subscribe(data=>{
this.msg='success';
   this.changeDetectorRefs.detectChanges();
    
    
    // this.toastr.success('Record insert successfully', 'city register');
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
