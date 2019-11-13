import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customs } from './customs';

@Injectable({
  providedIn: 'root'
})
export class CustomsService {

// qui inserito url del back end

  constructor(private http: HttpClient, private customs: Customs) { }

  //anagrafica(customs)   {
  //this.http.post() 
  }

}
