import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
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
  ];


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

}
