import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class PoaService {

	BASE_URL:string = "http://localhost:3000";

  constructor(private http:HttpClient){}

  getPoa(){
  	let url = `${this.BASE_URL}/poa`;
  	return this.http.get(url);
  }

  deletePoa(id:number){
    let url = `${this.BASE_URL}/poa/${id}`;
    return this.http.delete(url);
  }
}