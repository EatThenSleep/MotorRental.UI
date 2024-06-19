import { Component } from '@angular/core';
import { LoginRequest } from '../models/login-request.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  model: LoginRequest
  loginSubscription?: Subscription

  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
    private router: Router
  ) {
    this.model = {
      email: '',
      password: '',
    };
  }

  onFormSubmit(){
    if (this.model.email != '' && this.model.password != '') {
      this.loginSubscription = this.authService.login(this.model).subscribe({
        next: (response) => {
          console.log(response)
        },
        error: (response) => {
          console.log(response)
        }
      })
    }
  }
}
