import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  deshabilitar = false;
  mensaje = 'No se puede agregar ninguna persona';
  titulo = '';
  titulo2 = '';
  constructor() { }

  ngOnInit(): void {
  }

  agregarPersona(){
    this.mensaje = 'Persona agregada';
  }

  modifyTittle(event: Event){
    this.titulo = (<HTMLInputElement>event.target).value;
  }
}
