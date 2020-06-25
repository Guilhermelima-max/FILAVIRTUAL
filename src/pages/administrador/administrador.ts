import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AdmPage } from '../adm/adm';
import { AdmmenuPage } from '../admmenu/admmenu';

/**
 * Generated class for the AdministradorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-administrador',
  templateUrl: 'administrador.html',
})
export class AdministradorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdministradorPage');
  }
  abrirHome(){
    this.navCtrl.setRoot(HomePage);  

}
abriradm(){
  this.navCtrl.setRoot(AdmmenuPage);
}
}
