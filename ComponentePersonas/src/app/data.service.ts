import {HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';
import { Persona } from './persona.model';

@Injectable()
export class DataServices{
    urlDB = 'https://listado-personas-a59b1-default-rtdb.firebaseio.com/datos.json'
    constructor(private httClient: HttpClient, private loginService: LoginService){}

    cargarPersonas(){
        const token = this.loginService.getIdToken();
        return this.httClient.get(this.urlDB+'?auth='+token);
    }

    guardarPersonas(personas: Persona[]){
        const token = this.loginService.getIdToken();

        this.httClient.put(this.urlDB+'?auth='+token, personas)
        .subscribe(
            r => console.log("Resultado guardar personas", r),
            error => console.log("Error al guardar personas"+error));
    }

    modificarPersona(index: number, persona: Persona){
        const token = this.loginService.getIdToken();

        let url: string;
        url = 'https://listado-personas-a59b1-default-rtdb.firebaseio.com/datos/'+ index + '.json?auth='+token;

        this.httClient.put(url, persona)
        .subscribe(r => console.log("Resultado modificar persona: " + r),
            error => console.error("Error en modificar persona: "+error)
        )
    }

    eliminarPersona(index: number){
        const token = this.loginService.getIdToken();

        let url: string;
        url = 'https://listado-personas-a59b1-default-rtdb.firebaseio.com/datos/'+ index + '.json?auth='+token;

        this.httClient.delete(url)
        .subscribe(r => console.log("Resultado eliminar persona: " + r),
            error => console.error("Error en eliminar persona: "+error)
        )
    }
}