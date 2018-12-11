import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoaService } from '../../services/poa.service';

@Component({
  selector: 'app-consultar-poa',
  templateUrl: './consultar-poa.component.html',
  styleUrls: ['./consultar-poa.component.css']
})
export class ConsultarPoaComponent {

  poaData:any[] = [];

  constructor(private _poaService:PoaService, private _router:Router) {

    _poaService.getPoa()
    .subscribe( (data:any) =>{
      this.poaData = data;
    });
  }

  eliminarDatos(numPartida:any, id:any)
  {
    this._poaService.deletePoa(numPartida).subscribe((Response:any)=>{

      if(Response.success)
      {
        this.poaData.splice(id, 1);
        console.log("deleted id: " + id + " msg: " + Response.data.msg);
      }
      else
      {
        console.log("UPS :" + Response.data.msg);
      }
      
    });
  }

  modificarDatos(index:number)
  {
    this._router.navigate(['/ModificarPoa',index]);
  }
}