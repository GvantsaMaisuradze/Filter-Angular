import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../models/car.model';

@Component({
  selector: 'app-cards-area',
  templateUrl: './cards-area.component.html',
  styleUrls: ['./cards-area.component.css']
})
export class CardsAreaComponent implements OnInit {
  @Input()
  carList:Car[]=[]
  constructor() { }

  ngOnInit(): void {
  }

}
