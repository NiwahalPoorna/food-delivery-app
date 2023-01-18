import { Component,OnInit } from '@angular/core';
import { FoodService } from '../service/food.service';


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent  implements OnInit{

  
  public productlist:any;

  constructor(private api:FoodService){}

  ngOnInit():void{
    this.api.getfood().subscribe(res=>{
      // console.log(res);
      this.productlist = res;

    })

  
  }
}
