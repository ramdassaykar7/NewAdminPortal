import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
  
  constructor(private myRoute: Router) { }
  sendToken(token: string) {
    localStorage.setItem("LoggedInUser", token)
  }
  getToken() {
    return localStorage.getItem("LoggedInUser")
  }
  isLoggednIn() {
    
    console.log("IsLoggedIn");
    return this.getToken() !== null;
  }
  logout() {
    console.log("logout btn ");
    localStorage.removeItem("LoggedInUser");
    this.myRoute.navigate(["Login"]);
  }
}