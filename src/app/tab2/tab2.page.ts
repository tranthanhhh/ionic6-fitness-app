import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'
import { ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Capacitor } from '@capacitor/core';


declare var google: any;
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  map: any;
  coords:any;
  latitude: any;
  longitude:any;
  mm = 0;
  ss = 0;
  ms = 0;
  isRunning = false;
  timerId = 0;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  constructor( ) {
    this.location();
  }

  ionViewDidEnter() {
    this.showMap();
  }

  async location() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.latitude = coordinates.coords.latitude;
    this.longitude = coordinates.coords.longitude;
    console.log('Current position:', this.latitude, this.longitude); 
  }
  addMarker(){

    let marker = new google.maps.Marker({
      map: this.map,
      position: this.map.getCenter()
    });
  }

  showMap() {
    const location = new google.maps.LatLng(this.latitude,this.longitude);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarker(); 
  }

  clickHandler() {
    if (!this.isRunning) {
      // Stop => Running
        this.timerId = window.setInterval(() => {
        this.ms++;

        if (this.ms >= 100) {
          this.ss++;
          this.ms = 0;
        }
        if (this.ss >= 60) {
          this.mm++;
          this.ss = 0
        }
      }, 10);
    } else {
      clearInterval(this.timerId);
    }
    this.isRunning = !this.isRunning;
  }

  format(num: number) {
    return (num + '').length === 1 ? '0' + num : num + '';
  }
}
