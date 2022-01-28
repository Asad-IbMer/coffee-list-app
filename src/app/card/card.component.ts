import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import {CoffeeDataService} from '../services/coffee-data.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  totalLength:any;
  page:number = 1;
  coffees:any;
  
  constructor(private coffeeData:CoffeeDataService ) { 
   coffeeData.coffees().subscribe((data)=> {
   console.warn("data",data);
   this.totalLength = data;
   this.coffees=data});
   
   }
    
      
   
  ngOnInit(): void {
    
  }

}
