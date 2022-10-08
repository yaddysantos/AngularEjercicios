import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora App';
 
  resultadoPadre: number;

  resultadoOperacion(result: number){
    this.resultadoPadre = result;

  }
}
