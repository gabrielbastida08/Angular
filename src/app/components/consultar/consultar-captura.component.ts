import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CapturaService } from '../../services/captura.service';

@Component({
  selector: 'app-consultar-captura',
  templateUrl: './consultar-captura.component.html',
  styleUrls: ['./consultar-captura.component.css']
})
export class ConsultarCapturaComponent {

	capturaData:any[] = [];

  constructor(private _consultarService:CapturaService, private _router:Router){

  	_consultarService.getCaptura()
  		.subscribe( (data:any) => {
  			this.capturaData = data;
  	});
  }

  eliminarDatos(folio:any, id:any)
  {
    this._consultarService.deleteCaptura(folio).subscribe((Response:any)=>{
      if (Response.success)
      {
        this.capturaData.splice(id,1);
        console.log("deleted id: " + id + "msg: " + Response.data.msg);
      }
      else
      {
        console.log("UPS: " + Response.data.msg);
      }
    });
  }

    modificarDatos(index:number)
  {
    console.log("el index: " + index);
    this._router.navigate(['/ModificarCaptura',index]);
  }
  
}
