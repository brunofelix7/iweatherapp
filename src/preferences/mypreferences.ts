import { AppPreferences } from "@ionic-native/app-preferences";
import { Injectable } from "@angular/core";

@Injectable()
export class MyPreferences {

    public constructor(private appPreferences: AppPreferences) {
        // if (this.platform.is('cordova')) {
        //    this.preferences.get("key");
        //    this.preferences.set("key", "Bruno");
        // }
    }

    public set(key: string, value: string) {
        this.appPreferences.store(key, value);
    }

    public get(key: string) {
        try {
            this.appPreferences.fetch(key).then((value: string) => {
                if (value != null) {
                    console.log(value);
                } else {
                    console.log('Empty');
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

}