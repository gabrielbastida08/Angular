import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConsultarService{

	constructor(private http:HttpClient){
	}
}