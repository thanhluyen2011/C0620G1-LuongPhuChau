import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {EmployeeListComponent} from './components/employees/employee-list/employee-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {CreateEmployeeComponent} from './components/employees/create-employee/create-employee.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CreateCustomerComponent } from './components/customer/create-customer/create-customer.component';
import { DeleteDialogComponent } from './components/employees/delete-dialog/delete-dialog.component';

const routes: Routes = [
  {path: '', component: HomeComponent},

  {path: 'employee-list', component: EmployeeListComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},

  {path: 'customer-list', component: CustomerListComponent},
  {path: 'create-customer', component: CreateCustomerComponent},

  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, CommonModule, Ng2SearchPipeModule, NgxPaginationModule,
    ReactiveFormsModule],
  exports: [RouterModule],
  declarations: [HomeComponent, PageNotFoundComponent, EmployeeListComponent, CreateEmployeeComponent,
    CustomerListComponent, CreateCustomerComponent, DeleteDialogComponent]
})
export class AppRoutingModule {
}