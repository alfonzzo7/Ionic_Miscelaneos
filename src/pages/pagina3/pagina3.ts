import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AjustesProvider } from '../../providers/ajustes/ajustes';

@IonicPage({
  name: "pagina3"
})
@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _ajustes: AjustesProvider) {
  }

  mostrarIntroduccion(){
    this._ajustes.ajustes.mostrarIntroduccion = true;
    this._ajustes.guardarStorage();
    this.navCtrl.push("introduccion");
  }

}
