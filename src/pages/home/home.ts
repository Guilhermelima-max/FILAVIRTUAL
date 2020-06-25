import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { UsuarioPage } from '../usuario/usuario';
import { AdministradorPage } from '../administrador/administrador';
import { CadastrarPage } from '../cadastrar/cadastrar';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }
 ionViewDidLoad(){
    this.menu.swipeEnable(false);
 }
  abrirUsuario(){
    this.navCtrl.setRoot(UsuarioPage);
  }
 abrirADM(){
   this.navCtrl.setRoot(AdministradorPage);
 }
 abrirCadastrar(){
   this.navCtrl.setRoot(CadastrarPage);
 }

}
