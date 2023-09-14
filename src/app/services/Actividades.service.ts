import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppSetting } from '../app-settings';
import { carsInfo } from '../components/vehiculo/vehiculo.component';

@Injectable({
  providedIn: 'root',
})
export class ActividadesService {
  constructor(private http: HttpClient) {}

  //   READ
  getAllActivities() {
    return this.http.get(`${AppSetting.API_ENDPOINT}/actividades`);
  }
}
