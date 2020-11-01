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
  showPanelAdd: boolean = false;

  products: ProductModel[] = [
    new ProductModel('7777', 'B1', 1, 'aaaaa', 'https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg'),
    new ProductModel('8888', 'B2', 2, 'bbbbb', 'https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg'),
    new ProductModel('9999', 'B3', 3, 'ccccc', 'https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg'),
    new ProductModel('0000', 'B4', 4, 'ddddd', 'https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg'),
  ];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
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
