import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppSetting } from '../app-settings';
import { carsInfo } from '../components/vehiculo/vehiculo.component';

@Injectable({
  providedIn: 'root',
})
export class VehiculosService {
  constructor(private http: HttpClient) {}

  //   READ
  getAllVehicles() {
    return this.http.get(`${AppSetting.API_ENDPOINT}/vehiculos`);
  }

  //   DELETE
  deleteVehicleById(id: number) {
    return this.http.delete(`${AppSetting.API_ENDPOINT}/vehiculos/${id}`);
  }

  //   DELETE
  updateVehicleById(params: carsInfo) {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('numero', params.numero);
    httpParams = httpParams.set('chasis', params.chasis);
    httpParams = httpParams.set('placa', params.placa);
    httpParams = httpParams.set('anio', params.anio);
    httpParams = httpParams.set('fecha_compra', params.fecha_compra);
    httpParams = httpParams.set('modelo', params.modelo);
    httpParams = httpParams.set('tipo', params.tipo_vehiculo);
    return this.http.put(
      `${AppSetting.API_ENDPOINT}/vehiculos/${params.id}`,
      params,
      {
        params: httpParams,
      }
    );
  }

  //   CREATE
  creteVehicule(params: carsInfo) {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('numero', params.numero);
    httpParams = httpParams.set('chasis', params.chasis);
    httpParams = httpParams.set('placa', params.placa);
    httpParams = httpParams.set('anio', params.anio);
    httpParams = httpParams.set('fecha_compra', params.fecha_compra);
    httpParams = httpParams.set('modelo', params.modelo);
    httpParams = httpParams.set('tipo', params.tipo_vehiculo);
    return this.http.post(
      `${AppSetting.API_ENDPOINT}/vehiculos`,
      params,
      {
        params: httpParams,
      }
    );
  }
}
