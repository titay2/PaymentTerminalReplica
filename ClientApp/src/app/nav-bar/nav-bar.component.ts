import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isExpanded = false;
  languageSetting = 'English';
  languages = ['Swedish', 'English', 'Finnish']
  isAuthenticated = false;
  userName = '';
  @Output() selectedLanguage = new EventEmitter<String>();
  constructor(private authService: MsalService) { }

  ngOnInit(): void {

    this.isAuthenticated = !!this.authService.getAccount();
    if (this.isAuthenticated) {
      this.userName = this.authService.getAccount().name;
    }

    //console.log(this.authService.getAccount())
  }


  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  languageSelected(value) {
    this.languages.splice(this.languages.indexOf(value), 1)
    this.languageSetting = value;
    this.languages.push(value)
    if (value === 'Swedish') {
      this.selectedLanguage.emit('sv');

    } if (value === 'English') {
      this.selectedLanguage.emit('en');

    } if (value === 'Finnish') {
      this.selectedLanguage.emit('fi');
    }
  }

  login() {
    this.authService.loginRedirect();
  }

  logout() {
    this.authService.logout();
  }
}
