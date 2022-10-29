import { Component } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titulo = 'Listado de Personas';

  constructor(){}

  ngOnInit(): void{
    firebase.initializeApp({
      apiKey: "AIzaSyDUVZLP7Cy0NBlL7AXkPeTlcdHSjJ3h0No",
      authDomain: "listado-personas-a59b1.firebaseapp.com",
    })
  }
}
