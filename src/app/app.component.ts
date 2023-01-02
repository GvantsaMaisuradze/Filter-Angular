import { Component } from '@angular/core';
import { Car } from './models/car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadingItem:Car = new Car();
  carsList:Car[]=[];
  title = 'Filter-Agular';

  onClickInputChangeSubscriber(event:Car){
    this.loadingItem = event
  }
  onSaveBtnSubscriber(event:Car){
    this.carsList.push(this.loadingItem);
    console.log(this.loadingItem);
  }
}
