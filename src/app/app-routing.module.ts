import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { AppComponent } from './app.component';
import { ClientComponent } from './Components/client/client.component';

const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'home' , component: ClientComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
