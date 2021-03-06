import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TaxesService {

  url = 'https://blitz-dev1.azurewebsites.net/ms-e-bill/api/taxes';

  constructor(private http: HttpClient) { }

  getTaxes(): Observable<any>{
    let dato = localStorage.getItem('authToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'x-application-id': 'c14ba89d-4e8a-4ffc-be9c-77e9a207914b',
        'Authorization': dato
      })
  };

    return this.http.get(this.url, httpOptions);
  }


}
