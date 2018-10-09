import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {

    private apiKey: string;
    private url: string;

    public constructor(public http: Http) {
        this.apiKey = '5f386d0eea792de8e4b3a55cbe7680e4';
        this.url = `https://api.openweathermap.org/data/2.5/weather?APPID=${this.apiKey}&q=`;
    }

    public getWeather(city: string) {
        return new Promise((resolve, reject) => {
            this.http.get(this.url + city)
                .subscribe((result: any) => {
                    resolve(result.json());
                },
                    (error) => {
                        reject(error.json());
                    });
        });
    }
}
