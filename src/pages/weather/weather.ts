import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { WeatherService } from '../../providers/weather-service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,public weatherService: WeatherService, public loadingCtrl: LoadingController) {
    this.weatherService.getWeather().then(theResult => {
    this.theWeather = theResult;
    this.currentData = this.theWeather.currently;
    this.daily = this.theWeather.daily;
    let loader = this.loadingCtrl.create({
    content: "Loading weather data...",
    duration: 3000
});
  });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeatherPage');
  }

  

}
