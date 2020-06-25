import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdministradorPage } from '../administrador/administrador';
import { AdmPage } from '../adm/adm';
import { FilasCriadasPage } from '../filas-criadas/filas-criadas';

/**
 * Generated class for the AdmmenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admmenu',
  templateUrl: 'admmenu.html',
})
export class AdmmenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdmmenuPage');
  }
  abrirCriarfila(){
    this.navCtrl.setRoot(AdmPage);
  }
abrirfilas(){
  this.navCtrl.setRoot(FilasCriadasPage);
}
}
