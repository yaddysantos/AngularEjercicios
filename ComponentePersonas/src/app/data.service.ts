import {HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices{
    urlDB = 'https://listado-personas-a59b1-default-rtdb.firebaseio.com/datos.json'
    constructor(private httClient: HttpClient){}

    cargarPersonas(){
        return this.httClient.get(this.urlDB);
    }

    guardarPersonas(personas: Persona[]){
        this.httClient.put(this.urlDB, personas)
        .subscribe(
            r => console.log("Resultado guardar personas", r),
            error => console.log("Error al guardar personas"+error));
    }

    modificarPersona(index: number, persona: Persona){
        let url: string;
        url = 'https://listado-personas-a59b1-default-rtdb.firebaseio.com/datos/'+ index + '.json';

        this.httClient.put(url, persona)
        .subscribe(r => console.log("Resultado modificar persona: " + r),
            error => console.error("Error en modificar persona: "+error)
        )
    }

    eliminarPersona(index: number){
        let url: string;
        url = 'https://listado-personas-a59b1-default-rtdb.firebaseio.com/datos/'+ index + '.json';

        this.httClient.delete(url)
        .subscribe(r => console.log("Resultado eliminar persona: " + r),
            error => console.error("Error en eliminar persona: "+error)
        )
    }
}