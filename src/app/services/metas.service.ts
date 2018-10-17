import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class MetasService {

	BASE_URL:string = "http://localhost:3000";

  constructor(private http:HttpClient){}

  getMetas(){
  	let url = `${this.BASE_URL}/metas`;
  	return this.http.get(url);
	}

	deleteMetas(id:number){
		let url = `${this.BASE_URL}/metas/${id}`;
    	return this.http.delete(url);
  }
}
