import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Motorbike } from "../models/motorbike.model";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";

@Injectable({
  providedIn: 'root',
})
export class MotorbikeService {
  constructor(private http: HttpClient) {}

  getAllMotorbikeHttp(): Observable<Motorbike[]> {
    return this.http.get<Motorbike[]>(`${environment.apiBaseUrl}/Motorbikes/GetALlMotorbikesOfOwner?addAuth=true`);
  }

  getDetailMotorbikeHttp(id: String): Observable<Motorbike> {
    return this.http.get<Motorbike>(`${environment.apiBaseUrl}/Motorbikes/${id}`);
  }

  searchAndFilterHttp(keyword?: string, status?: number, type?: number): Observable<any> {
    let params = new HttpParams();

    if (keyword) {
      params = params.set('Name', keyword);
    }
    if (status !== undefined) {
      params = params.set('FilterStatus', status.toString());
    }
    if (type !== undefined) {
      params = params.set('FilterType', type.toString());
    }

    return this.http.get<any>(`${environment.apiBaseUrl}/Motorbikes/GetAllMotorbikes`, { params });
  }
}
