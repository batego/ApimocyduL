import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  API_URL = 'http://localhost:3000/api/dashboard';
  
  constructor(private http: HttpClient) { }

  getTotalUsersActive(){
    return this.http.get(`${this.API_URL}/tUserActive`);
  }

  gettotalUserInactive(){
    return this.http.get(`${this.API_URL}/tUserInactive`);
  }

  userByArea(){
    return this.http.get(`${this.API_URL}/uByArea`);
  }



}
