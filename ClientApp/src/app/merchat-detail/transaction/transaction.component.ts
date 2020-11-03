import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  filterLocation = '';
  filterTerminal = '';
  filterReference = "";
  filterCard = "";
  endTime = "";
  startTime = "";
  endAmt = null;
  startAmt = null;
  locationData = [
    { name: "Loc 1", value: "1" },
    { name: "Loc 2", value: "2" },
    { name: "Loc 3", value: "3" },
  ];
  transactions = [
    {
      time: new Date(" 10-01-2020"),
      terminal: "ATX- Palvelu NETS; 1234574;0001210;",
      cardnumber: "42000*2350",
      type: "Visa",
      status: "Success",
      reference: "12",
      amount: 23.20,
      locId: "1",
      therminalID: "1"
    }, {
      time: new Date(" 10-02-2020"),
      terminal: "azz- Palvelu NETS; 1234574;0001210;",
      cardnumber: "42000*2350",
      type: "Visa",
      status: "Transactin aborted",
      reference: "135885441545621544789654126",
      amount: 12.20,
      locId: "2",
      therminalID: "2"
    }, {
      time: new Date("10-03-2020"),
      terminal: "ATX- Palvelu NETS; 1234574;0001210;",
      cardnumber: "42000*2350",
      type: "Master",
      status: "Success",
      reference: "14",
      amount: 123.20,
      locId: "2",
      therminalID: "2"
    }, {
      time: new Date("10-18-2020"),
      terminal: "ATX- Palvelu NETS; 1234574;0001210;",
      cardnumber: "42000*2350",
      type: "Master",
      status: "Success",
      reference: "1235847964",
      amount: 500.20,
      locId: "1",
      therminalID: "1"
    }, {
      time: new Date("10-26-2020"),
      terminal: "ATX- Palvelu NETS; 1234574;0001210;",
      cardnumber: "42000*2350",
      type: "Visa",
      status: "Success",
      reference: "111111111",
      amount: 100.20,
      locId: "3",
      therminalID: "3"
    },
  ]
  terminals = [
    {
      terminal: "ATX- Palvelu NETS; 1234574;0001210;",
      id: "1",
      location: "valimontie 21 Helsinki Fi",
      model: "YOMANI XR",
      Hardware: "0008192b142e",
      lastPurchased: new Date(),
      lastConnected: new Date()
    }, {
      terminal: "9102600789 PoplaCandy Teller Yomani XR + mPOS",
      id: "2",
      location: "valimontie 21 Helsinki Fi",
      model: "YOMANI XR",
      Hardware: "0008192b142e",
      lastPurchased: new Date(),
      lastConnected: new Date()
    }, {
      terminal: "PoplaCandy Bambora GS valina at WL",
      id: "3",
      location: "valimontie 21 Helsinki Fi",
      model: "YOMANI XR",
      Hardware: "0008192b142e",
      lastPurchased: new Date(),
      lastConnected: new Date()
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
