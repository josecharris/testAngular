import { ProductService } from './../services/product.service';
import { TaxesModel } from './../models/taxes.model';
import { TaxesService } from '../services/taxes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
  providers: [TaxesService, ProductService]
})
export class AddproductComponent implements OnInit {

  code: string;
  name: string;
  value: number;
  taxes: string[];

  isSelected1 = false;
  isSelected2 = false;
  isSelected3 = false;
  isSelected4 = false;

  showTaxes = false;
  chain = new Array();

  tax: TaxesModel[] = [];

  constructor(private taxesService: TaxesService, private productService: ProductService) { }

  ngOnInit(): void {
    this.taxesService.getTaxes().subscribe(data => {
      data.results.map((record) => {
        let obj = record as TaxesModel;
        this.tax.push(obj);
      });
    });
  }

  addProduct(): void{
    const inpCode = (<HTMLInputElement>document.getElementById('code'));
    const inpName = (<HTMLInputElement>document.getElementById('name'));
    const url = 'wwww.google.com';
    const inpValue = (<HTMLInputElement>document.getElementById('value'));

    try {
      this.productService.addProduct(inpCode, inpName, url, inpValue, this.chain);
    } catch (error) {
      alert('Error al guardar el producto.');
    }
  }

  changeStatusTaxes(): void{
    this.showTaxes = !this.showTaxes;
  }
  changeStatusS1(): void{
    const inpTaxes = (<HTMLInputElement>document.getElementById('taxes'));

    this.isSelected1 = !this.isSelected1;
    if (this.isSelected1){
      this.chain.push('1');
    }else if (this.chain.length !== 0){
      this.chain.splice(this.chain.indexOf('1'), 1);
    }
    inpTaxes.value = this.chain.join(',');
  }
  changeStatusS2(): void{
    const inpTaxes = (<HTMLInputElement>document.getElementById('taxes'));
    this.isSelected2 = !this.isSelected2;
    if (this.isSelected2){
      this.chain.push('2');
    }else if (this.chain.length !== 0){
      this.chain.splice(this.chain.indexOf('2'), 1);
    }
    inpTaxes.value = this.chain.join(',');
  }
  changeStatusS3(): void{
    const inpTaxes = (<HTMLInputElement>document.getElementById('taxes'));
    this.isSelected3 = !this.isSelected3;
    if (this.isSelected3){
      this.chain.push('3');
    }else if (this.chain.length !== 0){
      this.chain.splice(this.chain.indexOf('3'), 1);
    }
    inpTaxes.value = this.chain.join(',');
  }
  changeStatusS4(): void{
    const inpTaxes = (<HTMLInputElement>document.getElementById('taxes'));
    this.isSelected4 = !this.isSelected4;
    if (this.isSelected4){
      this.chain.push('4');
    }else if (this.chain.length !== 0){
      this.chain.splice(this.chain.indexOf('4'), 1);
    }
    inpTaxes.value = this.chain.join(',');
  }

  changeStatus(id){
    switch (id){
      case 4:
        this.changeStatusS4();
        break;
      case 3:
        this.changeStatusS3();
        break;
      case 2:
        this.changeStatusS2();
        break;
      case 1:
        this.changeStatusS1();
        break;
    }
  }


}
