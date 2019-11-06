import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  onSubmit() {
  alert("Cliccato ok");
  }
}
