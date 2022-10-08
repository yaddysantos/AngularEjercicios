import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../Models/persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  //Recibira la informacion del componente padre hacia el hijo
  @Input() persona: Persona;
  @Input() indice: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
