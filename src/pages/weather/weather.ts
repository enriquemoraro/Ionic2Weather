import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Refresher } from 'ionic-angular';
import { WeatherService } from '../../providers/weather-service';
import { Geolocation } from 'ionic-native';
import { CurrentLoc } from '../../interfaces/current-loc';

/*
  Generated class for the Weather page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {

  theWeather: any = {};
  currentData: any = {};
  daily: any = {};
  loader: LoadingController;
  refresher: Refresher;
  currentLoc: CurrentLoc = {lat:0 , lon: 0};

  constructor(public navCtrl: NavController, public navParams: NavParams,public weatherService: WeatherService, public loadingCtrl: LoadingController) {
    this.weatherService.getWeather().then(theResult => {
    this.theWeather = theResult;
    this.currentData = this.theWeather.currently;
    this.daily = this.theWeather.daily;
    let loader = this.loadingCtrl.create({
    content: "Loading weather data...",
    duration: 3000
    });
Geolocation.getCurrentPosition().then(pos => { 
  console.log ( 'Lat:' + pos.coords.latitude + ', lon:' + pos.coords.longitude); 
});
    loader.present();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeatherPage');
  }

  doRefresh(refresher) {
  setTimeout(() => {
    refresher.complete();
  }, 2000);
}


  

}
