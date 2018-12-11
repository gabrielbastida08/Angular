import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CapturaService } from '../../services/captura.service';

@Component({
  selector: 'app-agregar-captura',
  templateUrl: './agregar-captura.component.html',
  styleUrls: ['./agregar-captura.component.css']
})
export class AgregarCapturaComponent {

	data:any={
		folio:"",
		departamento:"",
		proyecto:"",
		accion:"",
		partida:"",
		monto:"",
		proceso:"",
		meta:"",
		gestiono:"",
		fecha:"",
	}

  constructor(private _capturaService:CapturaService) { }

  saveData(){
  	this._capturaService.insertCaptura(this.data).subscribe(resp=>{
  		console.log("XXX",resp['success']);
  	});
  }

}
