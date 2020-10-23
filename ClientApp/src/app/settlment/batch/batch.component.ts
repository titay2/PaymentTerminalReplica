import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {
  batchNumber: number;
  date = new Date();
  batch = {
    salesLocation: "ATX- Palvelu NETS",
    sales: "$167.50",
    refund: "0.00",
    batchStatus: [
      {
        time: new Date(),
        newStatus: "Sent to bank",
      },
      {
        time: new Date(),
        newStatus: "Created",
      }
    ],
    transactions: [
      {
        time: new Date(),
        terminal: "ATX- Palvelu NETS; 1234574;0001210;",
        cardnumber: "42000*2350",
        type: "Visa",
        status: "Success",
        reference: "1235847964",
        amount: "$123.20"
      }, {
        time: new Date(),
        terminal: "ATX- Palvelu NETS; 1234574;0001210;",
        cardnumber: "42000*2350",
        type: "Visa",
        status: "Success",
        reference: "1235847964",
        amount: "$123.20"
      }, {
        time: new Date(),
        terminal: "ATX- Palvelu NETS; 1234574;0001210;",
        cardnumber: "42000*2350",
        type: "Master",
        status: "Success",
        reference: "1235847964",
        amount: "$123.20"
      }, {
        time: new Date(),
        terminal: "ATX- Palvelu NETS; 1234574;0001210;",
        cardnumber: "42000*2350",
        type: "Master",
        status: "Success",
        reference: "1235847964",
        amount: "$123.20"
      }, {
        time: new Date(),
        terminal: "ATX- Palvelu NETS; 1234574;0001210;",
        cardnumber: "42000*2350",
        type: "Visa",
        status: "Success",
        reference: "1235847964",
        amount: "$123.20"
      },
    ]
  }

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.batchNumber = +params['id'];
        console.log(this.batchNumber)
      }
    );
  }


}
