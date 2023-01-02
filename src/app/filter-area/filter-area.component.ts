import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../models/car.model';
import { filterCar } from '../models/filter.model';
import { FilterService } from '../services/filter-service.service';

@Component({
  selector: 'app-filter-area',
  templateUrl: './filter-area.component.html',
  styleUrls: ['./filter-area.component.css']
})
export class FilterAreaComponent implements OnInit {
  filter:filterCar= new filterCar();
  @Input()
  carList:Car[]=[]
  constructor(private filterService:FilterService) { }

  ngOnInit(): void {
  }
  onFilterInpValueChange(){
    var filterData = this.filterService.filterCars(this.carList,this.filter)
    console.log(filterData)
  }

}
