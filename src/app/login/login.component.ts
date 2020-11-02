import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../services/LoginService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  mailUser = '';
  passUser = '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  onLoginUser(): void{
    this.loginService.onLogin(this.mailUser, this.passUser).subscribe(data => {
      console.log(String(data));
      localStorage.setItem('authToken', String(data));
      this.router.navigate(['panel']);
    },
    error => { alert('Error al ingresar al sistema.'); });
  }

}
