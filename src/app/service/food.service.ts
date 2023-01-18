import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) {}

  // get mothod

  getfood() {
    return this.http.get('http://localhost:3000/posts').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
