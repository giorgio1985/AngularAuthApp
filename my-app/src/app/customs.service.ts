import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customs } from './customs';

@Injectable({
  providedIn: 'root'
})
export class CustomsService {

  constructor(private http: HttpClient, private customs: Customs) { }

  anagrafica(customs) {
  //this.http.post() 
  }

}
