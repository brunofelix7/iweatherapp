import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { ApiResponse } from '../../models/apiresponse';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    public icon: string;
    public weather: ApiResponse;

    public constructor(public navCtrl: NavController, private provider: WeatherProvider, private storage: Storage) {
        this.icon = 'assets/imgs/ic_weather.png';
    }

    public ionViewWillEnter() {
        this.showWeather();
    }

    public showWeather() {
        this.storage.get('city').then((value: string) => {
            if(value != null) {
                this.getWeather(value);
            } else {
                this.getWeather('Chicago');
            }
        });
    }

    public getWeather(city: string) {
        this.provider.getWeather(city).then((response: ApiResponse) => {
            this.weather = response;
        });
    }

    public toCelsius(kelvin: number) {
        return Math.round(kelvin - 273.15);
    }

    public toFahrenheit(kelvin: number) {
        return Math.round((kelvin - 273.15) * 9/5 + 32);
    }

    public toKm(miles: number) {
        return Math.round(miles * 3.6);
    }

}
