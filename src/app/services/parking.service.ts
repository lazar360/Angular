import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Parkinginfo } from '../common/parkinginfo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ParkingService {
  private urlPlacesDispo =
    'https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_parkings-publics-nantes-disponibilites/records?limit=100';

  private urlAddress =
    'https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_parkings-publics-nantes/records?limit=100';

  constructor(private httpClient: HttpClient) {}

  getParkings(): Observable<Parkinginfo[]> {
    return this.httpClient
      .get<any>(this.urlPlacesDispo) // Use "any" here to handle the API response
      .pipe(
        map((response) =>
          response.results.map((parkingData: any) => {
            // console.log(parkingData);
            return {
              identifiant: parkingData.idobj,
              nom: parkingData.grp_nom,
              nbPlacesVoiture: parkingData.grp_disponible,
            };
          })
        )
      );
  }

  getAddressParkings(): Observable<Parkinginfo[]> {
    return this.httpClient
      .get<any>(this.urlAddress) // Use "any" here to handle the API response
      .pipe(
        map((response) =>
          response.results.map((parkingData: any) => {
            // console.log(parkingData);
            return {
              identifiant: parkingData.idobj,
              adresse: parkingData.adresse + ' - ' + parkingData.commune
            };
          })
        )
      );
  }
}
