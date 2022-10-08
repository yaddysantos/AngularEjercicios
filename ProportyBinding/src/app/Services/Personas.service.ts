import { Injectable } from '@angular/core';
import { Persona } from '../Models/persona.model';
import { LogginService } from './LogginService.service';

@Injectable()
export class PersonaService {
  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Juarez'),
    new Persona('pepito', 'perez'),
  ];

  constructor (
    private logginService:LogginService
    ){

  }

  AgregarPersona(persona: Persona) {
    this.logginService.enviarMensajeConsola("agregamos personaa " + persona.nombre)
    this.personas.push(persona);
  }
}
