import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService,private router:Router){
  }
  canActivate(
    route: ActivatedRouteSnapshot,state: RouterStateSnapshot):  boolean {
      if(this.authService.isLoggednIn()){
        return true;
      }else{
        this.router.navigate(["login"]);
        return false;
      }
  }
}