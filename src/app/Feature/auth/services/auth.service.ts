import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginRequest } from '../models/login-request.model';
import { LoginResponse } from '../models/login-response.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private cookieService: CookieService) { }

    login(request: LoginRequest): Observable<LoginResponse> {
      return this.http.post<LoginResponse>(
        `${environment.apiBaseUrl}/auth/login`,
        request
      );
    }
}
