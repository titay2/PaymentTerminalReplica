import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-settlment',
  templateUrl: './settlment.component.html',
  styleUrls: ['./settlment.component.css']
})
export class SettlmentComponent {

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
