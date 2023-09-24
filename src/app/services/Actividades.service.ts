import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSetting } from '../app-settings';

@Injectable({
  providedIn: 'root',
})
export class ActividadesService {
  constructor(private http: HttpClient) {}

  //   READ
  getAllActivities() {
    return this.http.get(`${AppSetting.API_ENDPOINT}/actividades`);
  }

  //  CREATE
  createActivity(activities_id: string, kilometraje_inicio: string, estado_inicio: string) {
    return this.http.post(`${AppSetting.API_ENDPOINT}/actividades/${activities_id}`,
    {kilometraje_inicio, estado_inicio});
  }

  //   UPDATE 
  updateActivity(activities_id: string, estado_fin: string, kilometraje_fin: string) {
    return this.http.put(`${AppSetting.API_ENDPOINT}/actividades/${activities_id}`,
    {estado_fin, kilometraje_fin});
  }

  //   DELETE
  deleteActivity(id: number) {
    return this.http.delete(`${AppSetting.API_ENDPOINT}/actividades/${id}`);
  }
}
