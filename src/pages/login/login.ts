import { Component } from '@angular/core';
import { AuthProvider } from './../../providers/auth/auth';
import { NavController, AlertController, App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { User } from '../../models/user';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    public user = {} as User;

    public constructor(
        public navCtrl: NavController, 
        public appCtrl: App,
        private auth: AuthProvider, 
        private alert: AlertController,
        private storage: Storage){

    }

    public ionViewDidLoad() {
        //  this.auth.logout();
        this.sessionCheck();
    }

    public async login(user: User) {
        // Valida se foi informado email e password
        if (user.email == "" || user.password == "") {
            this.alertMessage('Erro', 'É necessário informar o email e senha');
        } else {
            try {
                // Chama o método para fazer login
                const result = await this.auth.login(user);
                if (result) {
                    // Se ocorrer tudo bem redireciona para a página tabs
                    this.storage.set('user', this.user.email);
                    this.appCtrl.getRootNav().push(TabsPage);
                }
            } catch (e) {
                this.alertMessage('Erro ao logar', e.message);
            }
        }
    }

    public async register(user: User) {
        // Valida se foi informado email e password
        if (user.email == "" || user.password == "") {
            this.alertMessage('Erro', 'É necessário informar o email e senha');
        } else {
            try {
                // Chama o método para cadastrar usuário
                const result = await this.auth.register(user);
                if (result) {
                    // Se ocorrer tudo bem redireciona para a página tabs
                    this.storage.set('user', this.user.email);
                    this.appCtrl.getRootNav().push(TabsPage);
                }
            } catch (e) {
                this.alertMessage('Erro ao cadastrar', e.message);
            }
        }
    }

    public sessionCheck() {
        this.storage.get('user').then((value: string) => {
            if(value != null) {
                this.navCtrl.setRoot(TabsPage);
            } 
        });
    }

    /**Método para exibir as nossas mensagens de erro. */
    public alertMessage(title, message) {
        let al = this.alert.create({
            title: title,
            subTitle: message,
            buttons: ['Fechar']
        });
        al.present();
    }

}
