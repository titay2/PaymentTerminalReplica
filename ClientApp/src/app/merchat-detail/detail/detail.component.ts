import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id = localStorage.getItem("selectedMerchant");
  editModeLocation = false;
  editMode = false;
  locationForm: FormGroup;
  settlmentForm: FormGroup;
  options = ['Immidietly', 'Later'];
  editorTitleLocation = '';
  editorTitleContract = ''

  merchants = {
    companyName: "Semel OY",
    businessId: "124534",
    phoneNo: "+350443001166",
    StreetAddress: "Valimotie 21",
    Post: "00540",
    city: "Helsinki",
    country: "Finland",
    contactPresom: "Timo",
    cpemail: "timo@semel.fi",
    salesContract: [
      {
        type: "Elavon EUR(Visa/MasterCard/Amex/DC)",
        number: 254786,
        code: 12345,
        description: "Automobile parking and Garage"
      },
      {
        type: "Elavon EUR(Visa/MasterCard/Amex/DC)",
        number: 254786,
        code: 12345,
        description: "Automobile parking and Garage"
      },
      {
        type: "Elavon EUR(Visa/MasterCard/Amex/DC)",
        number: 254786,
        code: 12345,
        description: "Automobile parking and Garage"
      },

    ],
    terminals: [
      {
        type: "SPm20 Semel EUR (FI)",
        name: "Semel",
        hardwareId: 1234556,
        terminalID: 18357,
        orderTerm: new Date(),
      }, {
        type: "SPm20 Semel EUR (FI)",
        name: "Semel",
        hardwareId: 1234556,
        terminalID: 18357,
        orderTerm: new Date(),
      }, {
        type: "SPm20 Semel EUR (FI)",
        name: "Semel",
        hardwareId: 1234556,
        terminalID: 18357,
        orderTerm: new Date(),
      }
    ]
  }
  accordionData = [
    {
      name: "Semel Oy, ATX_PALVELU NETX",
      StreetAddress: " Valimotie 21, 00540, Helsinki",
      detail: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf " +
        " moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod."
    },
    {
      name: "Semel Oy, 11740, Vanta",
      StreetAddress: " Valimotie 21, 00540, Helsinki",
      detail: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf " +
        " moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod."
    },
    {
      name: "Semel Oy, 11740, Vanta",
      StreetAddress: " Valimotie 21, 00540, Helsinki",
      detail: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf " +
        " moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod."
    }
  ];
  constructor(private router: Router) { }
  ngOnInit(): void {
    if (!this.id) {
      this.router.navigate(['/Merchant']);
    }
  }
  onEditContract(settlment) {
    this.editMode = true;
    this.editorTitleContract = 'Edit Settlment Contract'
    this.settlmentForm = new FormGroup({
      'contractType': new FormControl(settlment.type, Validators.required),
      'contractNumber': new FormControl(settlment.number, Validators.required),
      'merchantCode': new FormControl(settlment.code, Validators.required),
      'option': new FormControl('', Validators.required),
      'startTime': new FormControl(settlment.startTime, Validators.required),
      'endTime': new FormControl(settlment.endTime, Validators.required),
    })
  }
  onNewContract() {
    this.editMode = false;
    this.editorTitleContract = 'New Settlment Contract'
    this.settlmentForm = new FormGroup({
      'contractType': new FormControl('', Validators.required),
      'contractNumber': new FormControl('', Validators.required),
      'merchantCode': new FormControl('', Validators.required),
      'option': new FormControl('', Validators.required),
      'startTime': new FormControl('', Validators.required),
      'endTime': new FormControl('', Validators.required),
    })
  }

  onSubmitContract() {
    const test = {
      contractType: this.settlmentForm.value['contractType'],
      contractNumber: this.settlmentForm.value['contractNumber'],
      merchantCode: this.settlmentForm.value['merchantCode'],
      option: this.settlmentForm.value['option'],
      startTime: this.settlmentForm.value['startTime'],
      endTime: this.settlmentForm.value['endTime'],
    };
    if (this.editMode) {
      console.log('edit' + this.editMode);
      console.log(test);
    } else {
      console.log('edit' + this.editMode);
      console.log(test);
    }
  }

  onEditLocation(m) {
    this.editModeLocation = true;
    this.editorTitleLocation = 'Edit Sales Location'
    this.locationForm = new FormGroup({
      'locationName': new FormControl(m.companyName, Validators.required),
      'phoneNumber': new FormControl(m.phoneNo, Validators.required),
      'post': new FormControl(m.Post, Validators.required),
      'city': new FormControl(m.city, Validators.required),
      'country': new FormControl(m.country, Validators.required),
    })
  }
  onAddNewLocation() {
    this.editModeLocation = false;
    this.editorTitleLocation = 'New Sales Location'
    this.locationForm = new FormGroup({
      'locationName': new FormControl('', Validators.required),
      'phoneNumber': new FormControl('', Validators.required),
      'post': new FormControl('', Validators.required),
      'city': new FormControl('', Validators.required),
      'country': new FormControl('', Validators.required),
    })
  }

  onSubmit() {
    const test = {
      locationName: this.locationForm.value['locationName'],
      phoneNumber: this.locationForm.value['phoneNumber'],
      post: this.locationForm.value['post'],
      city: this.locationForm.value['city'],
      country: this.locationForm.value['country']
    };
    if (this.editModeLocation) {
      console.log('edit' + this.editModeLocation);
      console.log(test);
    } else {
      console.log('edit' + this.editModeLocation);
      console.log(test);
    }
  }
}
