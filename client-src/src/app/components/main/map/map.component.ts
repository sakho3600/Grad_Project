import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { BranchService } from '../../../services/branch/branch.service';
import { AdvertismentService } from '../../../services/advertisement/advertisment.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  mymap: any;
  geojsonLayer: any;
  geojson: any;
  public branches = [];
  public advertisment=[];
  constructor(private _branchService:BranchService, private _advertismentService:AdvertismentService) {
    /* http.get('../../../../assets/map.geojson').subscribe(response => {
      this.geojsonLayer = response.json();
      this.geojson = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[34.8486328125,29.420460341013133],[34.892578125,29.726222319395504],[34.2333984375,31.27855085894653],[32.2998046875,31.353636941500987],[30.9814453125,31.615965936476076],[29.0478515625,30.826780904779774],[24.960937499999996,31.80289258670676],[24.960937499999996,21.983801417384697],[36.650390625,21.90227796666864],[32.431640625,29.80251790576445],[34.365234375,27.916766641249065],[34.8486328125,29.420460341013133]]]}}]}
      L.geoJSON(this.geojson).addTo(this.mymap);
    }); */
  }
  onMapClick(event) {
    let l = event.latlng;
    console.log(l);
    return l;
  }

  ngOnInit() {
    this.mymap = L.map('mapid').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?', {
      maxZoom: 18,
    }).addTo(this.mymap);

    this._branchService.getBranches().subscribe(
      data => {this.branches = data;
        L.marker([data[0].branch_location.lat,data[0].branch_location.lng], { icon: myIcon }).addTo(this.mymap);},
      err => console.log(err)
    )
    this._advertismentService.getAdvertisment().subscribe(
      data => {this.advertisment = data;
        L.marker([data[0]. ad_location.lat,data[0]. ad_location.lng], { icon: myIcon }).addTo(this.mymap);},
      err => console.log(err)
    )


    var myIcon = L.icon({
      iconUrl: '../../assets/adidas_PNG22.png',
      iconRetinaUrl: '../../assets/adidas_PNG22.png',
      iconSize: [50, 50],
      iconAnchor: [13, 41],
      popupAnchor: [-3, -76],
      /* shadowUrl: '../../assets/adidas_PNG22.png',
      shadowRetinaUrl: '../../assets/adidas_PNG22.png', */
      /*       shadowSize: [12, 12],
            shadowAnchor: [22, 94] */
    });
    
    L.marker([50.505, 30.57], { icon: myIcon }).addTo(this.mymap);
    L.marker([51.505, -0.09], { icon: myIcon }).addTo(this.mymap);

    this.mymap.on('click', this.onMapClick);
  }

}
