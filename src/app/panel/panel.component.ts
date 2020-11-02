import { ProductModel } from './../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './../services/product.service';
import {Router } from '@angular/router';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  providers: [ProductService]
})
export class PanelComponent implements OnInit {

  findProduct: string;
  showPanelAdd = false;

  products: ProductModel[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      data.results.map((record) => {
        let objeto = record as ProductModel;
        this.products.push(objeto);
      });
    }, error => {
      alert('Error');
    });
  }

  logout(): void{
    this.router.navigate(['']);
    localStorage.setItem('authToken', 'logout');
  }


  mostrar(): void {
    (<HTMLInputElement>document.getElementById('sidebar')).style.width = '300px';
    (<HTMLInputElement>document.getElementById('contenido')).style.marginLeft = '300px';
    (<HTMLInputElement>document.getElementById('abrir')).style.display = 'none';
    (<HTMLInputElement>document.getElementById('cerrar')).style.display = 'inline';
  }

  ocultar(): void {
    (<HTMLInputElement>document.getElementById('sidebar')).style.width = '0';
    (<HTMLInputElement>document.getElementById('contenido')).style.marginLeft = '0';
    (<HTMLInputElement>document.getElementById('abrir')).style.display = 'inline';
    (<HTMLInputElement>document.getElementById('cerrar')).style.display = 'none';
  }


}
