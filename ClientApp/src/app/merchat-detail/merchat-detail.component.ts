import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-merchat-detail',
  templateUrl: './merchat-detail.component.html',
  styleUrls: ['./merchat-detail.component.css']
})
export class MerchatDetailComponent implements OnInit {
  id = localStorage.getItem("selectedMerchant");
  navList = ['Detail', 'Terminal', 'Settelment', 'Transaction'];
  selectedItem = 'Detail';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const str = this.router.url;
    const n = str.lastIndexOf('/');
    if (str.substring(n + 1) !== 'Detail') {
      this.selectedItem = 'Detail';
    } else {
      this.selectedItem = str.substring(n + 1);
    }

  }

  listClick(newValue: string) {
    this.selectedItem = newValue;
    if (newValue === 'Detail') {
      this.router.navigate(['../', this.id], { relativeTo: this.route });
    } else {
      this.router.navigate(['../', this.id, newValue], { relativeTo: this.route });
    }
  }

}
