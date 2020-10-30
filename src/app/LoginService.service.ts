import { Injectable } from '@angular/core';
import { ResponseInterface } from './models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService{

  constructor(private http: HttpClient){}

  url = 'https://blitz-dev1.azurewebsites.net/ms-user/api/users/login';

  onLogin(mailuser, password): Observable<ResponseInterface>{
    const headers = new HttpHeaders()
             .set('content-type', 'application/json')
             .set('x-application-id', 'c14ba89d-4e8a-4ffc-be9c-77e9a207914b');

    const body = {
              Email: mailuser,
              Password: password,
    };
    return this.http.post<ResponseInterface>(this.url, body, { headers: headers });
  }
}
