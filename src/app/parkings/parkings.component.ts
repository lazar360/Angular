import { Component, OnInit } from '@angular/core';
import { Parkinginfo } from '../common/parkinginfo';

@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.css']
})
export class ParkingsComponent implements OnInit{
  
  parkings:Parkinginfo[] = [];
  
  ngOnInit(): void {
    
    let parking1:Parkinginfo = {
    id:0,
    nom: 'parking1',
    nbPlacesDispo: 50,
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
        this.parkings.push(parking1);
        this.parkings.push(parking2);
        this.parkings.push(parking3);
  }
}
