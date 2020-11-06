import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MsalModule, MsalInterceptor } from '@azure/msal-angular';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { FilterPipe } from './filter.pipe';
import { HomeComponent } from './home/home.component';
import { LocationPipe } from './filterPipes/location.pipe';
import { TerminalPipe } from './filterPipes/terminal.pipe';
import { CardNumberPipe } from './filterPipes/card-number.pipe';
import { ReferencePipe } from './filterPipes/reference.pipe';
import { TimeFilterPipe } from './filterPipes/time-filter.pipe';
import { AmountFilterPipe } from './filterPipes/amount-filter.pipe';
import { MerchantComponent } from './merchant/merchant.component';
import { OrdersComponent } from './orders/orders.component';
import { HardwareComponent } from './hardware/hardware.component';
import { MerchatDetailComponent } from './merchat-detail/merchat-detail.component';
import { DetailComponent } from './merchat-detail/detail/detail.component';
import { TerminalComponent } from './merchat-detail/terminal/terminal.component';
import { TransactionComponent } from './merchat-detail/transaction/transaction.component';
import { SettelmentComponent } from './merchat-detail/settelment/settelment.component';
import { BlueClickDirective } from './merchat-detail/detail/blue-click.directive';
import { NewOrderComponent } from './orders/new-order/new-order.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    // FilterPipe,
    HomeComponent,
    LocationPipe,
    TerminalPipe,
    CardNumberPipe,
    ReferencePipe,
    TimeFilterPipe,
    AmountFilterPipe,
    MerchantComponent,
    OrdersComponent,
    HardwareComponent,
    MerchatDetailComponent,
    DetailComponent,
    TerminalComponent,
    TransactionComponent,
    SettelmentComponent,
    BlueClickDirective,
    NewOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MsalModule.forRoot({
      auth: {
        clientId: '7ff08d17-636e-4318-bb07-fa3206763cfa', // This is your client ID
        // authority: 'https://semelpayapplication.b2clogin.com/semelPayApplication.onmicrosoft.com/22ba612e-1cb3-42ae-9efa-db0420bf6bab/B2C_1_signinsignupSemelPay', // This is your tenant ID
        redirectUri: 'https://localhost:44378'// This is your redirect URI

      },
      cache: {
        cacheLocation: 'localStorage',
      },
    }, {
        consentScopes: [
          'user.read',
          'openid',
          'profile',
        ],
        //unprotectedResources: [],
        //protectedResourceMap: [
        //  ['https://graph.microsoft.com/v1.0/me', ['user.read']]
        //],
        //extraQueryParameters: {}
      }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
