import { ProductModel } from './../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './../services/product.service';

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

  constructor(private productService: ProductService) { }

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


  mostrar(): void {
    document.getElementById('sidebar').style.width = '300px';
    document.getElementById('contenido').style.marginLeft = '300px';
    document.getElementById('abrir').style.display = 'none';
    document.getElementById('cerrar').style.display = 'inline';
  }

  ocultar(): void {
    document.getElementById('sidebar').style.width = '0';
    document.getElementById('contenido').style.marginLeft = '0';
    document.getElementById('abrir').style.display = 'inline';
    document.getElementById('cerrar').style.display = 'none';
  }


}
