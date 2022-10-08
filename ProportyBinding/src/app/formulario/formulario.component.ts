import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from '../Models/persona.model';
import { LogginService } from '../Services/LogginService.service';
import { PersonaService } from '../Services/Personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  // providers: [LogginService]
})
export class FormularioComponent implements OnInit {

  //Se encarga de crear un msj de componente hijo a padre
  @Output() personaCreada = new EventEmitter<Persona>(); 
  
  nombreInput: string = '';
  apellidoInput: string = '';

  //Servicio agregado por inyeccion de dependencias
  constructor(private logginService:LogginService, private personaService: PersonaService) { }

  ngOnInit(): void {
  }

  agregarPersona2(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    //this.personas.push(persona1);
    //this.logginService.enviarMensajeConsola("enviamos persona :" + persona1.nombre+persona1.apellido);
    //this.personaCreada.emit(persona1);
    this.personaService.AgregarPersona(persona1);
  }
}
