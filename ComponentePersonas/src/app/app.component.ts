import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';

import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titulo = 'Listado de Personas';

  constructor(private loginService: LoginService){}

  ngOnInit(): void{
    initializeApp({
        apiKey: "AIzaSyDUVZLP7Cy0NBlL7AXkPeTlcdHSjJ3h0No",
        authDomain: "listado-personas-a59b1.firebaseapp.com",
        databaseURL: "https://listado-personas-a59b1-default-rtdb.firebaseio.com",
        projectId: "listado-personas-a59b1",
        storageBucket: "listado-personas-a59b1.appspot.com",
        messagingSenderId: "765934084133",
        appId: "1:765934084133:web:ac7e67da6f143021965fcc",
        measurementId: "G-1G46CZHGWM"
    });
  }

  isAutenticado(){
    //mostrar el boton de login o salir
    return this.loginService.isAutenticado();
  }

  salir(){
    this.loginService.logOut();
  }
}
