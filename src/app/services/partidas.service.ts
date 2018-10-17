import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class PartidasService {

	BASE_URL:string = "http://localhost:3000";

  constructor(private http:HttpClient){}

  getPartidas(){
  	return this.http.get('http://localhost:3000/partidas');
  }

  deletePartidas(id:number){
    let url = `${this.BASE_URL}/partidas/${id}`;
    return this.http.delete(url);
  }

}
