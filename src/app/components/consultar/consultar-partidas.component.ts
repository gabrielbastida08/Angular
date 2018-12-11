import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PartidasService } from '../../services/partidas.service';

@Component({
  selector: 'app-consultar-partidas',
  templateUrl: './consultar-partidas.component.html',
  styleUrls: ['./consultar-partidas.component.css']
})
export class ConsultarPartidasComponent {

  partidasData:any[] = [];

  constructor(private _PartidasService:PartidasService, private _router:Router) {
    _PartidasService.getPartidas()
    .subscribe( (data:any) =>{
      this.partidasData = data;
    });
  }

  eliminarDatos(numero_partida:any, id:any)
  {
    this._PartidasService.deletePartidas(numero_partida).subscribe((Response:any)=>{
      if (Response.success){
        this.partidasData.splice(id,1);
        console.log("deleted id: " + id + " msg: " + Response.data.msg);
      }
      else{
        console.log("UPS: " + Response.data.msg);
      }
    });
  }

  modificarDatos(index:number)
  {
    this._router.navigate(['/ModificarPartidas',index]);
  }
}