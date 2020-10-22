import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settlment-grid',
  templateUrl: './settlment-grid.component.html',
  styleUrls: ['./settlment-grid.component.css']
})
export class SettlmentGridComponent implements OnInit {
  filterLocation = '';
  filterFeedback = '';
  fauxData = [
    {
      time: new Date(),
      content: 'visa / Masretcard',
      batch: '1234567',
      feedbackmaterial: 'Missing ',
      sales: '$12.00',
      refund: '$0.00'
    }, {
      time: new Date(),
      content: 'visa / Masretcard',
      batch: '22202020',
      feedbackmaterial: 'Missing ',
      sales: '$12.00',
      refund: '$0.00'
    }, {
      time: new Date(),
      content: 'visa / Masretcard',
      batch: '3333333',
      feedbackmaterial: 'Accepted ',
      sales: '$12.00',
      refund: '$0.00'
    }, {
      time: new Date(),
      content: 'visa / Masretcard',
      batch: '3333333',
      feedbackmaterial: 'Accepted ',
      sales: '$12.00',
      refund: '$0.00'
    }, {
      time: new Date(),
      content: 'visa / Masretcard',
      batch: '3333333',
      feedbackmaterial: 'Accepted ',
      sales: '$12.00',
      refund: '$0.00'
    }
  ]
  locationData = [
    { name: "Loc 1", value: "1234567" },
    { name: "Loc 2", value: "22202020" },
    { name: "Loc 3", value: "3333333" },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
