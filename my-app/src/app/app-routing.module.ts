import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [


{ path: 'login', component: LoginComponent },
{ path: 'welcome', component: WelcomeComponent},
//{ path: '**', redirectTo: 'login', pathMatch: 'full' }
//{ path: '**', redirectTo: 'login', pathMatch: 'full' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
