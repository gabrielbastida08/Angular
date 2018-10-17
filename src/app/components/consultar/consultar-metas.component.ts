import { Component } from '@angular/core';
import { MetasService } from '../../services/metas.service';

@Component({
  selector: 'app-consultar-metas',
  templateUrl: './consultar-metas.component.html',
  styleUrls: ['./consultar-metas.component.css']
})
export class ConsultarMetasComponent{

	metasData:any[] = [];

	constructor(private _metasService:MetasService) {
    	_metasService.getMetas()
    		.subscribe( (data:any) =>{
      		this.metasData = data;
    });
  }

  eliminarDatos(numero_meta:any, id:any)
  {
    this._metasService.deleteMetas(numero_meta).subscribe((Response:any)=>{
      
      if (Response.success) {
        this.metasData.splice(id,1);
        console.log("deleted id: " + id + " msg: " + Response.data.msg);
      }
      else
      {
        console.log("UPS :" + Response.data.msg);
      }
    });
  }
}