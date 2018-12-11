import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PartidasService } from '../../services/partidas.service';

@Component({
  selector: 'app-agregar-partidas',
  templateUrl: './agregar-partidas.component.html',
  styleUrls: ['./agregar-partidas.component.css']
})
export class AgregarPartidasComponent {

	data:any={
		numero_partida:"",
		monto_presupuestado:"",
		monto_ejercido:"",
		categoria_significado:"",
	}

  constructor(private _partidasService:PartidasService) { }

  saveData(){
  	this._partidasService.insertPartidas(this.data).subscribe(resp=>{
  		console.log("XXX",resp['success']);
  	});
  }

}