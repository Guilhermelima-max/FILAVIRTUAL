import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { FilasDisponiveisPage } from '../filas-disponiveis/filas-disponiveis';

/**
 * Generated class for the UsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  }

  ionViewDidLoad(){
    this.menu.swipeEnable(true);
  }
abrirFiladisponivel(){
this.navCtrl.setRoot(FilasDisponiveisPage)
}}
