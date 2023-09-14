import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSetting } from '../app-settings';
import { carsInfo } from '../components/vehiculo/vehiculo.component';

@Injectable({
  providedIn: 'root',
})
export class CombustibleService {
  constructor(private http: HttpClient) {}

  //   READ
  getAllOrders() {
    return this.http.get(`${AppSetting.API_ENDPOINT}/vehiculos`);
  }
}
