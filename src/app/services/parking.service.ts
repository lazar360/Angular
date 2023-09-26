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
    'https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_parkings-publics-nantes/records?limit=20';

  constructor(private httpClient: HttpClient) {}

  getParkings(): Observable<Parkinginfo[]> {
    return this.httpClient
      .get<any>(this.url) // Use "any" here to handle the API response
      .pipe(
        map((response) =>
          response.results.map((parkingData: any) => {
            console.log(parkingData);
            return {
              id: parkingData.idobj,
              nom: parkingData.nom_complet,
              adresse: parkingData.adresse + ' - ' + parkingData.commune,
              nbPlacesVoiture: parkingData.capacite_voiture,
              nbPlacesMoto: parkingData.capacite_moto,
              nbPlacesVelo: parkingData.capacite_velo
            };
          })
        )
      );
  }
}