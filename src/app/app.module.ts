import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ParkingsComponent } from './parkings/parkings.component';
import { HttpClientModule } from '@angular/common/http';
import { ParkingService } from './services/parking.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Routes, RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { ParkingsRelaisComponent } from './parkings-relais/parkings-relais.component';

const routes:Routes =[
  {path:'parkings', component: ParkingsComponent},
  {path:'parkings-relais', component: ParkingsRelaisComponent},
  {path:'', redirectTo:'/parkings', pathMatch:'full'},
  {path:'**', redirectTo:'/parkings', pathMatch:'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    ParkingsComponent,
    ParkingsRelaisComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FontAwesomeModule,
    MatButtonModule, 
    MatMenuModule,
  ],
  providers: [ParkingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
