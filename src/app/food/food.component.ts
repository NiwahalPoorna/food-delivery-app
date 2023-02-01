import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food.service';
import { ActivatedRoute } from '@angular/router';
import { food } from '../data-type.';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
})
export class FoodComponent implements OnInit {
  // public foodtlist: any;
  // public productlist:any;

  foodList: undefined | food[];
  // productMessage: undefined | string;

  constructor(private api: FoodService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.api.foodList().subscribe((res) => {
      console.warn(res);
      if (res) {
        this.foodList = res;
      }
    });
  }
}
