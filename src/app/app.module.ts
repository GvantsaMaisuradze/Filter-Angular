import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { CardComponent } from './card/card.component';
import { CardsAreaComponent } from './cards-area/cards-area.component';
import { FilterAreaComponent } from './filter-area/filter-area.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CardComponent,
    CardsAreaComponent,
    FilterAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
