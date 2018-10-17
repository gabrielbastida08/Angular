import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTING } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

import { PoaService } from './services/poa.service'
import { CapturaService } from './services/captura.service'
import { PartidasService } from './services/partidas.service'
import { MetasService } from './services/metas.service'




import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { ConsultarPoaComponent } from './components/consultar/consultar-poa.component';
import { ConsultarCapturaComponent } from './components/consultar/consultar-captura.component';
import { ConsultarPartidasComponent } from './components/consultar/consultar-partidas.component';
import { ConsultarMetasComponent } from './components/consultar/consultar-metas.component';
import { ModificarPoaComponent } from './components/modificar/modificar-poa.component';
import { ModificarCapturaComponent } from './components/modificar/modificar-captura.component';
import { ModificarPartidasComponent } from './components/modificar/modificar-partidas.component';
import { ModificarMetasComponent } from './components/modificar/modificar-metas.component';
import { AgregarPoaComponent } from './components/agregar/agregar-poa.component';
import { AgregarCapturaComponent } from './components/agregar/agregar-captura.component';
import { AgregarPartidasComponent } from './components/agregar/agregar-partidas.component';
import { AgregarMetasComponent } from './components/agregar/agregar-metas.component';
import { KeysPipe } from './pipes/keys.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    HomeComponent,
    ConsultarPoaComponent,
    ConsultarCapturaComponent,
    ConsultarPartidasComponent,
    ConsultarMetasComponent,
    ModificarPoaComponent,
    ModificarCapturaComponent,
    ModificarPartidasComponent,
    ModificarMetasComponent,
    AgregarPoaComponent,
    AgregarCapturaComponent,
    AgregarPartidasComponent,
    AgregarMetasComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [
  PoaService,
  CapturaService,
  PartidasService,
  MetasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
