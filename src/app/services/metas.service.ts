import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class MetasService {

	BASE_URL:string = "http://localhost:3000";

  constructor(private http:HttpClient){}

  getMetas(){
  	let url = `${this.BASE_URL}/metas`;
  	return this.http.get(url);
	}

  getMetasId(id:number)
  {
    let url = `${this.BASE_URL}/metasId/${id}`;

    return this.http.get(url);
  }

	deleteMetas(id:number){
		let url = `${this.BASE_URL}/metas/${id}`;
    	return this.http.delete(url);
  }

  insertMetas(data:any){
    let url = `${this.BASE_URL}/metas`;
    let body = JSON.stringify(data);
    let headers = new HttpHeaders({'Content-Type':  'application/json'});

    return this.http.post(url,body,{headers}).map(res=>{
      return res;
    });
  }

  updateMetas(data:any){
    let url = `${this.BASE_URL}/metas/${data['numero_meta']}`;
    let body = JSON.stringify(data);
    let headers = new HttpHeaders({'Content-Type':  'application/json'});

    return this.http.put(url,body,{headers}).map(res=>{
      return res;
    });
  }
}