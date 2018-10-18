import { RouterModule,Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { ConsultarComponent } from './components/consultar/consultar.component'
import { ModificarComponent } from './components/modificar/modificar.component'
import { AgregarComponent } from './components/agregar/agregar.component'

import { ConsultarPoaComponent } from './components/consultar/consultar-poa.component'
import { ConsultarCapturaComponent } from './components/consultar/consultar-captura.component'
import { ConsultarPartidasComponent } from './components/consultar/consultar-partidas.component'
import { ConsultarMetasComponent } from './components/consultar/consultar-metas.component'


import { ModificarPoaComponent } from './components/modificar/modificar-poa.component'
import { ModificarCapturaComponent } from './components/modificar/modificar-captura.component'
import { ModificarPartidasComponent } from './components/modificar/modificar-partidas.component'
import { ModificarMetasComponent } from './components/modificar/modificar-metas.component'

import { AgregarPoaComponent } from './components/agregar/agregar-poa.component'
import { AgregarCapturaComponent } from './components/agregar/agregar-captura.component'
import { AgregarPartidasComponent } from './components/agregar/agregar-partidas.component'
import { AgregarMetasComponent } from './components/agregar/agregar-metas.component'


const APP_ROUTES:Routes = [
	{ path:'home', component: HomeComponent },

	{ path:'ConsultarPoa', component: ConsultarPoaComponent },
	{ path:'ConsultarCaptura', component: ConsultarCapturaComponent },
	{ path:'ConsultarPartidas', component: ConsultarPartidasComponent },
	{ path:'ConsultarMetas', component: ConsultarMetasComponent },

	{ path:'ModificarPoa/:id', component: ModificarPoaComponent },
	{ path:'ModificarCaptura/:id', component: ModificarCapturaComponent },
	{ path:'ModificarPartidas/:id', component: ModificarPartidasComponent },
	{ path:'ModificarMetas/:id', component: ModificarMetasComponent },
	
	{ path:'AgregarPoa', component: AgregarPoaComponent },
	{ path:'AgregarCaptura', component: AgregarCapturaComponent },
	{ path:'AgregarPartidas', component: AgregarPartidasComponent },
	{ path:'AgregarMetas', component: AgregarMetasComponent },

	{ path:'**',pathMatch:'full', redirectTo:'home'}

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);