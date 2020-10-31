import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  url = '';

  constructor(private http: HttpClient) { }

  addProduct(){
    console.log('Agregar');
  }

  getProducts(){
    console.log('obtener producto');
  }


}
