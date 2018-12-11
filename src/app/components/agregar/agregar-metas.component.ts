import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MetasService } from '../../services/metas.service';

@Component({
  selector: 'app-agregar-metas',
  templateUrl: './agregar-metas.component.html',
  styleUrls: ['./agregar-metas.component.css']
})
export class AgregarMetasComponent {

	data:any={
		numero_meta:"",
		meta_significado:"",
		descripcion:""
	}

  constructor(private _metasService:MetasService) { }

  saveData(){
  	this._metasService.insertMetas(this.data).subscribe(resp=>{
  		console.log("XXX",resp['success']);
  	});
  }
}