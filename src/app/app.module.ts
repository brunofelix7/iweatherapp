/**Modules */
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

/**Firebase Modules */
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

/**Components */
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { LoginPage } from '../pages/login/login';
import { AccountPage } from '../pages/account/account';
import { RegisterPage } from '../pages/register/register';
import { IntroPage } from '../pages/intro/intro';

/**Natives Components */
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppPreferences } from '@ionic-native/app-preferences';

/**Providers */
import { WeatherProvider } from '../providers/weather/weather';
import { AuthProvider } from '../providers/auth/auth';
import { MyPreferences } from '../preferences/mypreferences';

/**Firebase config */
import { config } from '../config';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        TabsPage,
        SettingsPage,
        LoginPage,
        AccountPage,
        RegisterPage,
        IntroPage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot(),
        AngularFireModule.initializeApp(config),
        AngularFireAuthModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        TabsPage,
        SettingsPage,
        LoginPage,
        AccountPage,
        RegisterPage,
        IntroPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        AppPreferences,
        MyPreferences,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        WeatherProvider,
        AuthProvider
    ]
})
export class AppModule { }
