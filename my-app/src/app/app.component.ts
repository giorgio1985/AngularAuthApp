import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customs } from './customs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

registerForm: FormGroup;
customs = new Customs();

constructor(private formBuilder: FormBuilder, private router: Router) {}

ngOnInit() {
	this.registerForm = this.formBuilder.group({
	email: ['', Validators.required],
	password: ['', Validators.required]

	});
}
 get f() { return this.registerForm.controls; }

 onSubmit() {

 this.customs.email = this.registerForm.value.email;
 this.customs.password = this.registerForm.value.password;

 if(this.registerForm.invalid) {
alert("errore");

 } else if(!this.registerForm.invalid) {
 alert("Benvenuto: "+ this.customs.email);
 return this.router.navigateByUrl("/welcome");


 }
 

 }

}
