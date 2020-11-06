import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {
  orderForm: FormGroup;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.orderForm = new FormGroup({
      'companyName': new FormControl('', Validators.required),
      'busnessID': new FormControl('', Validators.required),
      'phoneNumber': new FormControl('+358', Validators.required),
      'streetAddress': new FormControl('', Validators.required),
      'postCode': new FormControl('', Validators.required),
      'country': new FormControl('', Validators.required),
      'option': new FormControl('', Validators.required),
    })
  }
  goToOrders() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
