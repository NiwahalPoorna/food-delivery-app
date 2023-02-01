import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { food } from '../data-type.';
import { FoodService } from '../service/food.service';


@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent {

  foodData:undefined|food;

  constructor(private route:ActivatedRoute , private food:FoodService){ }


  ngOnInit(): void {
    let productId=this.route.snapshot.paramMap.get('_id');
    console.warn(productId); 
    productId && this.food.getfood(productId).subscribe((res)=>{
      console.warn(res);
      this.foodData=res;
    })
  }


}
