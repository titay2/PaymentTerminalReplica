import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  merchants = [
    {
      companyName: "Semel OY",
      businessId: "124534",
      phoneNo: "+350443001166",
      StreetAddress: "Valimotie 21",
      Post: "00540",
      city: "Helsinki",
      country: "Finland",
      contactPresom: "Timo",
      cpemail: "timo@semel.fi"
    },
    {
      companyName: "Semel OY one",
      businessId: "124445",
      phoneNo: "+350443001166",
      StreetAddress: "Valimotie 21",
      Post: "00540",
      city: "Helsinki",
      country: "Finland",
      contactPresom: "Test",
      cpemail: "test@semel.fi"

    }
  ]
}
