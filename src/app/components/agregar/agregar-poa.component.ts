import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PoaService } from '../../services/poa.service';

@Component({
  selector: 'app-agregar-poa',
  templateUrl: './agregar-poa.component.html',
  styleUrls: ['./agregar-poa.component.css']
})
export class AgregarPoaComponent {

	data:any={
		partida:"",
		clave_presupuestal:"",
		total:""
	}

  constructor(private _poaService:PoaService) { }

  saveData(){
  	this._poaService.insertPoa(this.data).subscribe(resp=>{
  		console.log("XXX",resp['success']);
  	});
  }
}