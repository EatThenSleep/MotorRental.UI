import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Core/Component/header/header.component';
import { FooterComponent } from './Core/Component/footer/footer.component';
import { DashboardsComponent } from './Core/Component/dashboards/dashboards.component';
import { MotobikeListComponent } from './Feature/Motobike/motobike-list/motobike-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardsComponent,
    MotobikeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
