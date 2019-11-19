import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customs } from './customs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomsService {

url1 = environment.url + 'registers';




  constructor(private http: HttpClient, private customs: Customs) { }

  anagrafica(customs)   {
this.http.post<Customs>(this.url1, customs).subscribe( () => {
	 console.log('custom.service.ts file');
  console.log(customs);
}); 
	

 
 }

}
