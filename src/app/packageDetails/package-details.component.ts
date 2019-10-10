import { Component, OnInit } from '@angular/core';
import { SelectItem } from '../../../node_modules/primeng/api';
import {PickListModule} from '../../../node_modules/primeng/picklist';
import {SourceData}  from './SourceData';

@Component({
  selector: 'app-package',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.scss']
}) 
 
export class PackageDetailsComponent implements OnInit { 
  
  sourceServicesData: [] = [];
  targetServicesData:[] = [];
  noData : boolean = false;

  ngOnInit() {
    
  } 
  

  constructor() {}
    EditPackage(){}  


    save(){
      // debugger;
      if(this.targetServicesData != null && this.targetServicesData.length <= 0){
        this.noData = true;
        return;
      }


    }



}