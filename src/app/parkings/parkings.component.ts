import { Component, OnInit } from '@angular/core';
import { Parkinginfo } from '../common/parkinginfo';
import { ParkingService } from '../services/parking.service';
import { forkJoin } from 'rxjs';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.css'],
})
export class ParkingsComponent implements OnInit {
  faCarSide = faCarSide;
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
      // Concat Data sur un seul tableau
      const concatData = data[0].concat(data[1]);
      // console.log(concatData);
      let id: number, nbPlacesVoiture;
      let nom, adresse, heureMAJ, localisation;
      let obj: Parkinginfo;
      let parkingsTmp: Parkinginfo[] = [];
      for (let i: number = 0; i < concatData.length; i++) {
        id = concatData[i].id;
        nom = concatData.find(function (element) {
          if (element.nom && element.id === id) {
            return element.nom;
          }
          return '';
        });
        adresse = concatData.find(function (element) {
          if (element.adresse && element.id === id) {
            return element.adresse;
          }
          return '';
        });
        nbPlacesVoiture = concatData.find(function (element) {
          if (element.nbPlacesVoiture && element.id === id) {
            return element.nbPlacesVoiture;
          }
          return 0;
        });
        heureMAJ= concatData.find(function (element) {
          if (element.heureMAJ && element.id === id) {
            return element.heureMAJ;
          }
          return '';
        });
        localisation= concatData.find(function (element) {
          if (element.localisation && element.id === id) {
            return element.localisation;
          }
          return '';
        });
        obj = {
          id: Number(id),
          nom: nom?.nom,
          nbPlacesVoiture: Number(nbPlacesVoiture?.nbPlacesVoiture),
          adresse: adresse?.adresse,
          heureMAJ:heureMAJ?.heureMAJ,
          localisation:localisation?.localisation,
        };
        parkingsTmp.push(obj);
        
      }

      // console.log(parkingsTmp);
      this.parkings = [...new Set(parkingsTmp)];
    });
  }

  calculStyleNbrePlaces(parking: Parkinginfo) {
    if (parking.nbPlacesVoiture) {
      switch (true) {
        case parking.nbPlacesVoiture <= 10:
          return { color: 'red' };
        case parking.nbPlacesVoiture > 10 && parking.nbPlacesVoiture <= 50:
          return { color: 'orange' };
        default:
          return { color: 'green' };
      }
    } else {
      return { color: 'green' };
    }
  }
}
