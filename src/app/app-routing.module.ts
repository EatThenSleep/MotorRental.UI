import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotorbikeListComponent } from './Feature/Motobike/motobike-list/motorbike-list.component';
import { MotorbikeDetailComponent } from './Feature/Motobike/motorbike-detail/motorbike-detail.component';

const routes: Routes = [
  { path: 'motorbike', component: MotorbikeListComponent },
  { path: 'motorbike/detail/:id', component: MotorbikeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
