import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class PoaService {

	BASE_URL:string = "http://localhost:3000";

  constructor(private http:HttpClient){}

  getPoa(){
  	let url = `${this.BASE_URL}/poa`;
  	return this.http.get(url);
  }

  getPoaId(id:number){
    let url = `${this.BASE_URL}/poaId/${id}`;
    return this.http.get(url);
  }

  updatePoa(data:any){
    let url = `${this.BASE_URL}/poa/${data['partida']}`;
    let body = JSON.stringify(data);
    let headers = new HttpHeaders({'Content-Type':  'application/json'});

    return this.http.put(url,body,{headers}).map(res=>{
      return res;
    });
  }

  insertPoa(data:any){
    let url = `${this.BASE_URL}/poa`;
    let body = JSON.stringify(data);
    let headers = new HttpHeaders({'Content-Type':  'application/json'});

    return this.http.post(url,body,{headers}).map(res=>{
      return res;
    });

  }

  deletePoa(id:number){
    let url = `${this.BASE_URL}/poa/${id}`;
    return this.http.delete(url);
  }
}