import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotorbikeListComponent } from './Feature/Motobike/motobike-list/motorbike-list.component';
import { MotorbikeDetailComponent } from './Feature/Motobike/motorbike-detail/motorbike-detail.component';
import { LoginComponent } from './Feature/auth/login/login.component';
import { MainComponent } from './Core/Component/main/main.component';
import { OwnerAuthGuard } from './Feature/auth/guard/owner.auth.guard';
import { AppointmentsListComponent } from './Feature/Appointments/appointments-list/appointments-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'owner',
    component: MainComponent,
    children: [
      { path: 'motorbike', component: MotorbikeListComponent },
      { path: 'motorbike/detail/:id', component: MotorbikeDetailComponent },

      { path: 'appointments', component: AppointmentsListComponent },
    ],
    canActivate: [OwnerAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
