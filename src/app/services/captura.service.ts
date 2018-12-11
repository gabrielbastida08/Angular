import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class CapturaService {

	BASE_URL:string = "http://localhost:3000";

  constructor(private http:HttpClient){}

  	getCaptura(){
		return this.http.get('http://localhost:3000/captura');
	}

	getCapturaId(id:number)
	{
		let url = `${this.BASE_URL}/capturaId/${id}`;

	    return this.http.get(url);
	}

	deleteCaptura(id:number){
		let url = `${this.BASE_URL}/captura/${id}`;
    	return this.http.delete(url);
  }

  insertCaptura(data:any){
    let url = `${this.BASE_URL}/captura`;
    let body = JSON.stringify(data);
    let headers = new HttpHeaders({'Content-Type':  'application/json'});

    return this.http.post(url,body,{headers}).map(res=>{
      return res;
    });
  }

  updateCaptura(data:any){
    let url = `${this.BASE_URL}/captura/${data['folio']}`;
    let body = JSON.stringify(data);
    let headers = new HttpHeaders({'Content-Type':  'application/json'});

    return this.http.put(url,body,{headers}).map(res=>{
      return res;
    });
  }

}