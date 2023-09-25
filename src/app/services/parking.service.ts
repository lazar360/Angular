import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Parkinginfo } from '../common/parkinginfo';

@Injectable({
  providedIn: 'root',
})
export class ParkingService {
  private url =
    'https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_parkings-publics-nantes/records?limit=20';
  constructor(private httpClient: HttpClient) {}

  getParkings(): Parkinginfo[]{
    let parkings:Parkinginfo[] = [];
    let parking1:Parkinginfo = {
      id:0,
      nom: 'parking1',
      nbPlacesDispo: 42,
      nbPlacesTotal:50,
      statut:"OUVERT",
      heureMaj:"12h00"
      }
      let parking2:Parkinginfo = {
        id:1,
        nom: 'parking2',
        nbPlacesDispo: 60,
        nbPlacesTotal:60,
        statut:'OUVERT',
        heureMaj:'12 h 30'
        }
  
        let parking3:Parkinginfo = {
          id:2,
          nom: 'parking3',
          nbPlacesDispo: 45,
          nbPlacesTotal:45,
          statut:'FERME',
          heureMaj:"13 h 00"
          }
          parkings.push(parking1);
          parkings.push(parking2);
          parkings.push(parking3);
    
    return parkings;
  }

}
