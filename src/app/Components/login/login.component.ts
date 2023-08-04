import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { LoginService } from "src/app/Services/login.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService, private router: Router){}

  onlogin(){
    //get the username and password from the html form
    
    let username = (<HTMLInputElement>document.getElementById("username")).value;
    let password = (<HTMLInputElement>document.getElementById("password")).value;
    //create a user object
    let user = new User();
    user.username = username;
    user.password = password;
    //store the user
    localStorage.setItem('user',JSON.stringify(user));
    //call the login service and get the response message
    console.log(user)
    this.loginService.userLogin(user)
    .subscribe({
      next: (res)=>{
        alert(res.message);
        if(res.message=="Login Success"){
          //redirect to the home page
          this.router.navigate(["/home"]);
        }
      },
      error: (err)=>{
        alert(err?.error.message);
      }
    })
  }

  ngOnInit(){
  }

}
