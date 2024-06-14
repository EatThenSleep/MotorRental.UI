import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Motorbike } from "../models/motorbike.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class MotorbikeService {
  constructor(private http: HttpClient) {}

  getAllBlogPosts(): Observable<Motorbike[]> {
    return this.http.get<Motorbike[]>(`https://localhost:7225/api/Motorbikes/GetALlMotorbikes`);
  }
}
