import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PoaService } from '../../services/poa.service';

@Component({
  selector: 'app-modificar-poa',
  templateUrl: './modificar-poa.component.html',
  styleUrls: ['./modificar-poa.component.css']
})
export class ModificarPoaComponent {

	poaData:Object;
	theId:any;
  insertedData;

  newObjet:any={
    clave_presupuestal:" ",
    partida:" ",
    total:" "
  }

  constructor(private _activatedRoute:ActivatedRoute,private _poaService:PoaService, private _router:Router)
  {
  	this._activatedRoute.params.subscribe(result=>{
  		this.theId = result['id'];
  	});

    this._poaService.getPoaId(this.theId).subscribe(answer=>{
      this.poaData = answer['data'].row[0];

      this.poaData['clave_presupuestal'] ? this.newObjet.clave_presupuestal = this.poaData['clave_presupuestal'] : this.newObjet.clave_presupuestal = ""
      this.poaData['partida'] ? this.newObjet.partida = this.poaData['partida'] : this.newObjet.partida = ""
      this.poaData['total'] ? this.newObjet.total = this.poaData['total'] : this.newObjet.total = ""
    });
  }

  saveData(){
    this._poaService.updatePoa(this.newObjet).subscribe(res=>{
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