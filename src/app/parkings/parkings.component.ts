import { Component, OnInit } from '@angular/core';
import { Parkinginfo } from '../common/parkinginfo';
import { ParkingService } from '../services/parking.service';

@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.css']
})
export class ParkingsComponent implements OnInit{
  
  parkings: Parkinginfo[] = [];

  constructor(private parkingService: ParkingService){}
  
  ngOnInit(): void {
    
   this.parkingService.getParkings().subscribe(
    res => {
      
      this.parkings = res;
    }
    )
  }
}
