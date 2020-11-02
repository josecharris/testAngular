import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from './../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  url = 'https://blitz-dev1.azurewebsites.net/ms-e-bill/api/product?page=1';

  constructor(private http: HttpClient) { }

  addProduct(){
    console.log('Agregar');
  }

  getProducts(): Observable<any>{
    let dato = localStorage.getItem('authToken');
    console.log('obtener producto  ' + dato);
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
