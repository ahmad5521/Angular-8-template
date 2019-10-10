import { Table } from 'primeng/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-customerList',
  templateUrl: './customerList.component.html',
  styleUrls: ['./customerList.component.css']
})
export class CustomerListComponent implements OnInit {

  @ViewChild('individualTable', { static: true }) individualTable: Table;


  productCodes: any = [];
  oldProductCodes: any = [];
  selectProductCodes: any = [];


  individualCustomersData: any = [];
  first: number = 0;
  rows: number = 0;
  pageLinks: number;
  rowsPerPageOptions: any[];
  pageSize: number;
  pageNumber: number = 1;

  items: MenuItem[];


  constructor() {


    this.pageSize = 10;

   }

  ngOnInit() {

    this.productCodes = [
      {
        productCode: "All",
      },
      {
        productReferenceNumber: "5010000001",
        productCode: "001",
        productNameAR: "3",
        productNameEN: "2",
        description: "sdsdfert"
      },
      {
        productReferenceNumber: "5010000001",
        productCode: "002",
        productNameAR: "3",
        productNameEN: "2",
        description: "sdsdfert"
      },
      {
        productReferenceNumber: "5010000001",
        productCode: "003",
        productNameAR: "3",
        productNameEN: "2",
        description: "sdsdfert"
      },
      {
        productReferenceNumber: "5010000001",
        productCode: "004",
        productNameAR: "3",
        productNameEN: "2",
        description: "sdsdfert"
      },
      {
        productReferenceNumber: "5010000001",
        productCode: "005",
        productNameAR: "3",
        productNameEN: "2",
        description: "sdsdfert"
      },
    ];

    
    
    this.items = [
      { label: 'View', icon: 'fal fa-fw fa-eye text-elm-4' },
      { label: 'Update', icon: 'fal fa-fw fa-sync-alt text-elm-4' },
      { label: 'Link', icon: 'fal fa-fw fa-link text-elm-4' },
      { label: 'Merge', icon: 'fal fa-fw fa-share-alt text-elm-4' }
    ];
  }


  
  loadIndividualData(event) {
    this.individualCustomersData = [
      {
        CustomerReferenceNumber:"1233444",
        EnglishName:"1233444",
        ArabicName:"1233444",
        IdNumber:"1233444",
        IdType:"1233444",
        IssueDateGregorian:"1233444",
        IssueDateHijri:"1233444",
        Nationality:"1233444",
        RegistrationData:"1233444"
      },
      {
        CustomerReferenceNumber:"1233444",
        EnglishName:"1233444",
        ArabicName:"1233444",
        IdNumber:"1233444",
        IdType:"1233444",
        IssueDateGregorian:"1233444",
        IssueDateHijri:"1233444",
        Nationality:"1233444",
        RegistrationData:"1233444"
      },
      {
        CustomerReferenceNumber:"1233444",
        EnglishName:"1233444",
        ArabicName:"1233444",
        IdNumber:"1233444",
        IdType:"1233444",
        IssueDateGregorian:"1233444",
        IssueDateHijri:"1233444",
        Nationality:"1233444",
        RegistrationData:"1233444"
      },
      {
        CustomerReferenceNumber:"1233444",
        EnglishName:"1233444",
        ArabicName:"1233444",
        IdNumber:"1233444",
        IdType:"1233444",
        IssueDateGregorian:"1233444",
        IssueDateHijri:"1233444",
        Nationality:"1233444",
        RegistrationData:"1233444"
      },
      {
        CustomerReferenceNumber:"1233444",
        EnglishName:"1233444",
        ArabicName:"1233444",
        IdNumber:"1233444",
        IdType:"1233444",
        IssueDateGregorian:"1233444",
        IssueDateHijri:"1233444",
        Nationality:"1233444",
        RegistrationData:"1233444"
      },
    ];
  }




}
