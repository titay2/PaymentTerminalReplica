import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {
  terminal =
    {
      salesLocation: "semel",
      location: "valimotie 12, Helsinki Fi",
      type: "SPm20 Semel EUR (FI)",
      hardwareId: 1234556,
      lastPurchase: 0,
      lastConected: "Not Attached",
      terminalID: 18357,
      orderTerm: new Date(),
      softwareVersion: "Not Known",
      transactions: [{
        time: new Date(" 10-01-2020"),
        terminal: "ATX- Palvelu NETS; 1234574;0001210;",
        cardnumber: "42000*2350",
        type: "Visa",
        status: "Success",
        reference: "12",
        amount: 23.20,
        locId: "1",
        therminalID: "1"
      },
      {
        time: new Date(" 10-01-2020"),
        terminal: "ATX- Palvelu NETS; 1234574;0001210;",
        cardnumber: "",
        type: "No card",
        status: "Success",
        reference: "12",
        amount: 23.20,
        locId: "1",
        therminalID: "1"
      },
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
      },]
    }

  constructor() { }

  ngOnInit(): void {
  }

}
