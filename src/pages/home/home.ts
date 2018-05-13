import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	@ViewChild('map') mapElement: ElementRef; 
	map: any;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap(){
 	
 	navigator.geolocation.getCurrentPosition((position) => {

	    const latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	 
	    const mapOptions = {
	      center: latLng,
	      zoom: 15,
	      mapTypeId: google.maps.MapTypeId.ROADMAP
	    }
	 
	    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

	});
 
  }

}
