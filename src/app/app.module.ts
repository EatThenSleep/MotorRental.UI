import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Core/Component/header/header.component';
import { FooterComponent } from './Core/Component/footer/footer.component';
import { DashboardsComponent } from './Core/Component/dashboards/dashboards.component';
import { MotorbikeListComponent } from './Feature/Motobike/motobike-list/motorbike-list.component';
import { FormsModule } from '@angular/forms';
import { MotorbikeDetailComponent } from './Feature/Motobike/motorbike-detail/motorbike-detail.component';
import { BreadcrumbComponent } from './Core/breadcrumb/breadcrumb.component';
import { LoginComponent } from './Feature/auth/login/login.component';
import { MainComponent } from './Core/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardsComponent,
    MotorbikeListComponent,
    BreadcrumbComponent,
    MotorbikeDetailComponent,
    LoginComponent,
    MainComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,  FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
