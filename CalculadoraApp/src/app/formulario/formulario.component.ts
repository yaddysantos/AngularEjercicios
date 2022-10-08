import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  operadorA: number;
  operadorB: number;

  //Atributo que va encargarse de enviar la informacion o el evento
  @Output() resultadoSuma = new EventEmitter<number>(); //objeto

  constructor() { }

  ngOnInit(): void {
  }

  Sumar():void{
    let result = this.operadorA + this.operadorB;
    this.resultadoSuma.emit(result);
  }
}
