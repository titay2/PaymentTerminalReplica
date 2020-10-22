import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tilaukset',
  templateUrl: './tilaukset.component.html',
  styleUrls: ['./tilaukset.component.css']
})
export class TilauksetComponent implements OnInit {
  orderForm: FormGroup;
  showhideold = true;
  fauxData = [
    // {
    //   Merchant: 'test',
    //   Order: 'order',
    //   User: 'test',
    //   Modified: 'now'
    // }
  ];
  constructor() { }

  ngOnInit(): void {

  }

  NewOrder() {
    this.orderForm = new FormGroup({
      'companyName': new FormControl('', Validators.required),
      'busnessID': new FormControl('', Validators.required),
      'phoneNumber': new FormControl('', Validators.required),
      'streetAddress': new FormControl('', Validators.required),
      'postCode': new FormControl('', Validators.required),
      'country': new FormControl('', Validators.required),
      'option': new FormControl('', Validators.required),
    })
  }

}
