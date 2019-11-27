import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customs } from './customs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomsService {

url1 = environment.url + 'registers/login';




  constructor(private http: HttpClient, private customs: Customs) { }


   public anagrafica(customs) {
   // const headers = this.auth.getHeaders(false);
   console.log("urrraaaaaa");
    return this.http.post(this.url1, customs, {
    //  headers: headers
    })


}

}
