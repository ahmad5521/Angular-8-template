import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ConfirmationService } from 'primeng/api';
@Component({
  templateUrl: './index.component.html'
})

export class ListSpecificComponent implements OnInit {

  @ViewChild('specificTable', { static: true }) specificTable: Table;

  specificsData: any = [];
  productCode: string = '002';

  pageLinks: number = 8;
  rowsPerPageOptions =[5, 10, 20];
  pageSize: number = 10;

  pageNumber: number = 1;
  addEditObject: any = {};

  dataTypeValues: any[] = [];

  submitted: boolean = false;
  isSubmitting: boolean = false;

  constructor(private confirmationService: ConfirmationService) {
  }

  ngOnInit() {
      
    this.dataTypeValues.push(
      { 'DataTypeValue': 'string' },
      { 'DataTypeValue': 'number' },
      { 'DataTypeValue': 'date' },
      { 'DataTypeValue': 'boolean' }
    );
  }

  loadData(event) {
    // debugger;
    var self = this;

    self.specificTable.loading = true;
    self.pageNumber = (event.first / event.rows) + 1;
    this.pageSize = Number(event.rows);

    self.specificsData = [
      { 'key' : 'Key1', 'dataTypeValue' : 'string' , 'format' : 'Text' , 'description' : 'description'  },
      { 'key' : 'Key2', 'dataTypeValue' : 'string' , 'format' : 'Text' , 'description' : 'description'  },
      { 'key' : 'Key3', 'dataTypeValue' : 'string' , 'format' : 'Text' , 'description' : 'description'  },
      { 'key' : 'Key4', 'dataTypeValue' : 'string' , 'format' : 'Text' , 'description' : 'description'  },
      { 'key' : 'Key5', 'dataTypeValue' : 'string' , 'format' : 'Text' , 'description' : 'description'  },
      { 'key' : 'Key6', 'dataTypeValue' : 'string' , 'format' : 'Text' , 'description' : 'description'  },
      { 'key' : 'Key7', 'dataTypeValue' : 'string' , 'format' : 'Text' , 'description' : 'description'  },
      { 'key' : 'Key8', 'dataTypeValue' : 'string' , 'format' : 'Text' , 'description' : 'description'  },
      { 'key' : 'Key9', 'dataTypeValue' : 'string' , 'format' : 'Text' , 'description' : 'description'  },
      { 'key' : 'Key10', 'dataTypeValue' : 'string' , 'format' : 'Text' , 'description' : 'description'  },
      { 'key' : 'Key11', 'dataTypeValue' : 'string' , 'format' : 'Text' , 'description' : 'description'  },
      { 'key' : 'Key12', 'dataTypeValue' : 'string' , 'format' : 'Text' , 'description' : 'description'  },
      { 'key' : 'Key13', 'dataTypeValue' : 'string' , 'format' : 'Text' , 'description' : 'description'  },
      { 'key' : 'Key14', 'dataTypeValue' : 'string' , 'format' : 'Text' , 'description' : 'description'  },
      { 'key' : 'Key15', 'dataTypeValue' : 'string' , 'format' : 'Text' , 'description' : 'description'  },
      { 'key' : 'Key16', 'dataTypeValue' : 'string' , 'format' : 'Text' , 'description' : 'description'  },
      { 'key' : 'Key17', 'dataTypeValue' : 'string' , 'format' : 'Text' , 'description' : 'description'  },
      { 'key' : 'Key18', 'dataTypeValue' : 'string' , 'format' : 'Text' , 'description' : 'description'  },
      { 'key' : 'Key19', 'dataTypeValue' : 'string' , 'format' : 'Text' , 'description' : 'description'  },
      { 'key' : 'Key20', 'dataTypeValue' : 'string' , 'format' : 'Text' , 'description' : 'description'  },
    ];
    self.specificTable.value = self.specificsData;
    self.specificTable.totalRecords = 20;

    self.specificTable.loading = false;
  }

  handleChange(e, data) {
    data.status = e.checked;
  }

  addSpecific() {   
    this.addEditObject = {};
    this.addEditObject.productCode = this.productCode;
  }

  confirmDelete(key) {
    debugger;
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
          //Actual logic to perform a confirmation
      }
  });

  }

  onDropChange() {
    if (this.addEditObject != null && this.addEditObject.dataTypeValue != null) {
      if (this.addEditObject.dataTypeValue.DataTypeValue == "string") {
        this.addEditObject.format = 'Text';
      }
      else if (this.addEditObject.dataTypeValue.DataTypeValue == "number") {
        this.addEditObject.format = 'number';
      }
      else if (this.addEditObject.dataTypeValue.DataTypeValue == "boolean") {
        this.addEditObject.format = 'True/False';
      }
      else if (this.addEditObject.dataTypeValue.DataTypeValue == "date") {
        this.addEditObject.format = 'YYYYMMDD';
      } else {
        this.addEditObject.format = null;
      }
    }
  }

  cancel(form) {
    debugger;
    this.submitted = false;
    this.addEditObject = {};
    form.reset();
    //close poup
    //this.markAsContractedForm.closeModal();
  }

  popupClosed() {
    this.addEditObject = {};
    //this.markAsContractedForm.closeModal();
  }


}
