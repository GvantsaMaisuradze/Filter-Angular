import { Injectable } from '@angular/core';
import { Car } from '../models/car.model';
import { filterCar } from '../models/filter.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  filterCars(cars:Car[],filter:filterCar):Car[]{
    return cars
    .filter(o => filter.yearFrom==undefined||filter.yearFrom.toString().length < 4 || o.year >= filter.yearFrom )
    .filter(o => filter.yearTo==undefined|| filter.yearTo.toString().length < 4 || o.year <= filter.yearTo )
    .filter(o => filter.mileFrom ==undefined || o.mile >= filter.mileFrom )
    .filter(o => filter.mileTo ==undefined || o.mile <= filter.mileTo )
    .filter(o => filter.priceFrom ==undefined || o.price >= filter.priceFrom )
    .filter(o => filter.priceTo ==undefined || o.price <= filter.priceTo )
    .filter(o => filter.manufacturer==undefined|| o.manufacturer.toLowerCase().includes((filter.manufacturer as any).toLowerCase()))
    .filter(o => filter.model==undefined|| o.model.toLowerCase().includes((filter.model as any).toLowerCase()))
    .filter(o => filter.vinCode==undefined || o.vinCode.toLowerCase().includes((filter.vinCode as any).toLowerCase()))
  }
}
