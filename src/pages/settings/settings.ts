import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';

@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html',
})
export class SettingsPage {

    public city: string;

    public constructor(public navCtrl: NavController, private storage: Storage, private toastCtrl: ToastController) {

    }

    public ionViewDidLoad() {
        this.getCity();
    }

    public saveSettings() {
        this.storage.set('city', this.city);
        let toast = this.toastCtrl.create({
            message: 'Settings saved successfully',
            duration: 1500,
            position: 'bottom'
        });
        toast.present();
    }

    public getCity() {
        this.storage.get('city').then((value: string) => {
            if (value != null) {
                this.city = value;
            } else {
                this.city = 'Chicago';
            }
        });
    }

}
