import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CapturaService } from '../../services/captura.service';

@Component({
  selector: 'app-modificar-captura',
  templateUrl: './modificar-captura.component.html',
  styleUrls: ['./modificar-captura.component.css']
})
export class ModificarCapturaComponent {

	capturaData:Object;
	theId:any;
  insertedData;

  	newObjet:any={
    folio:"",
    departamento:"",
    proyecto:"",
    accion:"",
    partida:"",
    monto:"",
    proceso:"",
    meta:"",
    gestiono:"",
    fecha:""
  }

  constructor(private _activatedRoute:ActivatedRoute, private _capturaService:CapturaService, private _router:Router)
  {
  	this._activatedRoute.params.subscribe(result=>{
  		this.theId = result['id'];
  	});

  	this._capturaService.getCapturaId(this.theId).subscribe(answer=>{
  		this.capturaData = answer['data'].row[0];

  		this.capturaData['folio'] ? this.newObjet.folio = this.capturaData['folio'] : this.newObjet.folio = ""
  		this.capturaData['departamento'] ? this.newObjet.departamento = this.capturaData['departamento']: this.newObjet.departamento = ""
  		this.capturaData['proyecto'] ? this.newObjet.proyecto = this.capturaData['proyecto']: this.newObjet.proyecto = ""
  		this.capturaData['accion'] ? this.newObjet.accion = this.capturaData['accion']: this.newObjet.accion = ""
  		this.capturaData['partida'] ? this.newObjet.partida = this.capturaData['partida']: this.newObjet.partida = ""
  		this.capturaData['monto'] ? this.newObjet.monto = this.capturaData['monto']: this.newObjet.monto = ""
  		this.capturaData['proceso'] ? this.newObjet.proceso = this.capturaData['proceso']: this.newObjet.proceso = ""
  		this.capturaData['meta'] ? this.newObjet.meta = this.capturaData['meta']: this.newObjet.meta = ""
  		this.capturaData['gestiono'] ? this.newObjet.gestiono = this.capturaData['gestiono']: this.newObjet.gestiono = ""
  		this.capturaData['fecha'] ? this.newObjet.fecha = this.capturaData['fecha']: this.newObjet.fecha = ""
  	});
  }

  saveData(){
    this._capturaService.updateCaptura(this.newObjet).subscribe(res=>{
      if(res['msg'] == "success")
      {
        this.insertedData = true;
      }
      else
      {
        this.insertedData = false;
      }
    });
  }

  navigate(){
    this._router.navigate(['/home']);
  }
}