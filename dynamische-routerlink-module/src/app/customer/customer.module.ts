import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

// import shared module (with search field)
import {SharedModule} from '../shared/shared.module';

// components for this module
import {CustomerComponent} from './customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

// Lazy loaded routes for this module
const customerRoutes: Routes = [
  {path: '', component: CustomerComponent},
  {path: 'detail/:id/:name', component: CustomerDetailComponent}
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    // enhance routerModule met child routes
    RouterModule.forChild(customerRoutes)
  ],
  exports: [CustomerComponent], // component must be exported, otherwise it can't be used in other modules
  declarations: [CustomerComponent, CustomerDetailComponent]
})
export class CustomerModule {
}

console.log('CustomerModule loaded lazily...');
