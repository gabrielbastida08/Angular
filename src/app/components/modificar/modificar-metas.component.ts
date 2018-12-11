import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MetasService } from '../../services/metas.service';

@Component({
  selector: 'app-modificar-metas',
  templateUrl: './modificar-metas.component.html',
  styleUrls: ['./modificar-metas.component.css']
})
export class ModificarMetasComponent {

	metasData:Object;
	theId:any;
  insertedData;

	newObjet:any={
    numero_meta:" ",
    meta_significado:" ",
    descripcion:" "
  }

  constructor(private _activatedRoute:ActivatedRoute,private _metasService:MetasService, private _router:Router)
  {
  	this._activatedRoute.params.subscribe(result=>{
  		this.theId = result['id'];
  	});


  	this._metasService.getMetasId(this.theId).subscribe(answer=>{
    this.metasData = answer['data'].row[0];

    this.metasData['numero_meta'] ? this.newObjet.numero_meta = this.metasData['numero_meta'] : this.newObjet.numero_meta = ""
    this.metasData['meta_significado'] ? this.newObjet.meta_significado = this.metasData['meta_significado'] : this.newObjet.meta_significado = ""
    this.metasData['descripcion'] ? this.newObjet.descripcion = this.metasData['descripcion'] : this.newObjet.descripcion = ""
    });
  }

  saveData(){
    this._metasService.updateMetas(this.newObjet).subscribe(res=>{
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