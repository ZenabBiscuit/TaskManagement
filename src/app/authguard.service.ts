import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(public auth: AuthService, public router: Router) {}

  canActivate() : boolean{
    if(this.auth.isUserSignedIn()){
      return true
    }
    else{
      this.router.navigateByUrl("\signin")
      return false
    }
  }
}
