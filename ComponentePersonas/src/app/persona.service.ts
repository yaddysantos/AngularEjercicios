import { EventEmitter, Injectable } from '@angular/core';
import { DataServices } from './data.service';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';

@Injectable()
export class PersonasService {
  // personas: Persona[] = [
  //   new Persona('Juan', 'Perez'),
  //   new Persona('Laura', 'Juarez'),
  // ]; 

  personas: Persona[] = [];
  saludar = new EventEmitter<number>();

  constructor(private loggingService:LoggingService,
    private dataService: DataServices){}


  setPersonas(personas: Persona[]){
    //actualizar el arreglo de personas de la DB
    this.personas = personas;
  }

  obtenerPersonas(){
    return this.dataService.cargarPersonas();
  }

  agregarPersona(persona: Persona) {
    this.loggingService.enviaMensajeAConsola('agregamos persona:' + persona.nombre)
    if (this.personas == null) {
      this.personas = [];
    }
    this.personas.push(persona);
    this.dataService.guardarPersonas(this.personas);
  }

  encontrarPersona(index:number){
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(index: number, persona: Persona){
    let persona1 = this.personas[index]; // regresando el objeto en ese indice
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
    // se vuelve a guardar el arreglo para regenerar los indices en la BD
    this.dataService.modificarPersona(index, persona);
  }

  eliminarPersona(index: number){
    this.personas.splice(index,1);
    this.dataService.eliminarPersona(index);
    this.modificarPersonas();
  }

  modificarPersonas(){
    if (this.personas != null) {
      this.dataService.guardarPersonas(this.personas)
    }
  }
}
