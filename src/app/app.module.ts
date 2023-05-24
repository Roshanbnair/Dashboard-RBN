import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { PatientStatisticComponent } from './main/patient-statistic/patient-statistic.component';
import { RecentPatientsComponent } from './main/recent-patients/recent-patients.component';
import { RevenueComponent } from './main/revenue/revenue.component';
import { TopRatedDoctorsComponent } from './main/top-rated-doctors/top-rated-doctors.component';
import { TopWidgetsComponent } from './main/top-widgets/top-widgets.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import {MatDividerModule} from '@angular/material/divider';
import { AppointmentsComponent } from './appointments/appointments.component';
import { StaffComponent } from './staff/staff.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { LastComponent } from './last/last.component'; 
import { MatTableModule } from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    FooterComponent,
    PatientStatisticComponent,
    RecentPatientsComponent,
    RevenueComponent,
    TopRatedDoctorsComponent,
    TopWidgetsComponent,
    AppointmentsComponent,
    StaffComponent,
    ReviewsComponent,
    LastComponent,
    LoginComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
