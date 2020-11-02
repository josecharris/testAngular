import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
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

  constructor() { }

  ngOnInit(): void {
  }

  changeStatusTaxes(): void{
    this.showTaxes = !this.showTaxes;
  }
  changeStatusS1(): void{
    const inpTaxes = (<HTMLInputElement>document.getElementById('taxes'));

    this.isSelected1 = !this.isSelected1;
    if (this.isSelected1){
      this.chain.push('IVA 69');
    }else if (this.chain.length !== 0){
      this.chain.splice(this.chain.indexOf('1'), 1);
    }
    inpTaxes.value = this.chain.join(',');
  }
  changeStatusS2(): void{
    const inpTaxes = (<HTMLInputElement>document.getElementById('taxes'));
    this.isSelected2 = !this.isSelected2;
    if (this.isSelected2){
      this.chain.push('IVA 68');
    }else if (this.chain.length !== 0){
      this.chain.splice(this.chain.indexOf('2'), 1);
    }
    inpTaxes.value = this.chain.join(',');
  }
  changeStatusS3(): void{
    const inpTaxes = (<HTMLInputElement>document.getElementById('taxes'));
    this.isSelected3 = !this.isSelected3;
    if (this.isSelected3){
      this.chain.push('IVA 67');
    }else if (this.chain.length !== 0){
      this.chain.splice(this.chain.indexOf('3'), 1);
    }
    inpTaxes.value = this.chain.join(',');
  }
  changeStatusS4(): void{
    const inpTaxes = (<HTMLInputElement>document.getElementById('taxes'));
    this.isSelected4 = !this.isSelected4;
    if (this.isSelected4){
      this.chain.push('IVA 6');
    }else if (this.chain.length !== 0){
      this.chain.splice(this.chain.indexOf('4'), 1);
    }
    inpTaxes.value = this.chain.join(',');
  }


}
