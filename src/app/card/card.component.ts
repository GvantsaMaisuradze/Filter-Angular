import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../models/car.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  carItem:Car = new Car()
  constructor() { }

  ngOnInit(): void {
  }

}
