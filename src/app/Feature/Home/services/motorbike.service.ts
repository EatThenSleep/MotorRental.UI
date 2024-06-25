import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Motorbike } from "../home-page-list/models/motorbike.model";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";

@Injectable({
  providedIn: 'root',
})
export class MotorbikeService {
  constructor(private http: HttpClient) {}

  getAllMotorbikeHttp(): Observable<Motorbike[]> {
    return this.http.get<Motorbike[]>(`${environment.apiBaseUrl}/Motorbikes/GetALlMotorbikes`);
  }

  getDetailMotorbikeHttp(id: string): Observable<Motorbike> {
    console.log(`${environment.apiBaseUrl}/Motorbikes/${id}`); // Log URL để kiểm tra
    return this.http.get<Motorbike>(`${environment.apiBaseUrl}/Motorbikes/${id}`);
  }

  getFilteredMotorbikesHttp(type: number): Observable<Motorbike[]> {
    let params = new HttpParams().set('type', type.toString());
    return this.http.get<Motorbike[]>(`${environment.apiBaseUrl}/Motorbikes/GetAllMotorbikes`, { params });
  }

  search(keyword?: string): Observable<any> {
    let params = new HttpParams();
    if (keyword) {
      params = params.set('name', keyword);
    }

    return this.http.get<any>(`${environment.apiBaseUrl}/Motorbikes/GetAllMotorbikes`, { params });
  }
  
}
