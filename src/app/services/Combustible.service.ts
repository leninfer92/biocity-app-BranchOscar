import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSetting } from '../app-settings';

@Injectable({
  providedIn: 'root',
})
export class CombustibleService {
  constructor(private http: HttpClient) {}

  //   READ
  getAllOrders() {
    return this.http.get(`${AppSetting.API_ENDPOINT}/combustibles`);
  }

  //   CREATE
  createOrder(vehicule_id: string, kilometraje: string) {
    return this.http.post(
      `${AppSetting.API_ENDPOINT}/combustibles/${vehicule_id}`,
      {kilometraje}
    );
  }

  //   CREATE ADITIONAL
  createOrderAditional(vehicule_id: string, tipo_combustible: string, galon: string) {
    return this.http.post(
      `${AppSetting.API_ENDPOINT}/combustibles/store_adicional/${vehicule_id}`,
      {tipo_combustible, galon}
    );
  }

  //   DELETE
  deleteOrderById(id: number) {
    return this.http.delete(`${AppSetting.API_ENDPOINT}/combustibles/${id}`);
  }

  //   VALIDATE COMBUSTIBLE
  validateOrder(vehicule_id: string, galon: string, tipo_combustible: string, ticket: string) {
    return this.http.put(
      `${AppSetting.API_ENDPOINT}/combustibles/${vehicule_id}`,
      {galon, tipo_combustible, ticket}
    );
  }
}
