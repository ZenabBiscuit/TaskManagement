import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthguardService } from 'src/app/authguard.service'
const routes: Routes = [
  {path:'home', component: CardsComponent, canActivate: [AuthguardService]},
  {path:'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path:'', redirectTo:'signin', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
