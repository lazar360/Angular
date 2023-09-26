import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Parkinginfo } from '../common/parkinginfo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ParkingService {
  private url =
    'https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_parkings-publics-nantes-disponibilites/records?limit=20';

  constructor(private httpClient: HttpClient) {}

  getParkings(): Observable<Parkinginfo[]> {
    return this.httpClient
      .get<any>(this.url) // Use "any" here to handle the API response
      .pipe(
        map((response) =>
          response.results.map((parkingData: any) => {
            console.log(parkingData);
            return {
              identifiant: parkingData.idobj,
              nom: parkingData.grp_nom,
              adresse: 'longitude : ' + parkingData.location.lon + ' - latitude : ' +  parkingData.location.lat,
              nbPlacesVoiture: parkingData.grp_disponible,
            };
          })
        )
      );
  }
}
