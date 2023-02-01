import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { food } from '../data-type.';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) {}

  // get mothod

  // gethotel() {
  //   return this.http.get('http://localhost:3000/posts').pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // }


  foodList(){
    return this.http.get<food[]>('http://localhost:3000/foods');
  }
  
  getfood(_id:string){
    return this.http.get<food>(`http://localhost:3000/foods/${_id}`);
  }
}
