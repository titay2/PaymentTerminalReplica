import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settelment',
  templateUrl: './settelment.component.html',
  styleUrls: ['./settelment.component.css']
})
export class SettelmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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


  // editMode = false;
  // error = null;
  // settlmentForm: FormGroup;
  // options = ['Immidietly', 'Later'];
  //editorTitle = ''

  // constructor() { }



  // onEdit(settlment) {
  //   this.editMode = true;
  //   this.editorTitle = 'Edit Settlment Contract'
  //   this.settlmentForm = new FormGroup({
  //     'contractType': new FormControl(settlment.contractType, Validators.required),
  //     'contractNumber': new FormControl(settlment.contractNumber, Validators.required),
  //     'merchantCode': new FormControl(settlment.merchanttype, Validators.required),
  //     'option': new FormControl('', Validators.required),
  //     'startTime': new FormControl(settlment.startTime, Validators.required),
  //     'endTime': new FormControl(settlment.endTime, Validators.required),
  //   })
  // }
  // addNewSettlment() {
  //   this.editMode = false;
  //   this.editorTitle = 'New Settlment Contract'
  //   this.settlmentForm = new FormGroup({
  //     'contractType': new FormControl('', Validators.required),
  //     'contractNumber': new FormControl('', Validators.required),
  //     'merchantCode': new FormControl('', Validators.required),
  //     'option': new FormControl('', Validators.required),
  //     'startTime': new FormControl('', Validators.required),
  //     'endTime': new FormControl('', Validators.required),
  //   })
  // }

  // onSubmit() {
  //   const test = {
  //     contractType: this.settlmentForm.value['contractType'],
  //     contractNumber: this.settlmentForm.value['contractNumber'],
  //     merchantCode: this.settlmentForm.value['merchantCode'],
  //     option: this.settlmentForm.value['option'],
  //     startTime: this.settlmentForm.value['startTime'],
  //     endTime: this.settlmentForm.value['endTime'],
  //   };
  //   if (this.editMode) {
  //     console.log('edit' + this.editMode);
  //     console.log(test);
  //   } else {
  //     console.log('edit' + this.editMode);
  //     console.log(test);
  //   }
  // }
  // onClosed() {
  //   this.error = null;
  // }
}
