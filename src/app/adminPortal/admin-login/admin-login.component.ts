import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from "@angular/forms";
import { adminService } from '../shared/services/admin.service';
import { admin } from '../shared/services/admin.modal';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class LoginComponent implements OnInit {
admin : admin;
  constructor(private adminService : adminService,
    private changeDetectorRefs: ChangeDetectorRef,
     public router: Router,private authService:AuthService
    ,public snackBar: MatSnackBar) { }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });}
  ngOnInit() {
    this.resetForm();
  }
  resetForm(form? : NgForm)
  {
    if(form != null)
    form.reset();
    this.admin ={
adminUserName : '',
adminPassword :''
    }
  }
msg:string=null;
  onLogin(form : NgForm){

    this.adminService.adminLogin(form.value).subscribe(
      data => {
          console.log("POST Request is successful ", data);
     this.authService.sendToken("ok");
     this.router.navigate(['/Admin']);
          
      },
      error => {
        this.openSnackBar("Error","Invalid login details")
          console.log("message",error.text);
      });
    
  }
}
