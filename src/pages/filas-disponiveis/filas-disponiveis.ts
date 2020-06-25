import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilaPage } from '../fila/fila';

/**
 * Generated class for the FilasDisponiveisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filas-disponiveis',
  templateUrl: 'filas-disponiveis.html',
})
export class FilasDisponiveisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilasDisponiveisPage');
  }
  abrirFila(){
    this.navCtrl.setRoot(FilaPage);
  }

}
