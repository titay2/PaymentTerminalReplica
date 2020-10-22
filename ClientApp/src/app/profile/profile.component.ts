import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentLink = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getName() {
    const str = this.router.url;
    const n = str.lastIndexOf('/');
    const result = str.substring(n + 1);
    this.currentLink = result + '>';
  }

}
