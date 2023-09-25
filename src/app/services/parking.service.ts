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
            return {
              id: parkingData.idobj,
              nom: parkingData.nom_complet,
              nbPlacesDispo: parkingData.capacite_voiture,
              nbPlacesTotal: parkingData.capacite_voiture,
              statut: parkingData.presentation,
              heureMaj: '', // You can fill this if you have the information in the API
            };
          })
        )
      );
  }
}