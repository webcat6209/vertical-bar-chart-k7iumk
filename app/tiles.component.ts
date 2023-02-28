import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { numbers } from './data';

@Component({
  selector: 'tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})

export class TilesComponent {
  single: any[];
  view: any[] = [700, 200];

  colorScheme = {
    domain: ['#5AA454', '#5AA454']
  };
  cardColor: string = '#ffffff';
  
  constructor() {
    Object.assign(this, { numbers });
  }

  onSelect(event) {
    console.log(event);
  }
}