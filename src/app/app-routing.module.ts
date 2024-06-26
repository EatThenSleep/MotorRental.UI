import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotorbikeListComponent } from './Feature/Motobike/motobike-list/motorbike-list.component';
import { MotorbikeDetailComponent } from './Feature/Motobike/motorbike-detail/motorbike-detail.component';
import { LoginComponent } from './Feature/auth/login/login.component';
import { MainComponent } from './Core/Component/main/main.component';
import { OwnerAuthGuard } from './Feature/auth/guard/owner.auth.guard';
import { AppointmentsListComponent } from './Feature/Appointments/appointments-list/appointments-list.component';
import { HomepageComponent } from './Core/homepage/homepage.component';

import { HomePageListComponent } from './Feature/Home/home-page-list/home-page-list.component';

import { RegisterComponent } from './Feature/auth/register/register.component';
import { AddMotorbikeComponent } from './Feature/Motobike/add-motorbike/add-motorbike.component';
import { MotorbikeHomeDetailComponent } from './Feature/Home/motorbike-detail/motorbike-detail.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'owner',
    component: MainComponent,
    children: [
      { path: 'motorbike', component: MotorbikeListComponent },
      { path: 'motorbike/detail/:id', component: MotorbikeDetailComponent },
      { path: 'motorbike/add', component: AddMotorbikeComponent },
      { path: 'appointments', component: AppointmentsListComponent },


    ],
    canActivate: [OwnerAuthGuard],
  },
  {
    path: '',
    component: HomepageComponent,
    children: [
    { path: '', component: HomePageListComponent },
    { path: 'motorbike/:id', component: MotorbikeDetailComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
