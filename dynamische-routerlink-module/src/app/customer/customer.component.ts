import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {

  customers = [
    {id: 1, name: 'Microsoft'},
    {id: 2, name: 'Google'},
    {id: 3, name: 'Facebook'},
    {id: 4, name: 'Twitter'},
    {id: 5, name: 'Ilionx'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
