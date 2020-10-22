import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kauppiaat',
  templateUrl: './kauppiaat.component.html',
  styleUrls: ['./kauppiaat.component.css']
})
export class KauppiaatComponent implements OnInit {
  accordionData = [
    {
      name: "Semel Oy, 11740, Vanta",
      detail: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf " +
        " moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod."
    },
    {
      name: "Semel Oy, 11740, Vanta",
      detail: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf " +
        " moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod."
    },
    {
      name: "Semel Oy, 11740, Vanta",
      detail: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf " +
        " moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod."
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
