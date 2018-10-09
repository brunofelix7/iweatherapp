import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';

@Component({
    selector: 'page-account',
    templateUrl: 'account.html',
})
export class AccountPage {

    public icon: string;
    public email: string;

    public constructor(public navCtrl: NavController, 
        private auth: AuthProvider, 
        public appCtrl: App,
        private storage: Storage) {
        this.icon = 'https://image.flaticon.com/icons/png/128/149/149071.png';
        this.getUserSession();
    }

    public logout() {
        this.storage.set('user', null);
        this.auth.logout();
        this.appCtrl.getRootNav().push(LoginPage);
    }

    public getUserSession() {
        this.storage.get('user').then((value: string) => {
            if(value != null) {
                this.email = value;
            } 
        });
    }

}
