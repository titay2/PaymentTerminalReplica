import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettlmentComponent } from './settlment/settlment.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './authGuard';
import { KauppiaatComponent } from './profile/kauppiaat/kauppiaat.component';
import { LaitteetComponent } from './profile/laitteet/laitteet.component';
import { TilauksetComponent } from './profile/tilaukset/tilaukset.component';
import { BatchComponent } from './settlment/batch/batch.component';



const routes: Routes = [
  {
    path: '', redirectTo: '/Transaction', pathMatch: 'full',
  },
  {
    path: 'Settlement',
    //canActivate: [AuthGuard],
    component: SettlmentComponent,
  },
  {
    path: 'Settlement/:id',
    canActivate: [AuthGuard],
    component: BatchComponent,
  },
  {
    path: 'Transaction',
    //canActivate: [AuthGuard],
    component: TransactionComponent
  },
  {
    path: 'Profile',
    //canActivate: [AuthGuard],
    component: ProfileComponent,
    children: [
      { path: 'Kauppiaat', component: KauppiaatComponent },
      { path: 'Laitteet', component: LaitteetComponent },
      { path: 'Tilaukset', component: TilauksetComponent, }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
