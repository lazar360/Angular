import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ParkingsComponent } from './parkings/parkings.component';
import { HttpClientModule } from '@angular/common/http';
import { ParkingService } from './services/parking.service';


@NgModule({
  declarations: [
    AppComponent,
    ParkingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ParkingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
