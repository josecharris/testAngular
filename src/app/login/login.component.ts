import { Component, OnInit } from '@angular/core';
import { LoginService } from './../LoginService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  mailUser = '';
  passUser = '';

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onLoginUser(): void{
    this.loginService.onLogin(this.mailUser, this.passUser).subscribe(data => {
      console.log(data);
    });
  }

}
