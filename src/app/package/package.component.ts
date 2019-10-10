import { Component, OnInit } from '@angular/core';
import { SelectItem } from '../../../node_modules/primeng/api';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
}) 
 
export class PackageComponent implements OnInit{ 

  ngOnInit() {
  } 
  cars: SelectItem[];

  selectedCars1: string[] = [];
  
  selectedCars2: string[] = [];

  items: SelectItem[];

  item: string;

  constructor() {
      this.cars = [
          {label: 'Audi', value: 'Audi'},
          {label: 'BMW', value: 'BMW'},
          {label: 'Fiat', value: 'Fiat'},
          {label: 'Ford', value: 'Ford'},
          {label: 'Honda', value: 'Honda'},
          {label: 'Jaguar', value: 'Jaguar'},
          {label: 'Mercedes', value: 'Mercedes'},
          {label: 'Renault', value: 'Renault'},
          {label: 'VW', value: 'VW'},
          {label: 'Volvo', value: 'Volvo'},
      ];

      this.items = [];
      for (let i = 0; i < 10000; i++) {
          this.items.push({label: 'Item ' + i, value: 'Item ' + i});
      }
  }
    addPackage(){}

}