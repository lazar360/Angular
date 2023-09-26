import { Component, OnInit } from '@angular/core';
import { Parkinginfo } from '../common/parkinginfo';
import { ParkingService } from '../services/parking.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.css'],
})
export class ParkingsComponent implements OnInit {
  parkings: Parkinginfo[] = [];
  isLoaded: boolean = false;

  constructor(private parkingService: ParkingService) {}

  ngOnInit(): void {
    this.loadParkingsData();
        }
      
        loadParkingsData(): void {
          forkJoin([
            this.parkingService.getParkings(),
            this.parkingService.getAddressParkings(),
          ]).subscribe((data) => {
            const parkingsWithAddress: Parkinginfo[] = data[1].reduce(
              (result: Parkinginfo[], item: Parkinginfo) => {
                const parking = data[0].find((p) => p.id === item.id); 
      
                if (parking) {
                  result.push({
                    id: parking.id,
                    nom: parking.nom,
                    adresse: item.adresse,
                    nbPlacesVoiture: parking.nbPlacesVoiture,
                  });
                }
      
                return result;
              },
              []
            );
      
            this.parkings = parkingsWithAddress;
          });
        }
      }
      
      
  

