import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsuarioPage } from '../pages/usuario/usuario';
import { AdministradorPage } from '../pages/administrador/administrador';
import { AdmPage } from '../pages/adm/adm';
import { AdmmenuPage } from '../pages/admmenu/admmenu';
import { FilasCriadasPage } from '../pages/filas-criadas/filas-criadas';
import { FilasDisponiveisPage } from '../pages/filas-disponiveis/filas-disponiveis';
import { FilaPage } from '../pages/fila/fila';
import { CadastrarPage } from '../pages/cadastrar/cadastrar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    UsuarioPage,
    AdministradorPage,
    HomePage,
    AdmPage,
    AdmmenuPage,
    FilasCriadasPage,
    FilasDisponiveisPage,
    FilaPage,
    CadastrarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    UsuarioPage,
    AdministradorPage,
    HomePage,
    AdmPage,
    AdmmenuPage,
    FilasCriadasPage,
    FilasDisponiveisPage,
    FilaPage,
    CadastrarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
