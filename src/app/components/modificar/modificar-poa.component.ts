import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar-poa',
  templateUrl: './modificar-poa.component.html',
  styleUrls: ['./modificar-poa.component.css']
})
export class ModificarPoaComponent {

  constructor(private _activatedRoute:ActivatedRoute)
  {
  	this._activatedRoute.params.subscribe(result=>{
  		console.log(result['id']);
  	});
  }

}
