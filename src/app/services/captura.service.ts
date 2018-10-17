import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class CapturaService {

	BASE_URL:string = "http://localhost:3000";

  constructor(private http:HttpClient){}

  	getCaptura(){
		return this.http.get('http://localhost:3000/captura');
	}

	deleteCaptura(id:number){
		let url = `${this.BASE_URL}/captura/${id}`;
    	return this.http.delete(url);
  }

}
