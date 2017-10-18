import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';
 
declare var google: any;

@IonicPage()
@Component({
  selector: 'page-localizacao',
  templateUrl: 'localizacao.html',
})
export class LocalizacaoPage {
  map: GoogleMap;
  mapJavascript:google.maps.Map;
  mapElement: HTMLElement;
  mapLoaded: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public googleMaps: GoogleMaps) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalizacaoPage');
    this.mapElement = document.getElementById('map');

    if(!this.mapLoaded)
      this.loadMapJavascript();
  }

  loadMap() {
    
    console.log('loadMap', document.getElementById('map'));
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: -9.5705924,
          lng: -35.7501363
        },
        zoom: 17
      }
    };
    console.log('mapOptions: ', mapOptions);
    this.map = this.googleMaps.create(this.mapElement, mapOptions);
    console.log('map', this.map)
    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        // Now you can use all methods safely.
        this.map.addMarker({
            icon: 'assets/icon/icon.png',
            animation: 'DROP',
            position: {
              lat: -9.5705924,
              lng: -35.7501363
            }
          })
      });
  }
  loadMapJavascript(){
    let latLng = new google.maps.LatLng(-9.5705924, -35.7501363);
    let marker: google.maps.Marker;
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    let markerOptions: google.maps.MarkerOptions = {
      position: latLng,
      map: this.mapJavascript,
      icon: 'assets/icon/icon.png'
    }
    this.mapJavascript = new google.maps.Map(this.mapElement, mapOptions);
    marker.setOptions(markerOptions);
    marker.setMap(this.mapJavascript);
  }
}
