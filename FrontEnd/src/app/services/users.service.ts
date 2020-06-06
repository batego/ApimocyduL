import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/Users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API_URL = 'http://localhost:3000/api/usuarios';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.API_URL}/list`);
  }

  getoneUser(id: number) {
    return this.http.get(`${this.API_URL}/getone/${id}`);
  }

  saveUser(user: Users) {
    return this.http.post(`${this.API_URL}/create`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.API_URL}/delete/${id}`);
  }

  updateUser(id: number, updatedUser: Users) {
    return this.http.put(`${this.API_URL}/update/${id}`, updatedUser);
  }
}
