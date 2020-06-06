import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Area } from '../models/area';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  API_URL = 'http://localhost:3000/api/areas';

  constructor(private http: HttpClient) { }

  getAreas() {
    return this.http.get(`${this.API_URL}/list`);
  }

  getoneArea(codigo: number) {
    return this.http.get(`${this.API_URL}/getone/${codigo}`);
  }

  saveArea(area: Area) {
    return this.http.post(`${this.API_URL}/create`, area);
  }

  deleteArea(codigo: number) {
    return this.http.delete(`${this.API_URL}/delete/${codigo}`);
  }

  updateArea(codigo: number, updatedArea: Area) {
    return this.http.put(`${this.API_URL}/update/${codigo}`, updatedArea);
  }

}
