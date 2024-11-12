import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kar1';
  imie_nazwisko="23";
  radio="";

  wypisaniedokonsoli(){
    console.log(this.imie_nazwisko)
  }
}
