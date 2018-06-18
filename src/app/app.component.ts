import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { AjustesProvider } from '../providers/ajustes/ajustes';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = HomePage;
  rootPage:any;

  constructor(private platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private _ajustes: AjustesProvider) {
    platform.ready().then(() => {
      this._ajustes.cargarStorage().then(() => {
        if(this._ajustes.ajustes.mostrarIntroduccion){
          this.rootPage = "introduccion";
        }else{
          this.rootPage = HomePage;
        }

        this.platform.pause.subscribe(() => {
          console.log("aplicación a segundo plano");
        });

        this.platform.resume.subscribe(() => {
          console.log("aplicación a primer plano");
        });

        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.hide();
      });
    });
  }
}
