import { Component } from '@angular/core';
import { MsalService, BroadcastService } from '@azure/msal-angular';
import { TranslateService } from '@ngx-translate/core';
import defaultLanguage from "./../assets/i18n/en.json";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientApp';

  constructor(
    private broadcastService: BroadcastService,
    private authService: MsalService,
    public translate: TranslateService
  ) {
    translate.addLangs(['fi', 'en', 'sv']);
    translate.setTranslation('en', defaultLanguage);
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.broadcastService.subscribe('msal:loginSuccess', (data) => {
    });

    this.authService.handleRedirectCallback((authError, response) => {
      if (authError) {
        console.error('Redirect Error: ', authError);
        return;
      }
      console.log('Redirect Success: ', response.accessToken);
    });

  }
  selectedLanguage(lang) {
    this.translate.use(lang);
  }


}

