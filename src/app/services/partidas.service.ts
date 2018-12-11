import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class PartidasService {

	BASE_URL:string = "http://localhost:3000";

  constructor(private http:HttpClient){}

  getPartidas(){
  	return this.http.get('http://localhost:3000/partidas');
  }

  getPartidasId(id:number)
  {
    let url = `${this.BASE_URL}/partidasId/${id}`;

    return this.http.get(url);
  }

  deletePartidas(id:number){
    let url = `${this.BASE_URL}/partidas/${id}`;
    return this.http.delete(url);
  }

  insertPartidas(data:any){
    let url = `${this.BASE_URL}/partidas`;
    let body = JSON.stringify(data);
    let headers = new HttpHeaders({'Content-Type':  'application/json'});

    return this.http.post(url,body,{headers}).map(res=>{
      return res;
    });
  }

  updatePartidas(data:any){
    let url = `${this.BASE_URL}/partidas/${data['numero_partida']}`;
    let body = JSON.stringify(data);
    let headers = new HttpHeaders({'Content-Type':  'application/json'});

    return this.http.put(url,body,{headers}).map(res=>{
      return res;
    });
  }

}
