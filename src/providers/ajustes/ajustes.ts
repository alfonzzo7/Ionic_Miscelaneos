import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Platform } from 'ionic-angular';

@Injectable()
export class AjustesProvider {

  ajustes = {
    mostrarIntroduccion:true
  }

  constructor(private plataform: Platform,
              private storage: Storage) {
    console.log('Hello AjustesProvider Provider');
  }

  cargarStorage(){

    let promesa = new Promise((resolve, reject) => {
      if(this.plataform.is("cordova")){
        //Dispositivo
        console.log('Inicializando storage');
        this.storage.ready()
            .then(() => {
              // Or to get a key/value pair
              console.log('Storage listo');
              this.storage.get('ajustes').then((val) => {
                if(val){
                  this.ajustes = val;
                }
                resolve();
              });
            });
      }else{
        //Escritorio
        if(localStorage.getItem("ajustes")){
          this.ajustes = JSON.parse(localStorage.getItem("ajustes"));
        }

        resolve();
      }
    });

    return promesa;
  }

  guardarStorage(){
    if(this.plataform.is("cordova")){
      //Dispositivo
      this.storage.ready()
          .then(() => {
            // set a key/value
            this.storage.set("ajustes", this.ajustes);
          });
    }else{
      //Escritorio
      localStorage.setItem("ajustes", JSON.stringify(this.ajustes));
    }
  }

}
