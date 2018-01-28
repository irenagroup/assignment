import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public menu: Array<{ name: string; price: number }> = [
    {name: 'Pizza', price: 20},
    {name: 'Pasta', price: 17},
    {name: 'Wings', price: 30},
    {name: 'Sandwich', price: 40},
    {name: 'Bread', price: 10}
  ];
  constructor() { }

  ngOnInit() {
  }

}
