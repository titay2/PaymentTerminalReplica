import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MsalModule, MsalInterceptor } from '@azure/msal-angular';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { SettlmentComponent } from './settlment/settlment.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ReportingComponent } from './reporting/reporting.component';
import { ProfileComponent } from './profile/profile.component';
import { SupportComponent } from './support/support.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { KauppiaatComponent } from './profile/kauppiaat/kauppiaat.component';
import { TilauksetComponent } from './profile/tilaukset/tilaukset.component';
import { LaitteetComponent } from './profile/laitteet/laitteet.component';
import { TukiComponent } from './profile/tuki/tuki.component';
import { FilterPipe } from './filter.pipe';
import { BatchComponent } from './settlment/batch/batch.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SettlmentComponent,
    TransactionComponent,
    ReportingComponent,
    ProfileComponent,
    SupportComponent,
    KauppiaatComponent,
    TilauksetComponent,
    LaitteetComponent,
    TukiComponent,
    FilterPipe,
    BatchComponent,
    HomeComponent,
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
