import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],

})
export class SigninComponent implements OnInit {
  password = ""
  email = ""
  hide = true
  constructor(public auth: AuthService, public route: Router) { }

  ngOnInit(): void {
  }

  login(){
    let status = false
    status = this.auth.signInAuth(this.email, this.password)
    if(status==true){
      this.route.navigateByUrl('/signup')
    }
  }
}
