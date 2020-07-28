import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  password = ""
  email = ""
  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit(): void {
  }

  signup(){
    let status = false
    this.auth.signUpAuth(this.email, this.password)
  }

}
