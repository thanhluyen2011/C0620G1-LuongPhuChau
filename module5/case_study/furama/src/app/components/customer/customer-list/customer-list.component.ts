import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustomerService} from "../../../services/customer/customer.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateCustomerComponent} from "../create-customer/create-customer.component";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit, OnDestroy{
  public customerList;
  term: any;
  p: any;
  private customerCreate;


  constructor(
    public customerService: CustomerService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe(data => {
      this.customerList = data;
    })
  }

  resetSearch() {
    this.term = ""
  }

  createNewDialog() {
    const dialogRefCreate = this.dialog.open(CreateCustomerComponent, {
      width: '950px',
      height: '1500px',
      data: {dataNeed: this.customerCreate},
      disableClose: true
    });

    dialogRefCreate.afterClosed().subscribe(result => {
      this.ngOnInit()
    })
  }

  ngOnDestroy(): void {
  }
}
