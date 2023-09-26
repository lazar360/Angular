import { Component, OnInit } from '@angular/core';
import { Parkinginfo } from '../common/parkinginfo';
import { ParkingService } from '../services/parking.service';

@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.css'],
})
export class ParkingsComponent implements OnInit {
  parkings: Parkinginfo[] = [];
  parkingsAddressTmp:any[]=[];
  isLoaded: boolean = false;

  constructor(private parkingService: ParkingService) {}

  ngOnInit(): void {
    this.parkingService.getAddressParkings().subscribe((res) => {
       console.log(res);
      this.parkingsAddressTmp = res;
    });
    
    this.parkingService.getParkings().subscribe((res) => {
      res.forEach(park => {
        this.parkingsAddressTmp.forEach(address => {
          park.adresse = park.id === address.id ? address.adresse : park.adresse;   
        })
      })
      this.parkings = res;
      this.isLoaded = true;
    });
  }
}
