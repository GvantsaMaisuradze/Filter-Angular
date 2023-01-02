import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { Car } from '../models/car.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formData:Car = new Car();

  @Output()
  onClickInputChangeEmitter:EventEmitter<Car> = new EventEmitter();

  @Output()
  onSaveBtnClickEmitter:EventEmitter<Car> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSaveBtnClick(){
    this.onSaveBtnClickEmitter.emit(this.formData)
    this.formData = new Car();
    this.onClickInputValueChange();
  }
  onClickInputValueChange(){
    this.onClickInputChangeEmitter.emit(this.formData);
  }


}
