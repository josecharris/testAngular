import { Injectable } from '@angular/core';
import { ResponseInterface } from './../models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService{

  url = 'https://blitz-dev1.azurewebsites.net/ms-user/api/users/login';
  response: string;

  constructor(private http: HttpClient){}

  onLogin(mailuser, password): Observable<ResponseInterface>{
    const headers = new HttpHeaders()
             .set('content-type', 'application/json')
             .set('x-application-id', 'c14ba89d-4e8a-4ffc-be9c-77e9a207914b');

    const body = {
              Email: mailuser,
              Password: password,
    };
    this.http.post(this.url, body, { headers: headers }).subscribe(data => {
    });
    return this.http.post<ResponseInterface>(this.url, body, { headers: headers });
  }
}
