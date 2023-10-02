import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Parkinginfo } from '../common/parkinginfo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ParkingsRelaisService {

private urlPlacesDispo =
  'https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_parcs-relais-nantes-metropole-disponibilites/records?limit=100';

private urlAddress =
  'https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_parcs-relais-nantes-metropole/records?limit=100';

constructor(private httpClient: HttpClient) {}

getParkingsRelais(): Observable<Parkinginfo[]> {
  return this.httpClient
    .get<any>(this.urlPlacesDispo) // Use "any" here to handle the API response
    .pipe(
      map((response) =>
        response.results.map((parkingData: any) => {
           // console.log(parkingData);
          return {
            id: parkingData.idobj,
            nom: parkingData.grp_nom,
            nbPlacesVoiture: parkingData.grp_disponible,
            heureMAJ: parkingData.grp_horodatage,
          };
        })
      )
    );
}

getAddressParkingsRelais(): Observable<Parkinginfo[]> {
  return this.httpClient
    .get<any>(this.urlAddress) // Use "any" here to handle the API response
    .pipe(
      map((response) =>
        response.results.map((parkingData: any) => {
          // console.log(parkingData);
          return {
            id: parkingData.idobj,
            adresse: parkingData.adresse + ' - ' + parkingData.commune,
            localisation:parkingData.location, // attention tableau [lon, lat]
          };
        })
      )
    );
}}
