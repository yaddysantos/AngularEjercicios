import { Component, OnInit } from '@angular/core';
import { Persona } from '../Models/persona.model';
import { LogginService } from '../Services/LogginService.service';
import { PersonaService } from '../Services/Personas.service';

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

  mostrar=false;
  //********************** */
  tituloFor = 'Listado de personas';
  personas: Persona[] = [];

  constructor(private logginService: LogginService, private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personas = this.personaService.personas;
  }

  agregarPersona(){
    this.mensaje = 'Persona agregada';
    this.mostrar = true;
  }

  modifyTittle(event: Event){
    this.titulo = (<HTMLInputElement>event.target).value;
  }
  /******** */
  // personaAgregada(persona: Persona){
  //   //this.personas.push(persona);
  //   this.personaService.AgregarPersona(persona)
  // }
}
