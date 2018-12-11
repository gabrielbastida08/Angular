import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PartidasService } from '../../services/partidas.service';

@Component({
  selector: 'app-modificar-partidas',
  templateUrl: './modificar-partidas.component.html',
  styleUrls: ['./modificar-partidas.component.css']
})
export class ModificarPartidasComponent {

	theId:any;
	partidasData:Object;
  insertedData;

	newObjet:any={
    numero_partida:"",
    monto_presupuestado:"",
    monto_ejercido:"",
    categoria_significado:"",
  }

  constructor(private _activatedRoute:ActivatedRoute, private _partidasService:PartidasService, private _router:Router)
  {
  	this._activatedRoute.params.subscribe(result=>{
  		this.theId = result['id'];
  	});

  	this._partidasService.getPartidasId(this.theId).subscribe(answer=>{
    this.partidasData = answer['data'].row[0];

    this.partidasData['numero_partida'] ? this.newObjet.numero_partida = this.partidasData['numero_partida'] : this.newObjet.numero_partida = ""
    this.partidasData['monto_presupuestado'] ? this.newObjet.monto_presupuestado = this.partidasData['monto_presupuestado'] : this.newObjet.monto_presupuestado = ""
    this.partidasData['monto_ejercido'] ? this.newObjet.monto_ejercido = this.partidasData['monto_ejercido'] : this.newObjet.monto_ejercido = ""
    this.partidasData['categoria_significado'] ? this.newObjet.categoria_significado = this.partidasData['categoria_significado'] : this.newObjet.categoria_significado = ""
	});
  }
  saveData(){
    this._partidasService.updatePartidas(this.newObjet).subscribe(res=>{
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