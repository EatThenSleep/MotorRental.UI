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
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MotorbikeDetailComponent } from './Feature/Motobike/motorbike-detail/motorbike-detail.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardsComponent,
    MotorbikeListComponent,
    BreadcrumbComponent,
    MotorbikeDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,  FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
