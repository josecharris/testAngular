import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  url = 'https://blitz-dev1.azurewebsites.net/ms-e-bill/api/product?page=1';
  urlAdd = 'https://blitz-dev1.azurewebsites.net/ms-e-bill/api/product/';

  token = localStorage.getItem('authToken');

  constructor(private http: HttpClient) { }

  addProduct(codep, namep, url, valuee, taxes): Observable<any>{
    const headers = new HttpHeaders()
             .set('content-type', 'application/json')
             .set('x-application-id', 'c14ba89d-4e8a-4ffc-be9c-77e9a207914b')
             .set('Authorization', this.token);
    const body = {
              code: codep,
              name: namep,
              urlImage: url,
              value: valuee,
              tax: taxes
    };
    return this.http.post<any>(this.urlAdd, body, { headers: headers });
  }

  getProducts(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'x-application-id': 'c14ba89d-4e8a-4ffc-be9c-77e9a207914b',
        'Authorization': this.token
      })
  };

    return this.http.get(this.url, httpOptions);
  }


}
