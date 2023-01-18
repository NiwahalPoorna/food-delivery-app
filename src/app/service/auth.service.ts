import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/signupUsers', data);
  }

  signin(data: any): Observable<any> {
    return this.http.get('http://localhost:3000/signupUsers', data);
  }
}
