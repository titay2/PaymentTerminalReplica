import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-merchat-detail',
  templateUrl: './merchat-detail.component.html',
  styleUrls: ['./merchat-detail.component.css']
})
export class MerchatDetailComponent implements OnInit {
  id: number = +localStorage.getItem("selectedMerchant");
  navList = ['Detail', 'Terminal', 'Settelment', 'Transaction'];
  selectedItem = 'Detail';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (Number(+params['id'])) {
        localStorage.setItem("selectedMerchant", params['id']);
      }
      else {
        this.id = +localStorage.getItem("selectedMerchant");
      }
    })
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
