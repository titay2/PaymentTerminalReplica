import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orderForm: FormGroup;
  showhideold = true;
  fauxData = [
    {
      Merchant: 'test',
      Order: 'order',
      User: 'test',
      Modified: 'now'
    }, {
      Merchant: 'test',
      Order: 'order',
      User: 'test',
      Modified: 'now'
    }, {
      Merchant: 'test',
      Order: 'order',
      User: 'test',
      Modified: 'now'
    }
  ];
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  NewOrder() {
    this.router.navigate(['../', 'New'], { relativeTo: this.route });
  }

}