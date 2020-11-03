import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from './authGuard';
import { MerchantComponent } from './merchant/merchant.component';
import { OrdersComponent } from './orders/orders.component';
import { HardwareComponent } from './hardware/hardware.component';
import { MerchatDetailComponent } from './merchat-detail/merchat-detail.component';
import { DetailComponent } from './merchat-detail/detail/detail.component';
import { TerminalComponent } from './merchat-detail/terminal/terminal.component';
import { SettelmentComponent } from './merchat-detail/settelment/settelment.component';
import { TransactionComponent } from './merchat-detail/transaction/transaction.component';
;

const routes: Routes = [
  {
    path: '',
    redirectTo: '/Orders',
    pathMatch: 'full',
  },
  // {
  //   path: 'Merchant',
  //   //canActivate: [AuthGuard],
  //   component: MerchantComponent
  // }, 
  {
    path: 'Orders',
    //canActivate: [AuthGuard],
    component: OrdersComponent
  }, {
    path: 'Hardware',
    //canActivate: [AuthGuard],
    component: HardwareComponent
  },
  {
    path: 'Merchant',
    //canActivate: [AuthGuard],
    component: MerchantComponent,

  }
  , {
    path: 'Merchant/:id',
    //canActivate: [AuthGuard],
    component: MerchatDetailComponent,
    children: [
      { path: '', component: DetailComponent },
      { path: 'Terminal', component: TerminalComponent },
      { path: 'Settelment', component: SettelmentComponent },
      { path: 'Transaction', component: TransactionComponent },
    ]
  },
  //  {
  //   path: 'Merchant/Terminal',
  //   //canActivate: [AuthGuard],
  //   component: TerminalComponent
  //},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
