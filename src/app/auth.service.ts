import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isSignedIn = false;
  loggedInUserId

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.user.subscribe(res=>{
      if(res.uid){
        this.loggedInUserId = res.uid
        this.isSignedIn = true
        this.router.navigateByUrl("/home")
      }
      else{
        this.isSignedIn = false
      }
    })
  }

  signInAuth(email, password){
    this.afAuth.signInWithEmailAndPassword(email, password).then(res=>{
      this.isSignedIn = true
      this.loggedInUserId  = res.user.uid
      this.router.navigateByUrl("/home")
   })

    .catch(res=>{
      alert("Invalid Email Id or Password")
      this.isSignedIn = false
      this.router.navigateByUrl("/signin")
    })

    .finally();{
      return this.isSignedIn
    }
  }

  LogoutAuth(){
    this.isSignedIn = false
    this.afAuth.signOut()
    location.reload()
    this.router.navigateByUrl("/signin")
  }

  isUserSignedIn(){
    return this.isSignedIn
  }

  signUpAuth(email, password){
    this.afAuth.createUserWithEmailAndPassword(email, password).then(res=>{
      this.isSignedIn = true
      this.loggedInUserId  = res.user.uid
      this.router.navigateByUrl("/home")
    }).catch(err=>{
      alert(err)
    })
  }

  getUserId(){
    return this.loggedInUserId
  }

}
