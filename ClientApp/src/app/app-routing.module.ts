import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportingComponent } from './reporting/reporting.component';
import { SettlmentComponent } from './settlment/settlment.component';
import { SupportComponent } from './support/support.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './authGuard';
import { KauppiaatComponent } from './profile/kauppiaat/kauppiaat.component';
import { LaitteetComponent } from './profile/laitteet/laitteet.component';
import { TilauksetComponent } from './profile/tilaukset/tilaukset.component';
import { TukiComponent } from './profile/tuki/tuki.component';
import { BatchComponent } from './settlment/batch/batch.component';



const routes: Routes = [
  {
    path: '', redirectTo: '/Settlement', pathMatch: 'full',
  },
  // {
  //   path: '', redirectTo: '/Settlement', pathMatch: 'full',
  // },
  {
    path: 'Reporting',
    canActivate: [AuthGuard],
    component: ReportingComponent
  },
  {
    path: 'Settlement',
    //canActivate: [AuthGuard],
    component: SettlmentComponent,
    children: [
      { path: '', component: SettlmentComponent },
      { path: 'test', component: BatchComponent }

    ]
  },
  {
    path: 'Support',
    canActivate: [AuthGuard],
    component: SupportComponent
  },
  {
    path: 'Transaction',
    canActivate: [AuthGuard],
    component: TransactionComponent
  },
  {
    path: 'Profile',
    canActivate: [AuthGuard],
    component: ProfileComponent,
    children: [
      { path: 'Kauppiaat', component: KauppiaatComponent },
      { path: 'Laitteet', component: LaitteetComponent },
      { path: 'Tilaukset', component: TilauksetComponent, },
      { path: 'Tuki', component: TukiComponent },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
