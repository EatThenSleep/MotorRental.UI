import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotobikeListComponent } from './Feature/Motobike/motobike-list/motobike-list.component';

const routes: Routes = [
  {path: 'motobike/list', component:MotobikeListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
