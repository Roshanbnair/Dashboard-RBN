import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { StaffComponent } from './staff/staff.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { LastComponent } from './last/last.component';

const routes: Routes = [
  {
    path: "", component: MainComponent
  },
  {
    path:"appointments",component:AppointmentsComponent
  },
  {
    path:"staff",component:StaffComponent
  },
  {
    path:"reviews",component:ReviewsComponent
  },
  {
    path:"help",component:LastComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
