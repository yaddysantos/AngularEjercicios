import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona.model';
import { PersonasService } from '../persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent implements OnInit {
  personas: Persona[] = [];

  constructor(
    // private loggingService:LoggingService,
    private router: Router,
    private personasService: PersonasService
  ) {}

  ngOnInit(): void {
    //Recuperar la lista de las personas
    //this.personas = this.personasService.personas;
    this.personasService.obtenerPersonas()
    .subscribe(
      (personas: Persona[]) =>{
        this.personas = personas;
        this.personasService.setPersonas(personas);
      }
    )
  }

  agregar() {
    this.router.navigate(['personas/agregar']);
  }
}
