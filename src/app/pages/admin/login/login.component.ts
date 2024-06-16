import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  loginObj: any = {
    userName: '',
    password: ''
  }

  constructor(private router: Router){}

  onLogin(){
    if (this.loginObj.userName == "admin" && this.loginObj.password == "admin"){
      this.router.navigate(['/products'])
    }else{
      alert("Login failed")
    }
  }
}
